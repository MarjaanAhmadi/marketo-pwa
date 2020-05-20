import React, {useState} from 'react';
import {  makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
const useStyles = makeStyles ({
  root: {
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center'
  },
    gButton: {
      width: "100%",
      borderRadius: 10,
      border: "#2C7BE5",
      height: 40,
      fontFamily: 'IranSans',
      backgroundColor: '#2C7BE5',
      color: 'white'
    },
  });
const MyOrders = () => {
    const classes = useStyles();
    const history = useHistory();
    const [location, setLocation] = useState({
      lat: 0,
      lon: 0
    })
    const getPosition = async () => {
      await navigator.geolocation.getCurrentPosition(
        position => setLocation({
          ...location,
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }), 
        err => console.log(err)
      );
  }
  useEffect(() =>{
    getPosition();
  },[])
    return(
           <div className={classes.root}>
              <Button
                onClick={() => {
                  // getPosition();
                  getPosition();
                  history.push('/inventories')
                }}
                variant="contained"
                className={classes.gButton}>
               میوه و تره بارهای اطراف من
              </Button>
           </div>
    )
}
export default MyOrders;