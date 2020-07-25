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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {booksGet} from '../../redux/actions/books';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../../../src/main/img/Minuman-Pengganti-Kopi.jpg';
import image2 from '../../../src/main/img/coffee-4144616_960_720.jpg';

let BodyComponent = (props) => {
  useEffect(() => {
    getsBooks();
  }, []);

  useEffect(() => {});
  let navigation = useNavigation();
  let [search, setSearch] = useState('');

  let getsBooks = () => {
    let data = {
      ConUrl: `${BASE_URL}`,
      SearchBooks: '',
    };
    props.booksGet(data);
  };

  let openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={{marginBottom: 300}}>
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
              style={styles.searchBox}
              placeholder="Search destination"
              placeholderTextColor="#666"></TextInput>

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
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  dataBooks: state.booksGet,
});
const mapDispatchToProp = {booksGet};

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
    opacity: 0.2,
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
});
