import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../main/home';
import Cart from '../main/cart';
import Account from '../main/account';
import Products from '../main/products';
//import ViewProducts from '../main/products/view-products';
import Wishlist from '../main/wishlist';
const {Navigator, Screen} = createBottomTabNavigator();

const Tb = ()=>(
  <Navigator screenOptions={({route})=>({
    tabBarIcon: ({focused})=>{
      if(route.name === "Home")
      return <Icon name={focused ? 'home' : 'home-outline'} size={24} color={focused ? 'orange' : 'gray'} />

      if(route.name === "Cart")
      return <Icon name={focused ? 'cart' : 'cart-outline'} size={24} color={focused ? 'orange' : 'gray'} />

      if(route.name === "Products")
      return <Icon name={focused ? 'heart' : 'heart-outline'} size={24} color={focused ? 'orange' : 'gray'} />

      if(route.name === "Account")
      return <Icon name={focused ? 'person' : 'person-outline'} size={24} color={focused ? 'orange' : 'gray'} />
    },
    tabBarButton: (props)=><TouchableOpacity {...props} />,
    tabBarStyle: {height: 60, paddingBottom: 6},
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'gray'
  })} >
    <Screen name="Home" component={Home} options={{headerShown: false}} />
    <Screen name="Products" component={Products} options={{headerShown: false}} />
    <Screen name="Cart" component={Cart} options={{headerShown: false}} />
    <Screen name="Account" component={Account} options={{headerShown: false}} />
    <Screen name="Wishlist" component={Wishlist} options={{headerShown: false}} />
  </Navigator>
)

export default Tb;
