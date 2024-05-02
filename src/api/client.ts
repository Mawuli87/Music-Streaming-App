import {Keys, getFromAsyncStorage} from '@utils/asyncStorage';
import axios, {CreateAxiosDefaults} from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.46.164:8989',
});

const baseURL = 'http://192.168.46.164:8989';

type headers = CreateAxiosDefaults<any>['headers'];

export const getClient = async (headers?: headers) => {
  const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);

  if (!token) return axios.create({baseURL});

  const defaultHeaders = {
    Authorization: 'Bearer ' + token,
    ...headers,
  };

  return axios.create({baseURL, headers: defaultHeaders});
};

export default client;

//192.168.43.188 huawai
//galaxi
//192.168.28.164
//192.168.1.8
//mobile content
//192.168.1.5
