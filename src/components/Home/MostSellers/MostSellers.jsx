import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import CarouselItems from '../../../mainComponents/Carousel/Carousel';
import products from '../../../mocks/products';
import ArrorwBackIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import ProductReq from '../../../requests/products';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        marginTop: 15,
        alignItems: 'center',
        padding: '0 15px 0 0'
    },
    mostSellerTitles : {
        justifyContent: 'space-between',
        flexDirection: "row",
        display: 'flex'
    },
    title: {
        marginBottom: 8,
        color: '#858585',
        fontSize: 14,
        fontSize: '1rem',
        lineHeight: '1.571'       
    },
    more: {
        color: '#9A9A9A',
        fontSize: 11,
        alignSelf: 'center'
    },
    moreIcon: {
        color: '#9A9A9A'
    }
})

const MostSellers = () => {
    const history = useHistory();
    const [showMore, setShowMore] = useState(true)
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const [params, setParams] = useState({
        size: 10,
        start: 0,
        status: 'ACTIVE',
        // categoryId: 3,
        topselles: true
    });
    const [mostSellers, setMostSellers] = useState({
        list: []
    })
    const showMoreFunc = (more) => {
        setShowMore(more);
    }
    const getMostSellers = async () => {
        try {
            dispatch({loading: true, type: 'SHOW_LOADING'});
            const response = await ProductReq(params, null);
            if(response.data)
            setMostSellers({
                ...mostSellers,
                list: response.data
            });
            dispatch({loading: false, type: 'SHOW_LOADING'});

        } catch (error) {
            dispatch({loading: false, type: 'SHOW_LOADING'});
            
        }
    }
    useEffect(() => {
        getMostSellers();
    },[])
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.mostSellerTitles}>
            <span className={classes.title}>پرفروشترین محصولات</span> 
            {showMore ? <span className={classes.more} onClick={()=>{history.push('/products')}}>بیشتر<ArrorwBackIcon className={classes.more}/></span> : ''}
            </div>
            <CarouselItems setMore={(more) => {showMoreFunc(more)}} data={mostSellers.list}/>
        </div>
    )
}
export default MostSellers;