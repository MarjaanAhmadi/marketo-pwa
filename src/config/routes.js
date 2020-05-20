// @flow

import HomeContainer from '../containers/HomeContainer';
import CreateAddress from '../components/Address/CrudAddress/CreateAddress/CreateAddress';
import OrdersContainer from '../containers/OrdersContainer';
import ProductContainer from '../containers/ProductContainer';
import AddressContainer from '../containers/AddressContainer';
import CategoryContainer from '../containers/CategoryContainer';
import ShoppingCardContainer from '../containers/ShoppingCardContainer';
import PaymentContainer from '../containers/PaymentContainer';
import DeliveryTimeContainer from '../containers/DeliveryTimeContainer';
import AuthContainer from '../containers/AuthContainer';
import NotFound from '../containers/NotFoundContainer';
// import ProductItem from '../components/Products/productItem';

import ProductItemsContainer from '../containers/ProductItemsContainer';
import NearByInventories from '../containers/Inventories';


const Loading = () => null;
const routes = [
  {
    path: '/',
    component: HomeContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/createAddress',
    component: CreateAddress,
    exact: true,
    name: 'Home'
  },
  {
    path: '/orders',
    component: OrdersContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/products',
    component: ProductContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/addresses',
    component: AddressContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/categories',
    component: CategoryContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/shoppingCard',
    component: ShoppingCardContainer,
    exact: true,
    name: 'Home' 
  },
  {
    path: '/payment',
    component: PaymentContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/deliveryTime',
    component: DeliveryTimeContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/auth/login',
    component: AuthContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/productitems',
    component: ProductItemsContainer,
    exact: true,
    name: 'Home'
  },
  {
    path: '/inventories',
    component: NearByInventories,
    exact: true,
    name: 'Home'
  },
  // {
  //   path: '/productItem',
  //   component: ProductItem,
  //   exact: true,
  //   name: 'Home'
  // },
  {
    path: '/*',
    component: NotFound,
    exact: true,
    name: 'Home'
  }
  
  
]

// const ProductItem = Loadable({
//   loader: () => import('../components/Products/ProductItem'),
//   loading: Loading,
// });


export default routes;
