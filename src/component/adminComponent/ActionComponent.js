import React from 'react';
import {
  Alert,
  ImageBackground,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
} from 'react-native';

let ActionComponent = () => {
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: 200}}
        source={require('../../main/img/images.jpeg')}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Add Books
        </Text>
      </ImageBackground>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            borderColor: 'yourchoice', // if you need
            borderWidth: 1,
            overflow: 'hidden',
            shadowColor: 'yourchoice',
            shadowRadius: 10,
            shadowOpacity: 1,
            height: 300,
            top: -80,
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <TextInput
            style={{
              top: 90,
              width: '90%',
              height: 47,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
            }}
            placeholder="title books"
          />
          <TextInput
            multiline={true}
            numberOfLines={12}
            style={{
              top: 100,
              width: '90%',
              height: 107,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
            }}
            placeholder="title books"
          />
        </View>
      </View>
    </View>
  );
};

export default ActionComponent;
