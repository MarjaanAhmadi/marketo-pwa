// @flow
import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import compose from 'recompose/compose';
import ProductContent from '../../ProductContent'
import BaseLayout from '../../BaseLayout';
import { host } from '../../../utils/helpers';

const ProductContainer = (props) => {
    const products = useSelector(state => state.products)

    return (
        <ProductContent  />
    );
}


export default ProductContainer;
