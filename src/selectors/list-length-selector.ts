import { listState } from "../atoms/list-atom";
import { selector } from "recoil/dist";

export const listLengthState = selector({
  key: "listLengthState",
  get: ({ get }) => {
    const list = get(listState);

    return list.length;
  },
});
