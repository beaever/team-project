export interface UserGetKakaoProfileResponseDataDataModel {
    id:string;
    email:string;
    nickname:string;
}

export default interface UserGetKakaoProfileResponseDataModel {
    code: number;
    msg: string;
    data: UserGetKakaoProfileResponseDataDataModel;
}