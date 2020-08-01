import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {booksGet} from '../../redux/actions/books';
import {borrowed} from '../../redux/actions/borrow';
import {login} from '../../redux/actions/auth';
import {BASE_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
let Status = (props) => {
  if (props.stok < 1) {
    return (
      <Text style={{color: 'white', fontWeight: 'bold'}}>UnAvailable</Text>
    );
  } else {
    return <Text style={{color: 'white', fontWeight: 'bold'}}>Available</Text>;
  }
};

let ButtonBorrow = (props) => {
  if (props.tblBorrow == props.tblUser) {
    if (props.status === 'borrow') {
      return (
        <TouchableOpacity style={styles.BorrowButton} onPress={props.borrow}>
          <Text style={styles.booksStok}>Cancel</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.BorrowButton} onPress={props.borrow}>
          <Text style={styles.booksStok}>Borrow</Text>
        </TouchableOpacity>
      );
    }
  } else {
    return (
      <TouchableOpacity style={styles.BorrowButton} onPress={props.borrow}>
        <Text style={styles.booksStok}>Borrow</Text>
      </TouchableOpacity>
    );
  }
};

let DetailComponent = (props) => {
  let navigation = useNavigation();
  let [getIdBooks, setGetIdBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let goBack = () => {
    navigation.navigate('SetyaLibrary');
  };

  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      getId();
      getBooks();
    });

    return reloadPage;
  }, [navigation]);

  let getId = () => {
    let data = {
      ConUrl: BASE_URL,
      SearchBooks: `?search=${props.route.params.id}&field=id`,
    };

    axios({
      method: 'GET',
      url: `${data.ConUrl}books/${data.SearchBooks}`,
    }).then((response) => {
      setGetIdBooks(response.data.data[0]);
    });
  };

  let getBooks = () => {
    let data = {
      ConUrl: BASE_URL,
      SearchBooks: ``,
    };
    props.booksGet(data);
  };

  let ActionBorrow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (props.resLogin.data.id_user != null) {
        let data = {
          ConUrl: BASE_URL,
          idBooks: getIdBooks.id,
          stok: 1,
          idUser: props.resLogin.data.id_user,
          status: 'borrow',
        };

        props.borrowed(data).then(() => {
          Alert.alert(
            'Success',
            'Borrowed book Success',
            [{text: 'OK', onPress: () => navigation.navigate('Borrower')}],
            {cancelable: false},
          );
        });
      } else {
        Alert.alert(
          'Failed',
          'You must Login',
          [{text: 'OK', onPress: () => navigation.navigate('Login')}],
          {cancelable: false},
        );
      }
    }, 1000);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={{uri: `${BASE_URL}${getIdBooks.image}`}}
        style={styles.image}
        imageStyle={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={styles.Tagline}>{getIdBooks.name_author}</Text>
        <Text style={styles.Booksname}>{getIdBooks.title}</Text>

        <TouchableOpacity
          onPress={goBack}
          style={{
            position: 'absolute',
            padding: 10,
            left: 20,
            top: 20,
            backgroundColor: '#ff6200',
            paddingHorizontal: 10,
            borderRadius: 40,
          }}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 10,
            right: 20,
            top: 30,
            backgroundColor: '#ff6200',
            paddingHorizontal: 10,
            borderRadius: 40,
          }}>
          <Status status={getIdBooks.stok} />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={styles.BooksBtn}>
        <Text style={styles.booksStok}>Stok {getIdBooks.stok}</Text>
      </TouchableOpacity>

      <ButtonBorrow
        status={props.dataBooks.data.status}
        tblBorrow={props.dataBooks.data.id_user}
        tblUser={props.resLogin.data.id_user}
        borrow={ActionBorrow}
      />

      <ScrollView style={{backgroundColor: 'white'}}>
        <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
          Discription
        </Text>

        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: 'nornal',
            opacity: 0.3,
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
          }}>
          {getIdBooks.discription}
        </Text>
        <View>
          <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
            Books Other
          </Text>
          <ScrollView horizontal>
            {props.dataBooks.data.map((books) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: `${books.id}`,
                    })
                  }>
                  <View>
                    <Image
                      source={{uri: `${BASE_URL}${books.image}`}}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <Icon
                      name="book"
                      size={16}
                      color="white"
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 10,
                        bottom: 10,
                      }}
                    />
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 30,
                        bottom: 10,
                        color: 'white',
                        fontSize: 14,
                      }}>
                      {books.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
      <Spinner visible={isLoading} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
  dataBooks: state.booksGet,
});
const mapDispatchToProp = {login, borrowed, booksGet};

export default connect(mapStateToProps, mapDispatchToProp)(DetailComponent);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    justifyContent: 'flex-end',
  },

  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6,
  },

  Booksname: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BooksBtn: {
    position: 'absolute',
    right: 12,
    top: 280,
    backgroundColor: '#ff6200',
    padding: 16,
    borderRadius: 40,
    elevation: 5,
  },
  booksStok: {
    color: 'white',
    fontSize: 14,
  },
  darkOverlay: {
    width: 150,
    height: 150,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  BorrowButton: {
    position: 'absolute',
    right: 12,
    top: '90%',
    backgroundColor: '#ff6200',
    padding: 16,
    borderRadius: 40,
    zIndex: 1,
  },
});
