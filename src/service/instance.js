import axios from 'axios';
import {API_KEY, token} from '../utils/contants';
import {BASE_URL} from './url';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.params = {
  api_key: API_KEY,
  language: 'tr-TR',
};
Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export default Client;
