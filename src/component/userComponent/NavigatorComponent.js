import React from 'react';
import {StyleSheet} from 'react-native';
import Login from '../adminComponent/Data';
import {Header} from 'react-native-elements';

let NavigatorComponent = () => {
  return (
    <Header
      style={styles.Menu}
      placement="left"
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
    />
  );
};

export default NavigatorComponent;

let styles = StyleSheet.create({
  Menu: {
    marginTop: -90,
  },
});
