import { AsyncStorage } from 'react-native';
import axios from 'axios';

let lastError;

export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
  login(username: string, password: string) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        // handle success
        response.data;
        return true;
      })
      .catch(function (error) {
        // handle error
        lastError = error;
        return false;
      });
  },
};

export function _setApiKey(key: string) {
  AsyncStorage.setItem('api_key', key);
  return true;
}
export function _getApiKey() {
  return AsyncStorage.getItem('api_key');
}
