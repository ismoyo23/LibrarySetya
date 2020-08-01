import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Books from '../screens/admin/Books';
import Action from '../component/adminComponent/ActionComponent';
const Stack = createStackNavigator();

let BooksStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BooksHome" component={Books} />
      <Stack.Screen name="Action" component={Action} />
    </Stack.Navigator>
  );
};

export default BooksStackNavigation;
