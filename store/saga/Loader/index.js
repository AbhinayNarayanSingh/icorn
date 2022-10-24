import { put, takeEvery } from "redux-saga/effects";
import { CLOSE_LOADER_WORKER, OPEN_LOADER_WORKER } from "../../constants";

export const OPEN_LOADER = "OPEN_LOADER";
export const CLOSE_LOADER = "CLOSE_LOADER";

// action -> watcher
export const open_loader = (data) => {
    return { type: OPEN_LOADER, data }
}
export const close_loader = (data) => { 
    return { type: CLOSE_LOADER, data }
}

// watcher -> worker
export function* loader_watcher(){
    yield takeEvery(OPEN_LOADER, open_loader_worker)
    yield takeEvery(CLOSE_LOADER, close_loader_worker)
}

// worker do work & put reducer type
export function* open_loader_worker ({data}){
    yield put({ type: OPEN_LOADER_WORKER, payload: data });
}
export function* close_loader_worker(){
    yield put({ type: CLOSE_LOADER_WORKER });
}