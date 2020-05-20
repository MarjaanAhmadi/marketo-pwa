import React from 'react';
import {makeStyles} from '@material-ui/styles';
import categories from "../../../mocks/categories";
import CarouselPicItem from '../../../mainComponents/Carousel/CarouselPicItem';
const useStyles = makeStyles({
    root: {
        marginTop: 15,
        alignItems: 'center'
    },
    title: {
        fontSize: 14
    },
});
const Categories = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <span className={classes.title}>دسته بندی ها</span>
            <CarouselPicItem
                slidesPerPage={3}
                rtl 
                dots={false}
                keepDirectionWhenDragging
                data={categories} />
        </div>
    )
}
export default Categories;