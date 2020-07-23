import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import Logo from '../../main/img/undraw_online_1qud.png';
import styles from '../../styles/login';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';
import {BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
let Login = (props) => {
  let navigation = useNavigation();
  let [showAlert, setShowAlert] = useState(true);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let Login = () => {
    let data = {
      url: BASE_URL,
      username: username,
      password: password,
    };
    props
      .login(data)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        alert('error');
      });
  };

  <AwesomeAlert
    show={showAlert}
    showProgress={false}
    title="AwesomeAlert"
    message="I have a message for you!"
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={false}
    showCancelButton={true}
    showConfirmButton={true}
    cancelText="No, cancel"
    confirmText="Yes, delete it"
    confirmButtonColor="#DD6B55"
    onCancelPressed={() => {}}
    onConfirmPressed={() => {}}
  />;
  return (
    <>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.Body}>
        <View style={styles.card}>
          <Text style={styles.textLogin}>Sign In</Text>
          <Text style={styles.textWarning}>
            Please enter your credential processtes
          </Text>
          <TextInput
            value={username}
            style={styles.inputClass}
            placeholder="username"
            onChangeText={(value) => setUsername(value)}
          />
          <TextInput
            value={password}
            type="password"
            style={styles.inputClass}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
          <View style={styles.buttonClick}>
            <Button onPress={Login} title="Sign In" />
          </View>
          <View style={styles.bodyFooter}>
            <Text style={styles.textFooter1}>Don't have Account?</Text>
            <Text style={styles.textFooter2}>Sign Ip</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(Login);
