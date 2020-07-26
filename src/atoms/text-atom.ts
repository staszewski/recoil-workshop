import {atom} from "recoil/dist";

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value, also initial value
});
