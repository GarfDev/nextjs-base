/* tslint:disable:no-export-default */
import { call } from "redux-saga/effects";
import { APIParams } from "./types";
import axios from "./axios";

function* callApi(apiParams: APIParams) {
  const response = yield call(axios, apiParams);

  return response;
}

export default callApi;
