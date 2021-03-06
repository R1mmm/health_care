import React from 'react'
import './ExerciseFinish.css'
import {Link} from 'react-router-dom'

function ExerciseFinish() {
  return (
    <body>
        <Link to="/">
            <div className="esclogo">
            <img src="img/Logo.png" width="100%" height="23px" ></img>
            </div>
            <p className='logout'>Logout</p>
        </Link>

        <div className='box'>
            <img className='check' src="img/check.png"></img>
            <p className='comment1'>오늘도 고생하셨어요!</p>
            <p className='comment2'>30일 중 15일 완료</p>

            <Link to="/">
                <div className='toHome'>
                    <p style={{ position: 'relative' ,
                    width: '90px',
                    height: '0px',
                    left: '14px',
                    top: '8px',
                    fontFamily: 'Noto Sans KR',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '11px',
                    lineHeight: '15px',
            color:'#FFFFFF'}}>홈으로 돌아가기</p>
                </div>
            </Link>
        </div>

    </body>
  )
}

export default ExerciseFinish
