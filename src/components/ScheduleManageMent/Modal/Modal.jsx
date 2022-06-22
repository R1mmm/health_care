import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Modal.css";
const Modal = () => {
  const [id, setId] = useState([]);
  const [modalDay, setModalDay] = useState();
  let navigate = useNavigate();
  const { calenderID } = useParams(); //useOutletContext으로 바꿔주기
  //중괄호 두번쓰기
  function closeModal() {
    navigate("/scheduleManageMent");
  }
  useEffect(() => {
    let id = calenderID.split(" ");
    setId(id);
  }, []);
  useEffect(() => {
    let id = calenderID.split(" ");
    id = (id[3] / 1) % 7;
    switch (id) {
      case 1:
        setModalDay("월요일");
        break;
      case 2:
        setModalDay("화요일");
        break;
      case 3:
        setModalDay("수요일");
        break;
      case 4:
        setModalDay("목요일");
        break;
      case 5:
        setModalDay("금요일");
        break;
      case 6:
        setModalDay("토요일");
        break;
      case 0:
        setModalDay("일요일");
        break;
    }
  });
  return (
    <div className="Modal">
      <div className="ModalLayout">
        <p className="groupName">그룹명</p>
        <h1>{id[0] + "년" + id[1] + "월" + id[2] + "일" + " " + modalDay}</h1>
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
