import axios from "axios";
import {ResponseType} from "../type/_data/response.type";

const rootUrl = import.meta.env.VITE_APP_NODE_ENV === "production" ? "http://testnet.keedari.com" : ""


export const get = async (url: string): Promise<any> => {
    const response = await axios.get<ResponseType>(rootUrl + url,{ withCredentials: true});
    return response.data.data;
}

export const post = async (url: string, body: any) => {
    const response = await axios.post<ResponseType>(rootUrl + url, body, { withCredentials: true });
    if (response.status === 200)
        return response.data.data;
    else
        return response.data.message;
}

export const upload = async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    const response = await axios.post<ResponseType>(rootUrl + '/api/common/upload', form, { withCredentials: true, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    if (response.status === 200)
        return response.data.data;
    else
        return response.data.message;
}

export const load = async (url: string) => {
    const response = await axios.get<ResponseType>(rootUrl + url,{ withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*'}});
    return response;
}
