import React from 'react';
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  inputClass: {
    width: 280,
    backgroundColor: '#eeeeee',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
    marginLeft: 11,
  },
  buttonClick: {
    width: 180,
    margin: 'auto',
    marginLeft: '16%',
    marginTop: 20,
  },
  textButton: {
    marginLeft: 50,
  },
  Body: {
    marginLeft: '9%',
    marginTop: 70,
  },
  card: {
    backgroundColor: 'white',
    width: 300,
    height: 350,
    borderRadius: 11,
    shadowColor: 'black',
    marginTop: 100,
    zIndex: 2,
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Merriweather serif',
    marginTop: 12,
  },
  textWarning: {
    color: '#d6d6c2',
    marginBottom: 30,
    fontSize: 15,
    textAlign: 'center',
  },
  bodyFooter: {
    flexDirection: 'row',
    marginLeft: 45,
    fontSize: 9,
    marginTop: 10,
  },
  textFooter1: {
    fontSize: 15,
    color: '#c2c2a3',
  },
  textFooter2: {
    fontSize: 15,
    color: '#4dff88',
  },
  logo: {
    width: '99%',
    position: 'absolute',
  },
});

export default styles;
