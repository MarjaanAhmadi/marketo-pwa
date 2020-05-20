import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import AddToShoppingCard from '../../../mainComponents/AddToShoppingCard/AddToShoppingCard';
import { Divider, Modal } from '@material-ui/core';
import Label from '../../../mainComponents/label/label';
import { useHistory } from 'react-router-dom';
import ProductItemsList from '../ProductItems/index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 10,
    height: 105,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  details: {
    width: '70%',
    marginTop: 15
  },
  cardNameItem: {
    alignSelf: 'flex-start'
  },
  cardNamebutton: {
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    alignSelf: 'flex-start'
  },
  weight: {
    fontSize: 13,
    color: '#9A9A9A'
  },
  ratingcomp: {
    marginLeft: 20
  },
  price: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 10
  },
  addOrRemove: {
    marginRight: 30
  },
  priceAfterOff: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 0,
    fontWeight: 600
  },
  offAmount: {
    fontSize: 11,
    color: '#E2574C',
    textDecoration: 'line-through',
    fontWeight: 600
  },
  data : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  dataShop : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0
  },
  priceOff : {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginTop: 5
  },
  
  content: {
    flex: '1 0 auto',
    width: "100%",
    padding: "10px 16px",
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    padding: 50
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  label: {
    left: 20,
    position: 'absolute'
  },
  
}));

export default function SingleProduct(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
    <div className={classes.label}>
    <Label discount="25%" className={classes.labelText}/>

    </div>
    <CardMedia
        className={classes.cover}
        image={`http://185.147.161.71:8080/${props.product.items.length > 0 ? props.product.items[0].id : ''}.jpg`}
        title={props.product.title}
      />
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <span className={classes.name}>
            {props.product.title ? props.product.title : '-'}
          </span>
          <div className={classes.cardNamebutton}
            onClick={() => {
              
              history.push({
                pathname: '/productItems',
                state: {
                  id: props.product.id
                }
              })
              }}
          >
          <AddToShoppingCard />
          </div>
          
          <div className={classes.dataShop}>
          
         
          </div>
          
        </CardContent>
        
      </div>
      
    </Card>
  
      <Modal
            open={open}
            onClose={handleClose}
          >
            <ProductItemsList id={props.product.id}/>
          </Modal>
    </React.Fragment>
    );
}