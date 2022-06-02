import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { checkColor, currentTime, friendList, currentDay } from "../../../atom";
import "./calender.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
const Calender = () => {
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

  return (
    <div className="calendar">
      <div className="main">
        <div className="header">
          <div onClick={() => prevMonth()} className="nav-btn go-prev">
            &lt;
          </div>
          <div className="year-month">{`${viewYear}년 ${viewMonth + 1}월`}</div>
          <div onClick={() => nextMonth()} className="nav-btn go-next">
            &gt;
          </div>
        </div>
        <div className="days">
          <div className="day">일</div>
          <div className="day">월</div>
          <div className="day">화</div>
          <div className="day">수</div>
          <div className="day">목</div>
          <div className="day">금</div>
          <div className="day">토</div>
        </div>
        <div
          onClick={(e) => {
            let id = e.target.id;
            console.log(e);
            if (id == "") return;
            console.log(id);
            colorCheck.map((check) => {
              console.log(check.id);
            });
            setFound(
              setColorCheck(colorCheck.find((id) => id.id === e.target.id))
            );
            if (found) {
              //색깔이 칠해져있다면
              setColorCheck([...colorCheck, { id: id, check: false }]);
            } else {
              setColorCheck([...colorCheck, { id: id, check: true }]);
            }

            navigate(`/scheduleManageMent/${id}`);
          }}
          className="dates"
        >
          {currentDays.map((date, i) => {
            const condition =
              i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

            return (
              <div
                key={i}
                className={
                  condition === "this"
                    ? colorCheck.find(
                        (check) =>
                          check.id == viewYear + "" + viewMonth + i + ""
                      )
                      ? "date this checkColor"
                      : "date this"
                    : colorCheck.find(
                        (check) =>
                          check.id == viewYear + "" + viewMonth + i + ""
                      )
                    ? "date other checkColor"
                    : "date other"
                }
                index={i}
                id={viewYear + "" + viewMonth + i + ""}
              >
                {date}
              </div>
            );
          })}
        </div>
        <Outlet context={calenderID}></Outlet>
      </div>
    </div>
  );
};

export default Calender;
