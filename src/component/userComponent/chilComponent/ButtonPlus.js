import React from 'react';
import {Button} from 'react-native';
let ButtonPlus = (props) => {
  if (props.stok > props.stokDB) {
    return <Button title="Limit" />;
  } else {
    return <Button onPress={props.press} title="+" />;
  }
};

export default ButtonPlus;
