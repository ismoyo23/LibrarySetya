import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {booksGet} from '../../redux/actions/books';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../../../src/main/img/Minuman-Pengganti-Kopi.jpg';
import image2 from '../../../src/main/img/coffee-4144616_960_720.jpg';
import Spinner from 'react-native-loading-spinner-overlay';
import {genreGet} from '../../redux/actions/genre';
let BodyComponent = (props) => {
  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      getsBooks();
      getGenre();
    });

    return reloadPage;
  }, [navigation]);

  let navigation = useNavigation();
  let [search, setSearch] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [sort, setSort] = useState('asc');
  let [genre, setGenre] = useState('all');
  let [modalVisible, setModalVisible] = useState(false);

  let getGenre = () => {
    let data = {
      ConUrl: BASE_URL,
      Search: '',
    };
    props.genreGet(data);
  };

  let getsBooks = () => {
    let data = {
      ConUrl: `${BASE_URL}`,
      sort: sort == 'asc' ? `?sort=asc` : `?sort=${sort}`,
      genre:
        genre == 'all' ? `` : `&search=${genre}&field=book_detail.id_genre`,
    };
    props.booksGet(data);
  };

  let searchSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Search', {
        title: search,
      });
    }, 1000);
  };

  let openDrawer = () => {
    props.navigation.openDrawer();
  };

  let sortData = (value) => {
    setSort(value);
    getsBooks();
  };

  let genreData = (value) => {
    setGenre(value);
    getsBooks();
  };
  return (
    <View style={{marginBottom: 300}}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{top: -25, marginLeft: 81}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                x
              </Text>
            </TouchableOpacity>
            <ScrollView style={{height: 90}}>
              <TouchableOpacity onPress={() => genreData('all')}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                  All
                </Text>
              </TouchableOpacity>
              {props.dataGenre.data.map((genre) => {
                return (
                  <TouchableOpacity onPress={() => genreData(genre.id_genre)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {genre.name_genre}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
      {/* Spiner */}
      <Spinner visible={isLoading} />
      {/* header */}
      <View>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius: 40}}>
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Setya Library,</Text>
            <Text style={styles.userText}>What book do you want to find?</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setSearch(text)}
              value={search}
              style={styles.searchBox}
              placeholder="Search Books"
              placeholderTextColor="#666"
              onSubmitEditing={searchSubmit}></TextInput>

            <Icon
              name="search"
              size={22}
              color="#666"
              style={{position: 'absolute', top: 30, right: 60, opacity: 0.6}}
            />
          </View>
          <Icon
            onPress={openDrawer}
            name="bars"
            size={22}
            color="#fff"
            style={{position: 'absolute', top: 30, left: 16}}
          />
          <Icon
            name="bell"
            size={22}
            color="#fff"
            style={{position: 'absolute', top: 30, right: 16, opacity: 0.6}}
          />
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Populer</Text>

          <ScrollView horizontal={true}>
            {props.dataBooks.data.map((books) => {
              return (
                <View style={{paddingVertical: 20, paddingLeft: 16}}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Detail', {id: `${books.id}`})
                    }>
                    <Image
                      style={{
                        width: 150,
                        marginRight: 14,
                        height: 250,
                        borderRadius: 10,
                        marginRight: 8,
                      }}
                      source={{uri: `${BASE_URL}${books.image}`}}
                    />

                    <View style={styles.imageOvarlay}></View>
                    <Text style={styles.imageText}>{books.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Today</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>View All</Text>
          </View>
          <Image
            source={image2}
            style={{
              width: '94%',
              height: 340,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{position: 'absolute', bottom: 0, padding: 16}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="calendar"
                color="white"
                size={22}
                style={{
                  marginRight: 10,
                  position: 'relative',
                  top: 4,
                  left: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: 'normal',
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}>
                Jul, 21 2020
              </Text>
              <View
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: 'normal',
                  marginBottom: 10,
                }}></View>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 'normal',
                marginBottom: 10,
                opacity: 0.9,
                marginLeft: 16,
              }}>
              Lorem ipsub data update interface{' '}
            </Text>
          </View>
        </View>
        <View>
          <View style={{paddingVertical: 20, paddingLeft: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 12}}>
              List Books
            </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {props.dataBooks.data.map((books) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Detail', {id: `${books.id}`})
                    }>
                    <Image
                      style={{
                        width: 180,
                        marginRight: 14,
                        height: 250,
                        borderRadius: 10,
                        marginRight: 8,
                        marginBottom: 10,
                      }}
                      source={{uri: `${BASE_URL}${books.image}`}}
                    />

                    <View style={styles.imageOvarlayList}></View>
                    <Text style={styles.imageText}>{books.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      {modalVisible == false ? (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#002db3',
            width: 60,
            height: 60,
            position: 'absolute',
            borderRadius: 100,
            top: '75%',
            zIndex: 1,
            alignItems: 'center',
            alignContent: 'center',
            left: '80%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Icon
            name="folder"
            color="white"
            style={{fontSize: 26, textAlign: 'center', top: 17}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{
            zIndex: 2,
            backgroundColor: '#002db3',
            width: 60,
            height: 60,
            position: 'absolute',
            borderRadius: 100,
            top: '75%',
            zIndex: 1,
            alignItems: 'center',
            alignContent: 'center',
            left: '80%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Icon
            name="folder-open"
            color="white"
            style={{fontSize: 26, textAlign: 'center', top: 17}}
          />
        </TouchableOpacity>
      )}
      {sort === 'asc' ? (
        <TouchableOpacity
          onPress={() => sortData('desc')}
          style={{
            backgroundColor: '#002db3',
            width: 60,
            height: 60,
            position: 'absolute',
            borderRadius: 100,
            top: '88%',
            zIndex: 1,
            alignItems: 'center',
            alignContent: 'center',
            left: '80%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Icon
            name="sort-amount-asc"
            color="white"
            style={{fontSize: 26, textAlign: 'center', top: 17}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => sortData('asc')}
          style={{
            backgroundColor: '#002db3',
            width: 60,
            height: 60,
            position: 'absolute',
            borderRadius: 100,
            top: '88%',
            zIndex: 0,
            alignItems: 'center',
            alignContent: 'center',
            left: '80%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Icon
            name="sort-amount-desc"
            color="white"
            style={{fontSize: 26, textAlign: 'center', top: 17}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  dataBooks: state.booksGet,
  dataGenre: state.genreGet,
});
const mapDispatchToProp = {booksGet, genreGet};

export default connect(mapStateToProps, mapDispatchToProp)(BodyComponent);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    padding: 16,
  },
  userGreet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
  imageOvarlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  imageOvarlayList: {
    width: 180,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  imageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    left: 10,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -140,
    left: '20%',
  },
  modalView: {
    height: 300,
    width: '40%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
