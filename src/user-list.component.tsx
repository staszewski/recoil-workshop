import { useRecoilValue } from "recoil/dist";
import { users } from "./selectors/users";
import * as React from "react";

export default function UserList() {
  const userList = useRecoilValue(users);
  console.log(userList);
  return (
    <ul>
      {userList.map(({ id, name }: { id: number; name: string }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
