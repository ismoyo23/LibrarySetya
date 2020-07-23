import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Logo from '../../main/img/undraw_online_1qud.png';
import styles from '../../styles/register';
import {register} from '../../redux/actions/auth';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import {Link} from '@react-navigation/native';
let Register = (props) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');
  let [address, setAddress] = useState('');
  let [role] = useState('1');
  let setRegister = () => {
    let data = {
      username: username,
      password: password,
      email: email,
      address: address,
      role: role,
      url: BASE_URL,
    };
    props.register(data).then(() => {
      navigation.navigate('Home');
    });
  };
  return (
    <>
      <Image style={styles.logo} source={Logo} />
      <ScrollView style={styles.Body}>
        <View style={styles.card}>
          <Text style={styles.textLogin}>Sign Up</Text>
          <Text style={styles.textWarning}>
            Please enter your credential processtes
          </Text>
          <TextInput
            value={username}
            onChangeText={(value) => setUsername(value)}
            style={styles.inputClass}
            placeholder="username"
          />
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.inputClass}
            placeholder="Email"
          />
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            type="password"
            style={styles.inputClass}
            placeholder="password"
            secureTextEntry={true}
          />
          <TextInput
            value={address}
            onChangeText={(value) => setAddress(value)}
            style={styles.inputClass}
            placeholder="Adreess"
          />
          <View style={styles.buttonClick}>
            <View style={styles.buttonClick}>
              <Button onPress={setRegister} title="Sign Up" />
            </View>
          </View>
          <View style={styles.bodyFooter}>
            <Text style={styles.textFooter1}>have Account?</Text>
            <Link style={styles.textFooter2} to="/Login">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => ({
  resRegister: register,
});
const mapDispatchToProp = {register};

export default connect(mapStateToProps, mapDispatchToProp)(Register);
