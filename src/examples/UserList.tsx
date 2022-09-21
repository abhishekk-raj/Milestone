import React, { useEffect, useState } from "react";
import { IUserListState } from "../models/user-list.state";

const UserList = () => {
  const [userList, setUserList] = useState<IUserListState[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
        setUserList(users);
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <h1>User List</h1>
      {userList.map((user) => {
        return (
          <div>
            <p>Id: {user.id}</p>
            <p>UserId: {user.userId}</p>
            <p>Title: {user.title}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
