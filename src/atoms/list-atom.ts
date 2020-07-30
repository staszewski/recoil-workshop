import { atom } from "recoil/dist";

export const listState = atom({
    key: "listState",
    default: ["milk", "grapes", "coca-cola"],
});
