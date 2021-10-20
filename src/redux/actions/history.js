import { Types } from "./types";

export default function setHistory(data, date, id) {
  return {
    type: Types.SET_HISTORY,
    payload: data,
    date: date,
    id: id,
  };
}
