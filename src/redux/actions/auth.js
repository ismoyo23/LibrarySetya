import axios from 'axios';

export let login = (data) => ({
  type: 'LOGIN',
  payload: axios({
    method: 'POST',
    url: `${data.url}books/login`,
    data: {
      name_user: data.username,
      password: data.password,
    },
  }),
});

export let register = (data) => ({
  type: 'REGISTER',
  payload: axios({
    method: 'POST',
    url: `${data.url}books/register`,
    data: {
      name: data.username,
      password: data.password,
      email: data.email,
      address: data.address,
      role: data.role,
    },
  }),
});

export let logout = (data) => {
  return {
    type: 'LOGOUT',
  };
};
