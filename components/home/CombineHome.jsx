import * as React from 'react';
import {Image} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Home} from './Home/Home';
import {Search} from './search/Search';
import {Watchlist} from './watchlist/Watchlist';
import {Portfolio} from './portfolio/Portfolio';
import {Profile} from './profile/Profile';
import {Menu} from '../main/menu/Menu';

const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function CombineHome() {
  return (
    // <Drawer.Navigator>
    // <Drawer.Screen
    // name="Main"
    // component={() => (
    <Tab.Navigator barStyle={{backgroundColor: '#daa520', height: 65}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/home.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/search.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          tabBarLabel: 'Watchlist',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/plus.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/stocks.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/user.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/menu1.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
    // )}
    // />
    // </Drawer.Navigator>
  );
}
