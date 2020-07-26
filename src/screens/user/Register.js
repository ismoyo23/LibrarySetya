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
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';
import {BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
let Register = (props) => {
  console.log(props);

  let navigation = useNavigation();
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [address, setAdress] = useState('');
  let [email, setEmail] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let openDrawer = () => {
    props.navigation.openDrawer();
  };

  let Register = () => {
    let data = {
      url: BASE_URL,
      username: username,
      password: password,
      email: email,
      address: address,
      role: 0,
    };
    props.register(data).then(() => {
      setIsLoading(true);
      setTimeout(() => {
        setUsername('');
        setPassword('');
        setEmail('');
        setAdress('');
        setIsLoading(false);
        Alert.alert(
          'Success',
          'Register Success',
          [{text: 'OK', onPress: () => navigation.navigate('Login')}],
          {cancelable: false},
        );
      }, 2000);
    });
  };

  return (
    <ScrollView>
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
                marginTop: 20,
              }}>
              Welcome To SetyaLibrary
            </Text>
            <Text style={{color: 'white'}}>Sign Up to Continue</Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Username</Text>
          <View style={styles.action}>
            <TextInput
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Input Username"
              style={styles.TextInput}
            />
          </View>

          <Text style={styles.title}>Email</Text>
          <View style={styles.action}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Input Email"
              style={styles.TextInput}
            />
          </View>

          <Text style={styles.title}>Passsword</Text>
          <View style={styles.action}>
            <TextInput
              secureTextEntry={true}
              placeholder="Input Password"
              style={styles.TextInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <Text style={styles.title}>Address</Text>
          <View style={styles.action}>
            <TextInput
              onChangeText={(text) => setAdress(text)}
              value={address}
              placeholder="Input Addres"
              style={styles.TextInput}
            />
          </View>
          <TouchableOpacity onPress={Register}>
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
                  Sign Up
                </Text>
              </ImageBackground>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{fontWeight: 'bold'}}>Already account? </Text>
                <Text style={{fontWeight: 'bold', color: 'aqua'}}>Sign In</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Spinner visible={isLoading} />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
});
const mapDispatchToProp = {register};

export default connect(mapStateToProps, mapDispatchToProp)(Register);

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
    marginTop: 20,
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
