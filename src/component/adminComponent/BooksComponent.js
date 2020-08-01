import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {booksGet} from '../../redux/actions/books';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BASE_URL} from '@env';
import {deleteBooks} from '../../redux/actions/books';
let BooksComponent = (props) => {
  let navigation = useNavigation();
  useEffect(() => {
    getBooks();
  }, []);

  let getBooks = () => {
    let data = {
      ConUrl: BASE_URL,
      sort: '',
      genre: '',
    };
    props.booksGet(data);
  };
  let openDrawer = () => {
    props.navigation.openDrawer();
  };

  let deleteData = (id) => {
    Alert.alert(
      'Really?',
      'Will you delete this book data?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            let data = {
              ConUrl: BASE_URL,
              id: id,
            };
            props.deleteBooks(data).then(() => {
              Alert.alert(
                'Success',
                'Delete Books success',
                [{text: 'OK', onPress: () => getBooks()}],
                {cancelable: false},
              );
            });
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: 200}}
        imageStyle={{
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
        }}
        source={require('../../main/img/images.jpeg')}>
        <TouchableOpacity
          style={{left: 20, top: 23}}
          onPress={() => openDrawer()}>
          <Icon name="bars" style={{color: 'white', fontSize: 23}} />
        </TouchableOpacity>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            top: 60,
          }}>
          Welcome to Setya Library
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            top: 70,
          }}>
          M Ismoyo Setyonowidagdo
        </Text>
      </ImageBackground>
      <View style={{top: 20, marginLeft: 20, marginRight: 20}}>
        <View
          style={{
            borderColor: 'white',
            height: 400,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            //android
            elevation: 1,
            borderRadius: 30,
          }}>
          <ScrollView
            style={{
              height: 900,
            }}>
            {props.dataBooks.data.map((books) => {
              return (
                <View
                  style={{
                    height: 100,
                    top: 30,
                    left: 17,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{width: 60, height: 60, borderRadius: 90}}
                    source={{uri: `${BASE_URL}${books.image}`}}
                  />
                  <View style={{width: 160}}>
                    <Text style={{fontWeight: 'bold', left: 11, fontSize: 20}}>
                      {books.title}
                    </Text>
                    <Text style={{fontSize: 17, left: 12}}>
                      {books.name_genre}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'aqua',

                        width: 60,
                        height: 40,
                        borderRadius: 100,
                      }}>
                      <Icon
                        style={{textAlign: 'center', top: 7}}
                        name="pencil-square-o"
                        size={25}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => deleteData(books.id)}
                    style={{
                      backgroundColor: 'red',
                      marginLeft: 4,
                      width: 60,
                      height: 40,
                      borderRadius: 100,
                      zIndex: 1,
                    }}>
                    <Icon
                      style={{textAlign: 'center', top: 6}}
                      name="trash-o"
                      size={25}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Action')}
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#009999',
            width: 50,
            height: 50,
            borderRadius: 200,
            zIndex: 1,
          }}>
          <Icon
            style={{textAlign: 'center', top: 15}}
            name="plus"
            color="white"
            size={20}></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => ({
  dataBooks: state.booksGet,
});
const mapDispatchToProp = {booksGet, deleteBooks};

export default connect(mapStateToProps, mapDispatchToProp)(BooksComponent);
