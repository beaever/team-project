import { request } from 'http';
import axios from 'axios';
import { BASE_URL, GET, JSON_HEADER, POST } from '../../../shared/api-constant';
import { AxiosRequestConfig } from '../config/axios';
import UserCheckEmailRequesetDataModel from './model/user-checkEmail-request-data-model';
import UserCheckNickanmeRequesetDataModel from './model/user-checkNickname-request-data-model';
import { config } from 'process';
import UserMemberSingupRequestDataModel from './model/user-member-singup-request-data-model';
import UserCheckPhoneRequesetDataModel from './model/user-checkPhone-request-data-model';

export const user = {
  // 회원의 개인 정보 가져오기 API
  // memberInfo: (request: UserMemberInfoRequestDataModel) => {
  //   const config: AxiosRequestConfig = {
  //     url: 'check-email',
  //     method: POST, // GET 방식이라면 GET , POST 방식이라면 POST ,
  //     headers: {
  //       ...JSON_HEADER,
  //       // 토큰 값을 원한다면 Authorization: Beazie or  token,
  //     },
  //     data: {
  //       // POST 방식에서 요구하는 Params value
  //       email: request.email ?? '',
  //     },
  //   };
  //   return axios(config);
  // },

  // 이메일 중복 검사 API
  checkEmail: (request: UserCheckEmailRequesetDataModel) => {
    const config: AxiosRequestConfig = {
      url: BASE_URL + 'auth/check-email',
      method: POST,
      headers: {
        ...JSON_HEADER,
      },
      data: {
        email: request.email ?? '',
      },
    };
    return axios(config);
  },

  // 닉네임 중복 검사 API

  checkNickname: (request: UserCheckNickanmeRequesetDataModel) => {
    const config: AxiosRequestConfig = {
      url: BASE_URL + 'auth/check-nickname',
      method: POST,
      headers: {
        ...JSON_HEADER,
      },
      data: {
        nickname: request.nickname ?? '',
      },
    };
    return axios(config);
  },

  // 휴대폰 중복 검사 API

  checkPhone: (request: UserCheckPhoneRequesetDataModel) => {
    const config: AxiosRequestConfig = {
      url: BASE_URL + 'auth/check-nickname',
      method: POST,
      headers: {
        ...JSON_HEADER,
      },
      data: {
        nickname: request.phone ?? '',
      },
    };
    return axios(config);
  },

  // 회원가입 API

  Signup: (request: UserMemberSingupRequestDataModel) => {
    const config: AxiosRequestConfig = {
      url: BASE_URL + 'auth/signup',
      method: POST,
      headers: {
        ...JSON_HEADER,
      },
      data: {
        adultOk: request.adultOk ?? false,
        authId: request.authId ?? '',
        collectionOfMarketingInfoOk: request.collectionOfMarketingInfoOk ?? false,
        collectionOfPersonalInfoOk: request.collectionOfPersonalInfoOk ?? false,
        email: request.email ?? '',
        nickname: request.nickname ?? '',
        password: request.password ?? '',
        phoneNum: request.phoneNum ?? '',
        serviceOk: request.serviceOk ?? false,
        snsType: request.snsType ?? '',
        username: request.username ?? '',
      },
    };
    return axios(config);
  },
};
// 회원가입 API
