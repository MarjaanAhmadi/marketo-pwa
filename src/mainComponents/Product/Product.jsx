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
import AddToShoppingCard from '../AddToShoppingCard/AddToShoppingCard';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 10,
    height: 182,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    height: 283
  },
  media: {
    width: 153,
    height: 124,
    marginTop: 15,
    alignSelf: 'center'
  },
  title: {
    height: 42,
    fontSize: '1rem',
    lineHeight: '1.6',
    textAlign: 'right',
    color: '#2a2a2a',
    overflow: 'hidden',
    marginBottom: 5,
    display: 'block'
  },
  priceCurrency: {
    color: '#000',
    fontSize: '.714rem',
    lineHeight: '2.2',
    fontWeight: 400,
    padding: 2
  },
  startPrice: {
    color: '#000',
    fontSize: '1.08rem',
    lineHeight: 1.375,
    fontWeight: 700,
    letterSpacing: 'normal',
    width: '100%',
    textAlign: 'left',
    marginTop: 15
  },
  moreItems: {
    textAlign: 'left',
    fontSize: '0.7rem',
    color: '#36CE91'
  }
  
}));

const Product = (props) => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image={`http://185.147.161.71:8080/${props.product.items ? props.product.items[0].id : ''}.jpg`}
        title="Paella dish"
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.title}>
          {props.product.title}
        </div>
        <Divider light />
        <div className={classes.startPrice}>
            <span className={classes.priceCurrency}>قیمت از</span> 12000<span className={classes.priceCurrency}>تومان</span>
        </div>

        <div className={classes.moreItems}>
          مشاهده محصولات
        </div>
      {/* onClick={() => {
              
              history.push({
                pathname: '/productItems',
                state: {
                  id: props.product.id
                }
              })
              }} */}
            
      </CardContent>
      </Card>
  );
}
export default Product;