import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import {borrowGet} from '../../redux/actions/borrow';
import {borrowAction} from '../../redux/actions/borrow';
import {connect} from 'react-redux';
import {BASE_URL} from '@env';
import {login} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';
let HistoryComponent = (props) => {
  let navigation = useNavigation();
  Moment.locale('en');
  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      getBorrow();
    });

    return reloadPage;
  }, [navigation]);

  let openDrawer = () => {
    props.navigation.openDrawer();
  };
  let getBorrow = () => {
    let data = {
      ConUrl: BASE_URL,
      search: `?search=${props.resLogin.data.id_user}&field=borrower.id_user`,
    };

    props.borrowGet(data);
  };

  let cancelBorrow = (value) => {
    Alert.alert(
      'Warning',
      'Do you will cancel borrow books?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            let data = {
              ConUrl: BASE_URL,
              id: value,
            };
            props.borrowAction(data).then(() => {
              Alert.alert('Success', 'Cancel Success', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('SetyaLibrary'),
                },
              ]);
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
        }}
        source={require('../../main/img/images.jpeg')}
        style={styles.ImageBackground}>
        <Icon
          onPress={openDrawer}
          name="bars"
          size={22}
          color="#fff"
          style={{position: 'absolute', top: 30, left: 20}}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 29,
            marginTop: -300,
          }}>
          Hallo {props.resLogin.data.name_user}
        </Text>
        <Text style={{color: 'white'}}>Welcome back to SetyaLibrary</Text>
        <Image
          style={{
            marginTop: 13,
            borderRadius: 100,
            height: 100,
            width: 100,
          }}
          source={require('../../main/img/avatar.png')}
        />
      </ImageBackground>

      <View
        style={{
          top: 250,
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 2,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
          marginLeft: 5,
          marginRight: 5,
          position: 'absolute',
          height: 300,
        }}>
        <ScrollView style={{width: '100%', marginTop: 12}}>
          {props.dataBorrow.data.map((books) => {
            return (
              <View style={{flexDirection: 'row', marginTop: 12}}>
                <Image
                  style={{
                    marginLeft: 9,
                    width: 80,
                    height: 80,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                  source={{uri: `${BASE_URL}${books.image}`}}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginTop: 13,
                    }}>
                    {books.title.substr(0, 5)}...
                  </Text>
                  <Text>{Moment(books.create_at).format('D MMM YYYY')}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => cancelBorrow(books.id_borrower)}
                  style={{marginLeft: '49%', marginTop: 21}}>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 40,
                      width: 80,
                      borderRadius: 23,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: 8,
                      }}>
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  dataBorrow: state.borrowGet,
  resLogin: state.auth,
});
const mapDispatchToProp = {borrowGet, login, borrowAction};

export default connect(mapStateToProps, mapDispatchToProp)(HistoryComponent);

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});
