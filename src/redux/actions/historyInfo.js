import { Types } from "./types";

export default function setHistoryInfo(data, price) {
  return {
    type: Types.SET_HISTORY_INFO,
    payload: data,
    price: price,
  };
}
