import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {makeStyles} from '@material-ui/styles';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import DiscountItem from '../../components/DiscountItem/DiscountItem';
const useStyles = makeStyles({
    media: {
        width: 50,
        height: 50
    },
    carousel: {
        marginTop: 5
    }
})
const CarouselDiscountItems = (props) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    
    const onChange = e => {
        setValue( e.target ? e.target.value : e );
    }
    return(
        <div className={classes.carousel}>
            <Carousel
                slidesPerPage={2.5}
                slidesPerScroll={1}
                offset={5}
                itemWidth={160}
                rtl 
                keepDirectionWhenDragging
                value={value}
                onChange={onChange}
            >
            <DiscountItem/>
            <DiscountItem/>

            <DiscountItem/>

            <DiscountItem/>

            <DiscountItem/>


            </Carousel>
        </div>
    )
}
export default CarouselDiscountItems;