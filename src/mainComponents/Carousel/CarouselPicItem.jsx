import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {makeStyles} from '@material-ui/styles';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';
import SingleCategory from '../../components/Home/Categories/SingleCategory/SingleCategory';
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
const CarouselPicItem = (props) => {
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
                <SingleCategory id="86fab9cc-8116-4894-a629-dc54c015f8fe" image={'http://185.147.161.71:8080/86fab9cc-8116-4894-a629-dc54c015f8fe.jpg'}/>
                <SingleCategory id="e61ac73e-b8a9-4f0d-acaf-d01434e33388" image={'http://185.147.161.71:8080/e61ac73e-b8a9-4f0d-acaf-d01434e33388.jpg'}/>
                <SingleCategory id="c0f39f68-69e9-452a-a13a-f5dffd87a8d7" image={'http://185.147.161.71:8080/c0f39f68-69e9-452a-a13a-f5dffd87a8d7.jpg'}/>
                <SingleCategory id="403bc6a9-8568-4a70-9e35-1e6ad12eea7e" image={'http://185.147.161.71:8080/403bc6a9-8568-4a70-9e35-1e6ad12eea7e.jpg'}/>
                
            </Carousel>
        </div>
    )
}
export default CarouselPicItem;