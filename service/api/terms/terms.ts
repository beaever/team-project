import TermsRequestDataModel from './model/terms-requestDataModel';
import { GET, JSON_HEADER, POST } from '../../../shared/api-constant';
import { AxiosRequestConfig } from '../config/axios';
import axios from 'axios';

export const terms = {
  termsDetail: (request: TermsRequestDataModel) => {
    const config: AxiosRequestConfig = {
      url: 'terms/',
      method: GET,
      headers: {
        ...JSON_HEADER,
      },
      params: {
        name: request.name ?? '',
      },
    };
    return axios(config);
  },
};
