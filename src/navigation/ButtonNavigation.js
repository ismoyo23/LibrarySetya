import React from 'react';
import DetailComponent from '../component/userComponent/DetailComponent';
import CategoryComponent from '../component/userComponent/HistoryComponent';
import SearchComponent from '../component/userComponent/SearchComponent';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      activeColor="#002db3"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Nesting}
        options={
          (({route}) => ({id: route.params.id}),
          {
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon
                style={{fontWeight: 'bold'}}
                name="home"
                size={22}
                color={color}
              />
            ),
          })
        }
      />
      <Tab.Screen
        name="Borrower"
        component={CategoryComponent}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Icon name="history" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonNavigation;
