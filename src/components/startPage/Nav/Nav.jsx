import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="StartPage_Nav">
      <div className="StartPage_Nav-title">
        <img src="img/덤벨.png"></img>
        <div>Health Together</div>
      </div>
      <div className="StartPage_Nav-login">
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </nav>
  );
};

export default Nav;
