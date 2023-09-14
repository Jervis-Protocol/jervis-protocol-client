import {ISearchQuery} from "../type/_container/search.type";
import {get} from "../helper/axios-handler";

export const onGetFunding = (query: ISearchQuery) => get(`/api/funding/search?page=${query.pageIndex}&${query.query.replace('?','')}`);