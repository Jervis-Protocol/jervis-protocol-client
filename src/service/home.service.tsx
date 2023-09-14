import {get} from "../helper/axios-handler";

export const onGetMainFunding = () => get("/api/funding/getCarousel");
export const onGetPopularFunding = () => get("/api/funding/getPopular");
export const onGetTodoFunding = () => get("/api/funding/getLatest");