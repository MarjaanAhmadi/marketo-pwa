import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AppIcon from '@material-ui/icons/Apps'
import PinDropIcon from '@material-ui/icons/PinDrop';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

const useStyles = makeStyles({
    bottomBar: {
        bottom: 0,
        width: "100%",
        position: "fixed",
        backgroundColor: "white",
        borderTop: '0.1px solid #D0D0D0'
    },
    
    // MuiBottomNavigation: {

    //     height: 56,
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "#fff",
    //     color: "black"
    // },
    // actionColor: {
    //     color: "black",
    //     opacity: 1
    // }
  });
  const StyledBadge = withStyles((theme) => ({
    badge: {
      top: 3,
      padding: '0 2px',
      fontFamily: 'IranSans'
    },
  }))(Badge);
const Footer = () => {
    const classes = useStyles();
    const history = useHistory();
    const orderItemIds = useSelector(state => state.orderItemIds);
    const [value, setValue] = useState('home');
    const [count, setCount] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
      let countItem=0;
      orderItemIds.forEach(element => {
        countItem = element.count + countItem;
      });
       
      setCount(countItem);
    },[orderItemIds]);
    return(
        <BottomNavigation
        className={classes.bottomBar}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction
          onClick={() => {history.replace('/orders')}} label="خریدها" value='orders' icon={<FormatListBulletedIcon />} />
        <BottomNavigationAction onClick={() => {history.replace('/addresses')}} label="جردن" value='addresses' icon={<PinDropIcon />} />
       
        <BottomNavigationAction onClick={() => {history.replace('/shoppingcard')}} 
        label="سبد خرید" value='shoppingCard'
         icon={<StyledBadge max={9} badgeContent={count} color="error"><ShoppingCartIcon /></StyledBadge>} />
        <BottomNavigationAction onClick={() => {history.replace('/products')}}
         label="محصولات" value='categories'
         icon={<AppIcon />} />
        1
        {/* <BottomNavigationAction onClick={() => {history.replace('/categories')}} label="دسته بندی" value='categories' icon={<AppIcon />} /> */}
        <BottomNavigationAction onClick={() => {history.replace('/')}} label="خانه" value='home' icon={<HomeIcon />} />
      
      </BottomNavigation>
    )
}
export default Footer;