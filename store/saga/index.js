import { all } from "redux-saga/effects";
import { close_dialog_worker, open_dialog_watcher } from "./Dialog";

// saga combiner
export function* rootSaga() {
    yield all([
        open_dialog_watcher(),
        close_dialog_worker()
    ])
} 