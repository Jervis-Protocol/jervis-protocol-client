import {get, post} from "../helper/axios-handler";
import {IUpdateUser} from "../type/_data/user.type";

export const onEditSubmit = (user: IUpdateUser) => post("/api/user/update", user)
export const onChangeNickname = (nickname: string) => get(`/api/user/validationNickname/${nickname}`);
export const onEmailValidation = (email: string) => /^\S+@\S+$/i.test(email);
export const onSendAuthNumber = (email: string) => post("/api/email/changeEmailSendValidNum", { email: email });
export const onValidationAuth = (number: number) => post("/api/email/changeEmailValidation", { inputNum: number });
export const onValidationAuthNumber = (input: number) => {
    if (input.toString().length !== 6)
        throw { message: "input length to low"};
    return onValidationAuth(input);
}