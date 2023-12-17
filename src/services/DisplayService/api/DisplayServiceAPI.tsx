import axios from 'axios';
import { environment } from './enviroment';

const DisplayServiceApi = axios.create({
  baseURL: environment.URL,
});

export default DisplayServiceApi;
