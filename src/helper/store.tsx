import createSagaMiddleware from "@redux-saga/core";
import {createLogger} from 'redux-logger';
import {configureStore, MiddlewareArray} from '@reduxjs/toolkit'
import rootReducer from "../reducers/root.reducer";
import {rootSaga} from "../sagas/root.saga";
// import {persistReducer, persistStore} from "redux-persist";
// import storage from "redux-persist/lib/storage/session"

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);
// const persiStore = persistStore(store);

export default { store };
