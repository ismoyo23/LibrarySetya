import React from 'react';
import Login from '../screens/user/Login';
import Register from '../screens/user/Register';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import ButtonNavigation from '../navigation/ButtonNavigation';
import Books from '../screens/admin/Books';
import LogoutComponent from '../component/userComponent/LogoutComponent';
import {login} from '../redux/actions/auth';
import {connect} from 'react-redux';
import DrawerContent from './DrawerContent';
let Drawer = createDrawerNavigator();
let Navigation = (props) => {
  if (props.auth.data.role == 0 || props.auth.data.role == undefined) {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={ButtonNavigation} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    );
  } else {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Books" component={Books} />
        <Drawer.Screen name="Genre" component={ButtonNavigation} />
        <Drawer.Screen name="Author" component={ButtonNavigation} />
        <Drawer.Screen name="Logout" component={LogoutComponent} />
      </Drawer.Navigator>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(Navigation);
