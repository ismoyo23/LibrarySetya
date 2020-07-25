import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';
import {BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
let Login = (props) => {
  let navigation = useNavigation();
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [typingUsername, setTpypingUsername] = useState(false);
  let [typingPassword, setTpypingPassoword] = useState(false);

  let openDrawer = () => {
    props.navigation.openDrawer();
  };

  let Login = () => {
    let data = {
      url: BASE_URL,
      username: username,
      password: password,
    };
    props.login(data).then(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          imageStyle={{
            borderBottomRightRadius: 100,
            borderBottomLeftRadius: 100,
          }}
          source={require('../../main/img/images.jpeg')}
          style={styles.ImageBackground}>
          <Icon
            onPress={openDrawer}
            name="bars"
            size={22}
            color="#fff"
            style={{position: 'absolute', top: 30, left: 20}}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 29,
              marginTop: -200,
            }}>
            Welcome To SetyaLibrary
          </Text>
          <Text style={{color: 'white'}}>Sign In to Continue</Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Username</Text>
        <View style={styles.action}>
          <TextInput placeholder="Input Username" style={styles.TextInput} />
        </View>

        <Text style={styles.title}>Passsword</Text>
        <View style={styles.action}>
          <TextInput placeholder="Input Password" style={styles.TextInput} />
        </View>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <ImageBackground
              style={styles.button}
              imageStyle={{
                borderBottomRightRadius: 100,
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
              }}
              source={require('../../main/img/images.jpeg')}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 4,
                }}>
                Login
              </Text>
            </ImageBackground>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={{fontWeight: 'bold'}}>Have not account? </Text>
              <Text style={{fontWeight: 'bold', color: 'aqua'}}>Sign Up</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(Login);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    padding: 24,
    marginTop: -200,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  TextInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: 'grey',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '97%',
    height: 40,
    marginTop: 30,
  },
});
