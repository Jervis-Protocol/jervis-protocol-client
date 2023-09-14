import {upload} from "../helper/axios-handler";
import {IInputFunding} from "../type/_data/funding.type";

export const fileUpload = (file: File) => upload(file);
export const validationInput = (input: IInputFunding) => input.title &&
input.description &&
input.type &&
input.sdate &&
input.edate &&
input.community &&
input.background &&
input.beneficiary &&
input.symbol &&
input.goal &&
!input.goal!.includes(".") &&
input.story &&
input.category!.length > 0 &&
input.nfts!.length > 0 ? true : false;