import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {booksGet} from '../../redux/actions/books';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import {login} from '../../redux/actions/auth';
let SearchComponent = (props) => {
  let navigation = useNavigation();

  useEffect(() => {
    getBooks();
  }, []);
  let getBooks = () => {
    let data = {
      ConUrl: BASE_URL,
      SearchBooks: `?search=${props.route.params.title}&field=title`,
    };

    props.booksGet(data);
  };
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.ListBooks}>
          <Text style={styles.TitleList}>Search</Text>
          <View style={styles.Bottom}>
            {props.dataBooks.data.map((books) => {
              return (
                <View style={styles.CardList}>
                  <View style={styles.headerList}>
                    <Image
                      style={styles.ImgList}
                      source={{uri: `${BASE_URL}${books.image}`}}
                    />
                  </View>
                  <View style={styles.ListData}>
                    <Text style={styles.TitleOnCard}>{books.title}</Text>
                    <Text style={styles.DisOnCard}>
                      {books.discription.substring(0, 90)}
                    </Text>
                    <View style={styles.buttonDetail}>
                      <Button
                        onPress={() =>
                          navigation.navigate('Detail', {id: `${books.id}`})
                        }
                        title="Detail"
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  dataBooks: state.booksGet,
  resLogin: state.auth,
});
const mapDispatchToProp = {booksGet, login};

export default connect(mapStateToProps, mapDispatchToProp)(SearchComponent);

let styles = StyleSheet.create({
  TextHeader: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 12,
    fontFamily:
      Platform.os === 'android' ? 'Red Rose cursive' : 'something.ttf',
  },
  TextSeeAll: {
    fontSize: 18,
    color: '#00cc00',
    marginLeft: 'auto',
    marginTop: 11,
  },
  ImageSlide: {
    marginTop: 12,
    marginLeft: 8,
    borderRadius: 9,
  },
  TextTitle: {
    marginLeft: 8,
    fontSize: 18,
    marginTop: 1,
    textAlign: 'center',
  },
  CardImage: {
    width: 130,
  },
  Container: {
    marginLeft: 10,
    marginRight: 10,
  },
  Row: {
    flexDirection: 'row',
  },
  button: {
    width: 90,
    marginLeft: 17,
    marginTop: 10,
  },

  ListBooks: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 40,
  },
  TitleList: {
    fontSize: 20,
  },
  CardList: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 1,
    marginTop: 13,
  },

  ImgList: {
    borderRadius: 12,
    height: 140,
    width: 80,
  },
  headerList: {
    marginTop: 16,
    marginLeft: 12,
    marginBottom: 16,
  },
  buttonDetail: {
    width: 120,
  },
  ListData: {
    position: 'absolute',
    marginLeft: 130,
    marginTop: 20,
  },
  TitleOnCard: {
    fontSize: 17,
  },
  DisOnCard: {
    fontSize: 15,
    color: '#b8b894',
    marginBottom: 12,
  },
});
