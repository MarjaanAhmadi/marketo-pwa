import React, { useEffect } from 'react';
import SingleProductItem from './SingleProductItem/index'
import { useSelector, useDispatch } from 'react-redux';
import productReq from '../../../requests/products';
import { defaultProps } from 'recompose';
import { useLocation } from 'react-router-dom';
import injectSheet from 'react-jss';


const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 3,
      paddingBottom: 5
    },
    item: {
      display: 'flex',
      padding: [[18, 0]],
    },
    imageWrapper: {
      flexShrink: 0,
    },
    image: {
      objectFit: 'cover',
      display: 'inline-block',
      backgroundColor: 'rgba(0, 0, 0, 0.067)',
      width: 96,
      height: 54,
      '@media (min-width: 640px)': {
        width: 250,
        height: 140,
      },
      '@media (min-width: 860px)': {
        width: 332,
        height: 186,
      },
    },
    bodyWrapper: {
      paddingLeft: 18,
      flex: '1 1 auto',
    },
    title: {
      composes: 'heading',
      lineHeight: 1,
      '& a': {
        fontSize: 18,
        color: theme.baseColor,
      },
      '@media (min-width: 640px)': {
        lineHeight: 1.5,
        '& a': {
          fontSize: 21,
        },
      },
    },
    excerpt: {
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      left: '-999em',
      lineHeight: 1.6,
      margin: [[18, 0]],
      '@media (min-width: 640px)': {
        position: 'static',
        opacity: 1,
        pointerEvents: 'auto',
        color: theme.textMuted,
      },
    },
    info: {
      fontSize: 13,
      marginRight: 6,
      color: theme.textMuted,
    },
  });
const ProductItemsList = (props) => {
  const {classes} = props;

    const location = useLocation();
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const renderProductItems = () => {
        if(products.length > 0){
            let productItems = products.filter(i => i.id === location.state.id);
            productItems = productItems[0].items;
             
            return(
                productItems.map((product, idx) => {
                    return(
                        <SingleProductItem pid={location.state.id} product={product} key={idx}/>
                    )
                })
            )
        }
        
    }
    const fetchProducts = async() => {
        try {
            const params = {};
        dispatch({loading: true, type: 'SHOW_LOADING'});

        const response = await productReq(params, null);
        
        dispatch({products: response.data, type: 'SET_PRODUCTS'});
        dispatch({loading: false, type: 'SHOW_LOADING'});

        } catch (error) {
        dispatch({loading: false, type: 'SHOW_LOADING'});
            
        }
    }
    useEffect(() => {
        
        if(products.length === 0) 
        {
           
        fetchProducts();
        }
    },[])
    return(
        <React.Fragment>
            <div className={classes.root}>
            {
                renderProductItems()
            }
            </div>
        </React.Fragment>
    )
}
export default injectSheet(styles)(ProductItemsList);