import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import CarouselItems from '../../../mainComponents/Carousel/Carousel';
import DiscountItem from '../../DiscountItem/DiscountItem';

const useStyles = makeStyles({
    offSection: {
        backgroundColor: '#36CE91',
        height: 360
    },
    offSectionContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: '20px 10px'
    },
    moreSection: {
        paddingRight: 5,
        paddingLeft: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 10
    },
    imgSection: {
        width: 140
    },
    moreBtn: {
        fontSize: '0.875rem',
        color: 'white',
        fontWeight: 700,
        padding: '9px 0',
        lineHeight: '1.833'
    }
});

const OffSection = () => {
    
    const classes = useStyles();
    return(
        <div className={classes.offSection}>
            <div className={classes.offSectionContent}>
                <div className={classes.moreSection}>
                    <img className={classes.imgSection} src="https://www.digikala.com/static/files/ded69944.png"/>
                    <span className={classes.moreBtn}>مشاهده همه</span>
                </div>
                <div>
                    <DiscountItem />
                </div>
            </div>
        </div>
    )
}
export default OffSection;