// @flow
import * as React from 'react';
import {makeStyles} from '@material-ui/styles';
import BaseLayout from '../../components/BaseLayout';
import Search from '../../components/Home/Search/Search';
import MyOrders from '../../components/Home/MyOrders/MyOrders';
import Banner from '../../components/Home/Banner/Banner';
import MostSellers from '../../components/Home/MostSellers/MostSellers';
import Categories from '../../components/Home/Categories/Categories';
import OffSection from '../../components/Home/OffSection/offSection';
const useStyles = makeStyles({
  root: {
  }
})


const HomeContainer = () => {
  const classes = useStyles();
    return (
      
      <BaseLayout>
      <div className={classes.root}>
      <Search/>
      <MyOrders/>
      <Banner/>
      <MostSellers/>
      <Categories/>
      <OffSection />  

      {/* <MostSellers/> */}
      </div>
      </BaseLayout>
    );
  }

export default HomeContainer;