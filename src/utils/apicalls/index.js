import axios from 'axios';
import {getLoginData} from '../../redux/store/getState';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getApi = async api => {
  let loginData = {...getLoginData()};
  console.log({api, token: loginData?.data?.token});
  const config = {
    headers: {
      Authorization: 'Bearer ' + loginData?.data?.token,
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios(api, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

export const postApiWithoutToken = async (api, data) => {
  console.log({api, data});
  const config = {
    headers: {
      // Authorization: loginData ? 'Bearer ' + loginData?.data?.token : '',
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .post(api, data, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

export const postApi = async (api, data) => {
  console.log({api, data});
  let loginData = {...getLoginData()};
  const config = {
    headers: {
      Authorization: 'Bearer ' + loginData?.data?.token,
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .post(api, data, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

export const uploadApi = async (api, data) => {
  console.log({api, data});
  let loginData = {...getLoginData()};
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + loginData?.data?.token,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(api, data, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

export const putApi = async (api, data) => {
  let loginData = {...getLoginData()};
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .put(api, data, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

export const deleteApi = async (api, data) => {
  let loginData = {...getLoginData()};
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .delete(api, data, config)
      .then(resolve)
      .catch(err => {
        reject(err.response);
        handleAuthorization(err.response?.status);
      });
  });
};

const handleAuthorization = status => {
  if (status !== 401) return;
  AsyncStorage.clear();
};
