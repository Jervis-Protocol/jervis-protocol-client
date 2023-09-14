import {post} from "../helper/axios-handler";

export const onSendAuthNumber = (email: string) => post("/api/email/send", {email: email});