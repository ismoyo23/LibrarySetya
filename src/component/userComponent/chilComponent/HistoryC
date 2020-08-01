import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import {connect} from 'react-redux';
import {booksGet} from '../../redux/actions/books';
import {BASE_URL} from '@env';
import {
  ScrollView,
  Button,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import FormData from 'form-data';
let BooksComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getBooks();
  }, []);
  let getBooks = () => {
    let data = {
      ConUrl: BASE_URL,
      SearchBooks: '',
    };
    props.booksGet(data);
  };
  let actionBooks = () => {};
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Books</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 20,
                }}
                placeholder="add Title"
                onChangeText={(text) => onChangeText(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 20,
                }}
                placeholder="add Title"
                onChangeText={(text) => onChangeText(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 20,
                }}
                placeholder="add Title"
                onChangeText={(text) => onChangeText(text)}
              />
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Add Books</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Add Data</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Title</DataTable.Title>
            <DataTable.Title numeric>Author</DataTable.Title>
            <DataTable.Title numeric>Genre</DataTable.Title>
            <DataTable.Title numeric>Action</DataTable.Title>
          </DataTable.Header>

          {props.dataBooks.data.map((books) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{books.title}</DataTable.Cell>
                <DataTable.Cell numeric>{books.name_author}</DataTable.Cell>
                <DataTable.Cell numeric>{books.name_genre}</DataTable.Cell>
                <DataTable.Cell numeric>
                  <Button title="update"></Button>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}

          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataBooks: state.booksGet,
});
const mapDispatchToProp = {booksGet};

export default connect(mapStateToProps, mapDispatchToProp)(BooksComponent);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
