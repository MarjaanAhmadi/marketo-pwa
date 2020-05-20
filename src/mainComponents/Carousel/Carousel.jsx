import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {makeStyles} from '@material-ui/styles';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import Product from '../Product/Product';
const useStyles = makeStyles({
    media: {
        width: 50,
        height: 50
    },
    carousel: {
        marginTop: 5
    }
})
const CarouselItems = (props) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    
    const onChange = e => {
        setValue( e.target ? e.target.value : e );
        if(e === 6){
            props.setMore(true);
        }
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
            {
                props.data.map((product, idx)=>{
                    return(
                        <Product product={product} key={idx}/>
                    )
                })
            }

            </Carousel>
        </div>
    )
}
export default CarouselItems;