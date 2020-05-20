import React from 'react';
import {  makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../theme/theme'
const useStyles = makeStyles ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 20px'
  },
    gButton: {
      width: 100,
      borderRadius: 10,
      border: "#2C7BE5",
      height: 30,
      backgroundColor: "#36CE91",
    },
    buttonTitle: {
      color: 'white',
      fontSize: 11,
      fontWeight: 600,
      padding: 6,
      textAlign: "center",
    } 
  });
const AddToShoppingCard = (props) => {
    const classes = useStyles();
    return(
            <div className={classes.root}>
              <div className={classes.gButton}>
               <span className={classes.buttonTitle}>
               اضافه به سبد خرید  
               </span>
              </div>
            </div>

    )
}
export default AddToShoppingCard;