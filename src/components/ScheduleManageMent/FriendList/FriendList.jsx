import React from "react";
import { useRecoilValue } from "recoil";
import { friendList } from "../../../atom";
import "./FriendList.css";
const FriendList = () => {
  const myFriends = useRecoilValue(friendList);
  return (
    <div className="friendList">
      {myFriends.map((user, index) => {
        return (
          <div className="friend" key={user.id + index}>
            {user.name}
          </div>
        );
      })}
      <div className="scroolBar">
        {myFriends.map((user, index) => {
          return <div className="noneBlock"></div>;
        })}
      </div>
    </div>
  );
};

export default FriendList;
