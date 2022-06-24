import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { checkColor, currentTime, friendList, currentDay } from "../../../atom";
import "./AttendenceBook.css";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../nav/Nav";
const AttendenceBook = () => {
  let navigate = useNavigate();
  const SetNow = useSetRecoilState(currentTime);
  const now = useRecoilValue(currentTime);
  const [colorCheck, setColorCheck] = useRecoilState(checkColor);
  const [currentDays, setCurrentDay] = useRecoilState(currentDay);
  const [found, setFound] = useState(false);
  const { calenderID } = useParams();
  let viewYear = now.getFullYear();
  let viewMonth = now.getMonth();
  let viewDay = now.getDay();
  let prevLast = new Date(viewYear, viewMonth, 0); //지난달 마지막 날
  let thisLast = new Date(viewYear, viewMonth + 1, 0); //이번달 마지막 날은 아니고 그냥 가공해야함
  let PLDate = prevLast.getDate(); //가공된 날짜/5월
  let PLDay = prevLast.getDay(); //가공된 요일
  let TLDate = thisLast.getDate(); //가공된 이번달 날짜/6월
  let TLDay = thisLast.getDay();
  let prevDates = [];
  let thisDates = [...Array(TLDate + 1).keys()].slice(1);
  let nextDates = [];
  let firstDateIndex = currentDays.indexOf(1);
  let lastDateIndex = currentDays.lastIndexOf(TLDate);
  useEffect(() => {
    SetNow(new Date());
    console.log(PLDate);
    console.log(PLDay);
    goToday();
  }, []);

  function makeCalender() {
    viewMonth = now.getMonth();
    viewDay = now.getDay();
    prevLast = new Date(viewYear, viewMonth, 0); //지난달 마지막 날
    thisLast = new Date(viewYear, viewMonth + 1, 0); //이번달 마지막 날
    PLDate = prevLast.getDate(); //날짜
    PLDay = prevLast.getDay(); //요일

    TLDate = thisLast.getDate(); //이달에 날짜가 몇개있는지
    TLDay = thisLast.getDay();

    prevDates = [];
    thisDates = [...Array(TLDate + 1).keys()].slice(1);
    nextDates = [];
    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
      }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
      nextDates.push(i);
    }
    setCurrentDay([...prevDates, ...thisDates, ...nextDates]);
    console.log(currentDays);
    console.log(now);
    SetNow(now);
  }
  const prevMonth = () => {
    now.setMonth(now.getMonth() - 1);
    makeCalender();
  };

  const nextMonth = () => {
    now.setMonth(now.getMonth() + 1);
    makeCalender();
  };

  const goToday = () => {
    now.setMonth(now.getMonth());
    makeCalender();
  };

  const frinedList = [
    {
      id: 1,
      nickName: "닉네임",
      attendanceRate: "87%",
    },
    {
      id: 2,
      nickName: "닉네임",
      attendanceRate: "65%",
    },
    {
      id: 3,
      nickName: "닉네임",
      attendanceRate: "43%",
    },
    {
      id: 1,
      nickName: "닉네임",
      attendanceRate: "87%",
    },
    {
      id: 2,
      nickName: "닉네임",
      attendanceRate: "65%",
    },
    {
      id: 3,
      nickName: "닉네임",
      attendanceRate: "43%",
    },
    {
      id: 1,
      nickName: "닉네임",
      attendanceRate: "87%",
    },
    {
      id: 2,
      nickName: "닉네임",
      attendanceRate: "65%",
    },
    {
      id: 3,
      nickName: "닉네임",
      attendanceRate: "43%",
    },
    {
      id: 2,
      nickName: "닉네임",
      attendanceRate: "65%",
    },
    {
      id: 3,
      nickName: "닉네임",
      attendanceRate: "43%",
    },
    {
      id: 1,
      nickName: "닉네임",
      attendanceRate: "87%",
    },
    {
      id: 1,
      nickName: "닉네임2",
      attendanceRate: "87%",
    },
    {
      id: 1,
      nickName: "닉네임2",
      attendanceRate: "87%",
    },
    {
      id: 1,
      nickName: "닉네임2",
      attendanceRate: "87%",
    },
    {
      id: 1,
      nickName: "닉네임2",
      attendanceRate: "87%",
    },
    {
      id: 1,
      nickName: "닉네임2",
      attendanceRate: "87%",
    },
  ];
  return (
    <div className="Attendence_screen">
      <Nav />
      <div className="Attendence">
        <div className="Attendence_main">
          <div className="Attendence_header">
            <div className="Attendence_left">
              <p>그룹명</p>
              <h1>출석률 38%</h1>
            </div>
            <div className="Attendence_right">
              <div
                onClick={() => prevMonth()}
                className="Attendence_nav-btn Attendence_go-prev"
              >
                &lt;
              </div>
              <div className="Attendence_year-month">{`${viewYear}년 ${
                viewMonth + 1
              }월`}</div>
              <div
                onClick={() => nextMonth()}
                className="Attendence_nav-btn Attendence_go-next"
              >
                &gt;
              </div>
            </div>
          </div>
          <div className="Attendence_days">
            <div className="Attendence_day">일</div>
            <div className="Attendence_day">월</div>
            <div className="Attendence_day">화</div>
            <div className="Attendence_day">수</div>
            <div className="Attendence_day">목</div>
            <div className="Attendence_day">금</div>
            <div className="Attendence_day">토</div>
          </div>
          <div className="Attendence_dates">
            {currentDays.map((date, i) => {
              const condition =
                i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
              return (
                <div
                  className={
                    condition == "this"
                      ? "Attendence_date this"
                      : "Attendence_date other"
                  }
                  key={i}
                  index={i}
                >
                  {date}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Attendence_attendanceRate">
          <div className="Attendence_attendanceRate-high">이달의 출석왕</div>
          {frinedList.slice(0, 3).map((item) => {
            return (
              <div className="Attendence_friend" key={item.id}>
                <div>
                  {item.id}.&nbsp;{item.nickName}
                </div>
                <div>{item.attendanceRate}</div>
              </div>
            );
          })}
          <div className="Attendence_RemainderFriends">
            {frinedList.map((item) => {
              return (
                <div className="Attendence_Remainder">{item.nickName}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendenceBook;
