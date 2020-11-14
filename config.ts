/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export const isDev = process.env.NODE_ENV === "development";

export const APP_ADDR = isDev
  ? "http://localhost:3000"
  : "https://app.quicky.digital";

export const SERVER_ADDR = isDev
  ? "http://localhost:8000"
  : "https://quicky-server.herokuapp.com";

export const GA_TRACKING_ID = "UA-178882519-1";
export const FB_PIXEL = "297559898107412"; //"1039111996558849";
