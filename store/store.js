import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

// 
import rootReducer, { initialState } from "./reducer/index"
import { rootSaga } from "./saga";


const developemnt = true
const sagaMiddleware = createSagaMiddleware();


const bindMiddleware = (middleware) => {
    if (developemnt) {
        return composeWithDevTools(applyMiddleware(middleware))
    }
    return applyMiddleware(middleware)
}

export const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(sagaMiddleware)

);

const runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
}
runSagaTask()

export const wrapper = createWrapper(() => store);