import React from "react";
import Nav from "./Nav/Nav";
import "./startPage.css";
const StartPage = () => {
  return (
    <div className="StartPage">
      <div className="StartPage-main">
        <img className="StartPage-main-img" src="img/메인페이지.png"></img>
        <Nav />
        <div className="StartPage-main-content">
          <div className="StartPage-main-content1">
            홈 트레이닝을 같이,더 즐겁게
          </div>
          <div className="StartPage-main-content2">
            함께 해서 더 즐거운 운동을 <br />
            Helath Together에서 시작하세요.
          </div>
          <div className="StartPage-main-content3">시작하기</div>
        </div>
      </div>
      <div className="StartPage-greeting">
        <div>
          혼자 하는 홈트,
          <br />
          심심하지 않으셧나요?
        </div>
        <div>
          루틴 공유부터 알림 설정까지,
          <br />
          이제는 Health Together에서 함께 해요!
        </div>
      </div>
    </div>
  );
};

export default StartPage;
