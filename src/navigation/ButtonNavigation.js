import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DetailComponent from '../component/userComponent/DetailComponent';
import CategoryComponent from '../component/userComponent/HistoryComponent';
import SearchComponent from '../component/userComponent/SearchComponent';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyComponent from '../component/userComponent/BodyComponent';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function Nesting() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SetyaLibrary" component={BodyComponent} />
      <Stack.Screen name="Detail" component={DetailComponent} />
      <Stack.Screen name="Search" component={SearchComponent} />
    </Stack.Navigator>
  );
}

let ButtonNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="#0080ff"
      inactiveColor="#999966"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Nesting}
        options={
          (({route}) => ({id: route.params.id}),
          {
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          })
        }
      />
      <Tab.Screen
        name="Borrower"
        component={CategoryComponent}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonNavigation;
