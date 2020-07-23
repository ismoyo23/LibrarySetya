import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import image from '../../../src/main/img/download.jpeg';
let BodyComponent = () => {
  return (
    <View>
      <ImageBackground
        source={image}
        style={{width: '100%', height: 270}}
        imageStyle={{borderBottomRightRadius: 40}}>
        <View style={styles.DarkOverlay}></View>
        <View style={styles.searchContainer}>
          <Text style={styles.userGreet}>Hi Ismoyo,</Text>
          <Text style={styles.userText}>Where would you like to go today?</Text>
        </View>
        <View>
          <TextInput
            style={styles.searchBox}
            placeholder="Search destination"
            placeholderTextColor="#666"></TextInput>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BodyComponent;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    padding: 16,
  },
  userGreet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
});
