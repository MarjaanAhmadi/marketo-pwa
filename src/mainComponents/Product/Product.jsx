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
    alignItems: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    margin: '10px 0 -20px 0px',
    width: 100
  },
  addOrRemove: {
    padding: "5px 25px"
  },
  contentSecion: {
    height: 30
  },
  priceSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  price: {
    fontSize: 11,
    color: "#36CE91",
    fontWeight: "bold",
    alignSelf: "center"
  },
  priceOff: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    textDecoration: "line-through"
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    // marginTop: 5
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    padding: "0 3px"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image={`http://185.147.161.71:8080/${props.product.items ? props.product.items[0].id : ''}.jpg`}
        title="Paella dish"
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.contentSecion}>
          <div className={classes.priceSection}>
            {/* <span className={classes.price}>{props.product.amount}تومان</span>
            {
              props.product.off ? 
                <span className={classes.priceOff}>{props.product.offPrice}تومان</span>
              : ''
            } */}
          </div>
          <div className={classes.title}>
            <span>{props.product.title}</span>
          </div>
        </div>
        <Divider variant="light"/>
            
              <div 
              onClick={() => {
              
                history.push({
                  pathname: '/productItems',
                  state: {
                    id: props.product.id
                  }
                })
                }}>
              <AddToShoppingCard/>

                </div>
            
      </CardContent>
      </Card>
  );
}
export default Product;