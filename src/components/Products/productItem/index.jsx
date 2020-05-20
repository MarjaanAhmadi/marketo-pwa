// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ProductContent from '../../ProductContent'
import BaseLayout from '../../BaseLayout';
import fetchFeed from '../../../actions/feed';
import { host } from '../../../utils/helpers';

type Props = {
  feed: Array<Object>,
  fetchFeed: Function,
  match: Object,
  isLoading: boolean,
};

class ProductContainer extends React.PureComponent<Props> {
  static defaultProps = {
    feed: [],
  }

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    const { feed, match, isLoading } = this.props;
    const { slug } = match.params;
    const post = feed.find(item => item.slug === slug);

    return (
      <BaseLayout
        title={`React PWA WWWID - ${post ? post.title : ''}`}
        description={post && post.excerpt}
        canonical={`${host}/products/${slug}`}
        image={post && post.thumbnail}
        pubDate={post && post.pubDate}
        isArticle
      >
        
        <ProductContent data={post} isLoading={isLoading} />
      </BaseLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feedReducer.feed,
    isLoading: state.feedReducerIsLoading,
    hasErrored: state.feedReducerHasErrored,
    hasFailed: state.feedReducerHasFailed,
  };
}

export default compose(
  connect(mapStateToProps, { fetchFeed }),
)(ProductContainer);
