import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.28.164:8989',
});

export default client;
//192.168.43.188 huawai
//galaxi
//192.168.28.164