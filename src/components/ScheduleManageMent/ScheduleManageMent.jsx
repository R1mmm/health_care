import React, { useRef, useState } from "react";
import styles from "./ScheduleManageMent.module.css";
import moment, { Moment as MomentTypes } from "moment";
import Calendar, { CalendarDayHeader } from "./calender/calender.jsx";
import FriendList from "./FriendList/FriendList";
import Nav from "./nav/Nav";
const ScheduleManageMent = () => {
  const [yearAndMonth, setYearAndMonth] = useState([2022, 2, 9]);

  return (
    <body className={styles.screen}>
      <Nav />
      <main className={styles.body}>
        <Calendar />
        <FriendList />
      </main>
    </body>
  );
};

export default ScheduleManageMent;
