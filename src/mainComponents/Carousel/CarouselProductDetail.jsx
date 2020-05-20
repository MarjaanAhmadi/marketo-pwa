import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {makeStyles} from '@material-ui/styles';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import SingleProductPic from '../../components/ProductContent/SingleProductPic/SingleProductPic';
const useStyles = makeStyles({
    media: {
        width: 50,
        height: 50
    },
    carousel: {
        marginTop: 5,
        paddingBottom: 5
    }
})
const CarouselProductDetail = (props) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [more, setMore] = useState(false);
    
    const onChange = e => {
        setValue( e.target ? e.target.value : e );
        if(e === 10){
            setMore(true);
        }
    }
    return(
        <div className={classes.carousel}>
            {more ? 'more' : ''}
            <Carousel
                dots={props.dots}
                slidesPerPage={props.slidesPerPage}
                slidesPerScroll={1}
                offset={5}
                rtl = {props.rtl}
                keepDirectionWhenDragging={props.keepDirectionWhenDragging}
                value={value}
                onChange={onChange}
            >
            {
                props.data.map((product, idx)=>{
                    return(
                        <SingleProductPic product={product} key={idx}/>
                    )
                })
            }

            </Carousel>
        </div>
    )
}
export default CarouselProductDetail;