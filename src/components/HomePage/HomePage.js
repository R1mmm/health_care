import React from "react";
import './HomePage.css'

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

            <div>
                <a href={`/exercise`} >
                    <div className="block1">
                        <img src="img/운동.png" className="exercise" alt="exercise"></img>
                        <img src="img/exercise_text.png" class="exercise_text" alt="exercisehover"></img>
                    </div>
                </a>

                <a href={`/`}>
                    <div className="block2">
                        <img src="img/캘린더.png" className="calendar" alt="calendar"></img>
                        <img src="img/calendar_text.png" class="calendar_text" alt="calendarhover"></img>
                    </div>
                </a>

                <div className="block3">
                    <img src="img/목록.png" className="list" alt="list"></img>
                    <img src="img/list_text.png" class="list_text" alt="listhover"></img>
                </div>

                <a href={`/mypage`} >
                    <div className="block4">
                        <img src="img/마이페이지.png" className="myPage" alt="mypage"></img>
                        <img src="img/myPage_text.png" class="myPage_text" alt="mypagehover"></img>
                    </div>
                </a>
            
        
            </div>
        </body>
    )
}

export default HomePage