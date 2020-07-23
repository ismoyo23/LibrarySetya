import React, {useEffect} from 'react';
import Home from '../../src/screens/user/Home';
import HistoryComponent from '../component/userComponent/HistoryComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
let topNavigation = (props) => {
  console.log(props);
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="All" component={Home} />
        <Tab.Screen name="Adv" component={HistoryComponent} />
        <Tab.Screen name="Rom" component={HistoryComponent} />
        <Tab.Screen name="Act" component={HistoryComponent} />
        <Tab.Screen name="Fun" component={HistoryComponent} />
      </Tab.Navigator>
    </>
  );
};

export default topNavigation;
