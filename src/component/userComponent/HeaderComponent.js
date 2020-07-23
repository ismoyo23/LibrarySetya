import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {StyleSheet, TextInput, Button} from 'react-native';
let HeaderComponent = () => {
  return (
    <View style={styles.ViewComponent}>
      <TextInput style={styles.TextInput} placeholder="Search..."></TextInput>
      <View style={styles.ButtonClick}>
        <Button title="Sort" />
      </View>
    </View>
  );
};

export default HeaderComponent;

let styles = StyleSheet.create({
  header: {},
  ViewComponent: {
    textAlign: 'center',
    backgroundColor: 'white',
    height: -12,
    zIndex: 1,
  },
  TextInput: {
    height: 38,
    width: 270,
    backgroundColor: '#eeeeee',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#002f6c',
    marginVertical: 10,
    marginLeft: 11,
  },
  ButtonClick: {
    height: 3,
    width: 18,
    position: 'absolute',
    marginLeft: '81%',
    marginTop: 10,
    marginRight: 3,
    backgroundColor: 'white',
  },
});
