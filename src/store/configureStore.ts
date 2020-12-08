import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./sagas/logger";

export default function () {
  return configureStore({ reducer, middleware: [logger] });
}
