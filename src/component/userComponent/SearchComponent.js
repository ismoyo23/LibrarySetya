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
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {booksGet} from '../../redux/actions/books';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../../../src/main/img/Minuman-Pengganti-Kopi.jpg';
import Spinner from 'react-native-loading-spinner-overlay';
let BodyComponent = (props) => {
  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      getsBooks();
    });
    return reloadPage;
  }, [navigation]);

  let navigation = useNavigation();
  let [search, setSearch] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  let getsBooks = () => {
    let data = {
      ConUrl: `${BASE_URL}`,
      SearchBooks: `?search=${props.route.params.title}&field=title`,
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

  let goBack = () => {
    navigation.navigate('SetyaLibrary');
  };
  return (
    <View style={{marginBottom: 300}}>
      <Spinner visible={isLoading} />
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
              onSubmitEditing={searchSubmit}
              style={styles.searchBox}
              placeholder="Search Books"
              placeholderTextColor="#666"></TextInput>

            <Icon
              name="search"
              size={22}
              color="#666"
              style={{position: 'absolute', top: 30, right: 60, opacity: 0.6}}
            />
          </View>
          <Icon
            onPress={goBack}
            name="arrow-left"
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
        <View>
          <View style={{paddingVertical: 20, paddingLeft: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 12}}>
              Search
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
});
