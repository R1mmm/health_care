import React from "react";
import './HomePage.css'
import {Link} from 'react-router-dom'

function HomePage(){


    return (
        <body className="homebody">
            <div className="Homelogo">
                <img src="img/Logo.png" width="100%" height="23px" alt="Logo"></img>
            </div>
            <div className="logout">
                <p style={{color: '#FFFFFF'}}>Logout</p>
            </div>
            <p className="font">37%</p>

        
            <div className="block1">
                <Link to="/exercise">
                    <img src="img/운동.png" className="exercise" alt="exercise"></img>
                    <img src="img/exercise_text.png" class="exercise_text" alt="exercisehover"></img>
                </Link>
            </div>

            <div className="block2">
                <Link to="/">
                    <img src="img/캘린더.png" className="calendar" alt="calendar"></img>
                    <img src="img/calendar_text.png" class="calendar_text" alt="calendarhover"></img>
                </Link>
            </div>


            <div className="block3">
                <Link to="/groupList">
                    <img src="img/목록.png" className="list" alt="list"></img>
                    <img src="img/list_text.png" class="list_text" alt="listhover"></img>
                </Link>
            </div>

            <div className="block4">
                <Link to="/mypage">
                    <img src="img/마이페이지.png" className="myPage" alt="mypage"></img>
                    <img src="img/myPage_text.png" class="myPage_text" alt="mypagehover"></img>
                </Link>
            </div>
            
           
        </body>
    )
}

export default HomePage