import { listState } from "../atoms/list-atom";
import { selector } from "recoil/dist";

export const itemsCountState = selector({
  key: "itemsCountState",
  get: ({ get }) => {
    const list = get(listState);

    return list.length;
  },
});
