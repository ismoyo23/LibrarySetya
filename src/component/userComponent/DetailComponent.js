import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, ScrollView, Button} from 'react-native';
import ButtonMin from './chilComponent/ButtonMin';
import ButtonPlus from './chilComponent/ButtonPlus';
import {connect} from 'react-redux';
import {booksGet} from '../../redux/actions/books';
import {borrowed} from '../../redux/actions/borrow';
import {login} from '../../redux/actions/auth';
import {BASE_URL} from '@env';
let DetailComponent = (props) => {
  useEffect(() => {
    getBooks();
  }, []);

  let [stok, setStok] = useState(0);

  let borrowBooks = () => {
    if (props.resLogin.data.id_user == undefined) {
      alert('You must Login');
    } else {
      let data = {
        idUser: props.resLogin.data.id_user,
        idBooks: props.route.params.id,
        stok: stok,
        ConUrl: BASE_URL,
      };
      props.borrowed(data).then(() => {
        alert('Success');
      });
    }
  };

  let getBooks = () => {
    let data = {
      ConUrl: BASE_URL,
      SearchBooks: `?search=${props.route.params.id}&field=id`,
    };
    props.booksGet(data);
  };

  return (
    <ScrollView>
      <Image
        style={styles.imgHeader}
        source={{uri: `${BASE_URL}${props.BooksbyId.data[0].image}`}}
      />
      <View style={styles.header}>
        <View>
          <Text style={styles.Title}>{props.BooksbyId.data[0].title}</Text>
          <Text style={styles.TitleAuthor}>
            {props.BooksbyId.data[0].name_author}
          </Text>
        </View>
        <View style={styles.headerStok}>
          <View style={styles.stokCount}>
            <Text style={styles.textStok}>{props.BooksbyId.data[0].stok}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.discription}>
        {props.BooksbyId.data[0].discription}
      </Text>
      <View style={styles.bodyFooter}>
        <View style={styles.customButton}>
          <ButtonMin press={() => setStok(stok - 1)} stok={stok} />
          <View style={styles.qyt}>
            <Text style={styles.qytStok}>{stok}</Text>
          </View>
          <ButtonPlus
            stok={stok}
            stokDB={props.BooksbyId.data[0].stok}
            press={() => setStok(stok + 1)}
            title="+"
          />
        </View>

        <View style={styles.bodyBorrow}>
          <Button onPress={borrowBooks} title="Borrow" />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
  BooksbyId: state.booksGet,
});
const mapDispatchToProp = {login, booksGet, borrowed};

export default connect(mapStateToProps, mapDispatchToProp)(DetailComponent);

let styles = StyleSheet.create({
  imgHeader: {
    width: '100%',
    height: 300,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 12,
  },
  TitleAuthor: {
    fontSize: 18,
    color: '#adad85',
  },
  discription: {
    color: '#adad85',
    marginTop: 12,
  },
  titleStok: {
    fontWeight: 'bold',
    marginTop: 19,
    fontSize: 19,
  },

  bodyStok: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
  },
  headerStok: {
    marginLeft: 'auto',
    marginTop: 12,
  },
  bodyFooter: {
    flexDirection: 'row',
  },
  customButton: {
    width: 90,
    flexDirection: 'row',
    marginTop: 19,
  },
  bodyBorrow: {
    marginLeft: 'auto',
    marginTop: 16,
  },
  myButton: {
    marginLeft: 12,
  },
  qyt: {
    backgroundColor: 'aqua',
    width: 30,
    marginLeft: 4,
    marginRight: 4,
  },
  qytStok: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 2,
  },
  stokCount: {
    backgroundColor: '#009999',
    width: 100,
    height: 30,
    borderRadius: 4,
  },
  textStok: {
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
});
