import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Modal.css";
const Modal = () => {
  let navigate = useNavigate();
  const { calenderID } = useParams(); //useOutletContext으로 바꿔주기
  //중괄호 두번쓰기
  console.log(calenderID);
  function closeModal() {
    navigate("/scheduleManageMent");
  }
  return (
    <div className="Modal">
      <div className="ModalLayout">
        <p className="groupName">그룹명</p>
        <h1>2022년 4월 17일 일요일</h1>
        <div className="exerciseInform">
          <div>
            칼로리 <span>195kcal</span>
          </div>
          <div>
            소요 시간 <span>0시간 52분</span>
          </div>
          <div>
            반복 횟수 <span>3회</span>
          </div>
        </div>
        <div className="exercisePicture">
          <div></div>
          <div></div>
        </div>
        <p className="exerciseHashTag">
          영상 제목, #전신 유산소 #칼로리 #다이어트
        </p>
        <p className="exerciseText">입력된 텍스트 출력</p>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </button>
        <span className="calenderPre">&lt;</span>
        <span className="calenderNext">&gt;</span>
      </div>
    </div>
  );
};

export default Modal;
