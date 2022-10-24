import { all } from "redux-saga/effects";
import {dialog_watcher } from "./Dialog";
import { loader_watcher } from "./Loader";

// saga combiner
export function* rootSaga() {
    yield all([
        dialog_watcher(),
        loader_watcher()
        
    ])
} 