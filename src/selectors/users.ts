import { selector } from "recoil/dist";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export const users = selector({
  key: "users",
  get: async () => {
    return await fetchUsers();
  },
});
