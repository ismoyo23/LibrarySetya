import React from 'react';
import {Button} from 'react-native';
let ButtonMin = (props) => {
  if (props.stok > 0) {
    return <Button onPress={props.press} title="-" />;
  } else {
    return <Button title="Limit" />;
  }
};

export default ButtonMin;
