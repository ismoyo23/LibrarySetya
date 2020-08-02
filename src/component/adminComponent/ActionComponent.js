import React, {useState, useEffect} from 'react';
import {
  Alert,
  ImageBackground,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {genreGet} from '../../redux/actions/genre';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
let ActionComponent = (props) => {
  console.log(props);
  useEffect(() => {
    getGenre();
  }, []);

  let getGenre = () => {
    let data = {
      ConUrl: BASE_URL,
      Search: '',
    };
    props.genreGet(data);
  };

  let actionData = () => {};
  return (
    <ScrollView>
      <ImageBackground
        style={{width: '100%', height: 200}}
        source={require('../../main/img/images.jpeg')}>
        <Icon
          style={{top: 17, left: 17}}
          name="arrow-left"
          size={30}
          color="white"
        />
        <Text
          style={{
            top: 11,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Add Books
        </Text>
      </ImageBackground>
      <View style={{alignContent: 'center', alignItems: 'center', height: 700}}>
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
              borderColor: 'grey',
              borderWidth: 3,
              borderRadius: 10,
            }}
            placeholder="     title books"
          />
          <TextInput
            multiline={true}
            numberOfLines={12}
            style={{
              top: 100,
              width: '90%',
              height: 107,
              borderColor: 'grey',
              borderWidth: 3,
              borderRadius: 12,
            }}
            placeholder="    title books"
          />

          <DropDownPicker
            style={{top: 113, width: 370, borderColor: 'grey', borderWidth: 3}}
            items={[
              {name_user: 'France', value: 'fr'},
              {label: 'Spain', value: 'es'},
              {label: 'Spain', value: 'es'},
              {label: 'Spain', value: 'es'},
            ]}
            defaultNull
            placeholder="Select genre"
            containerStyle={{height: 40}}
          />

          <DropDownPicker
            style={{top: 123, width: 370, borderColor: 'grey', borderWidth: 3}}
            items={[
              {label: 'France', value: 'fr'},
              {label: 'Spain', value: 'es'},
            ]}
            defaultNull
            placeholder="Select genre"
            containerStyle={{height: 40}}
            onChangeItem={(item) => this.changeCountry(item)}
          />
          <View
            style={{
              borderWidth: 3,
              width: 370,
              height: 50,
              top: 140,
              borderWidth: 3,
              borderColor: 'gray',
              borderRadius: 7,
            }}>
            <Icon
              style={{textAlign: 'center', top: 13}}
              name="upload"
              size={20}
              color="gray"
            />
          </View>
          <TouchableOpacity onPress={() => actionData()}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              source={require('../../main/img/images.jpeg')}
              style={{
                top: 160,
                height: 40,
                width: 370,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  top: 9,
                  fontWeight: 'bold',
                }}>
                Save
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  dataGenre: state.genreGet,
});
const mapDispatchToProp = {genreGet};

export default connect(mapStateToProps, mapDispatchToProp)(ActionComponent);
