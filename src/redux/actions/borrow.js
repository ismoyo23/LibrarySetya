import axios from 'axios';

export let borrowGet = (data) => ({
  type: 'BORROW_GET',
  payload: axios({
    method: 'GET',
    url: `${data.ConUrl}books/borrower/${data.search}`,
  }),
});

export let borrowAction = (data) => ({
  type: 'BORROW_ACTION',
  payload: axios({
    method: 'DELETE',
    url: `${data.ConUrl}books/borrower/${data.id}`,
  }),
});

export let borrowed = (data) => ({
  type: 'BORROW_ACTION',
  payload: axios({
    method: 'POST',
    url: `${data.ConUrl}books/borrower`,
    data: {
      id_books: data.idBooks,
      count: data.stok,
      id_user: data.idUser,
      status: data.status,
    },
  }),
});
