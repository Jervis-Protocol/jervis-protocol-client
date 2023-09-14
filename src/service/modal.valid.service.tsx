import {post} from "../helper/axios-handler";
import {IUser} from "../type/_data/user.type";

export const onValidationAuthNumber = (input: number): Promise<IUser> => post("/api/email/validation", {inputNum: input});