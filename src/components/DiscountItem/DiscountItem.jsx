import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 9,
  },
  cardEl: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    minHeight: 290,
    width: "49.5vw",
    margin: '15px 5px -5px 5px',
    paddingBottom: 0
  },
  media: {
    height: 124,
    width: 124,
    alignSelf: 'center',
    margin: 10
  },
  titleSection: {
      height: 50,
      padding: '0 10px'
  },
  titleTxt: {
    fontSize: '0.85rem',
    height: 40,
  },
  priceSection: {
    display: 'flex',
    fontSize: '0.929rem',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  discount: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontSize: '0.857rem',
    lineHeight: '1.833',
    padding: '1px 5px 0',
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: '#fb3449',
    color:'#fff',
    fontWeight: 500,
    textAlign: 'center',
    width: '100%',
    minWidth: 30
  },
  actualPrice: {
    color: '#ababab',
    textDecoration: 'line-through',
    fontSize: '.929rem',
    lineHeight: '1.692',
    width: '100%',
    display: 'block'
  },
  priceCurrency: {
    color: '#000',
    fontSize: '.714rem',
    lineHeight: '2.2',
    fontWeight: 400,
    padding: 2
  },
  price: {
    color: '#000',
    fontSize: '1.143rem',
    lineHeight: 1.375,
    fontEeight: 700,
    letterSpacing: 'normal',
    width: '100%',
    textAlign: 'left'
  },
  expiryTime: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    display: 'flex'
  },
  countDown: {
    display: 'flex',
    fontSize: 11,
    fontSize: '.786rem',
    lineHeight: 2,
    color: '#737373',
    position: 'relative',
    marginTop: 15
  },
  cardContent: {
    padding: "10px"
  } 
}));

const Product = (props) => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <div className={classes.cardEl}>
            <CardMedia
                className={classes.media}
                image='https://dkstatics-public.digikala.com/digikala-products/121109680.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60'
                title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
                <div className={classes.titleSection}>
                    <span className={classes.titleTxt}>ست پیراهن و شلوارک پسرانه مدلا کد MIC170...</span>
                </div> 
                <div className={classes.priceSection}>
                    <div className={classes.discount}>
                        <div className={classes.actualPrice}>12000</div>
                        <div className={classes.label}>25%</div>
                    </div>
                    <div className={classes.price}>11000<span className={classes.priceCurrency}>تومان</span></div>
                </div>  
                <div className={classes.expiryTime}>
                    <div className={classes.countDown}>12:22:31</div>
                </div> 
            </CardContent>
        </div>
      </Card>
  );
}
export default Product;