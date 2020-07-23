import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Link} from '@react-navigation/native';

let NavbarComponent = (props) => {
  return (
    <View>
      <ScrollView style={styles.Body}>
        <View style={styles.Category}>
          <View style={styles.HeaderCategory}>
            <Link to="/Login" style={styles.TextCategory}>
              Comedy
            </Link>
            <Text style={styles.TextCategory}>Action</Text>
            <Text style={styles.TextCategory}>Funny</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default NavbarComponent;

let styles = StyleSheet.create({
  Body: {
    height: 50,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: 'white',
  },
  Category: {
    color: 'black',
    height: '98%',
    marginTop: 9,
  },
  HeaderCategory: {
    flexDirection: 'row',
  },
  TextCategory: {
    marginTop: 3,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    color: '#b8b894',
  },
});
