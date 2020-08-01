import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/auth';
import {login} from '../redux/actions/auth';
let AdminDrawer = (props) => {
  console.log(props);
  let Logout = () => {
    Alert.alert(
      'Warning',
      'You will leave this page?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => props.logout(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
                size={50}
              />

              <View
                style={{marginLeft: 15, flexDirection: 'column', width: 150}}>
                <Title style={styles.title}>
                  {props.resLogin.data.name_user}
                </Title>
                <Caption style={styles.caption}>Admin</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={(styles.paragraph, styles.caption)}>
                  90
                </Paragraph>
                <Caption style={styles.caption}> borrowed books</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => {
                return <Icon name="home" size={24} color="#c2c2a3" />;
              }}
              label="Home"
              onPress={() => props.navigation.navigate('Books')}
            />
            <DrawerItem
              icon={({color, size}) => {
                return <Icon name="sign-in" size={24} color="#c2c2a3" />;
              }}
              label="Login"
              onPress={() => props.navigation.navigate('Login')}
            />
            <DrawerItem
              icon={({color, size}) => {
                return <Icon name="user-plus" size={24} color="#c2c2a3" />;
              }}
              label="Register"
              onPress={() => props.navigation.navigate('Register')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => {
            return <Icon name="sign-out" size={24} color="#c2c2a3" />;
          }}
          label="LogOut"
          onPress={() => Logout()}
        />
      </Drawer.Section>
    </View>
  );
};

const mapStateToProps = (state) => ({
  Logout: state.logout,
  resLogin: state.auth,
});
const mapDispatchToProp = {logout, login};

export default connect(mapStateToProps, mapDispatchToProp)(AdminDrawer);

let styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  buttomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingHorizontal: 16,
  },
});
