import {IGetUserParams} from "../type/_container/profile.type";
import {get} from "../helper/axios-handler";

export const onGetUser = (params: IGetUserParams) => get(`/api/user/getProfile/${params.networkId}/${params.address}`);