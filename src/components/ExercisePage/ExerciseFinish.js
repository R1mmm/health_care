import React from 'react'
import './ExerciseFinish.css'

function ExerciseFinish() {
  return (
    <body>
        <a href={`/`} >
            <div className="esclogo">
            <img src="img/Logo.png" width="100%" height="23px" ></img>
            </div>
            <p className='logout'>Logout</p>
        </a>

        <div className='box'>
            <img className='check' src="img/check.png"></img>
            <p className='comment1'>오늘도 고생하셨어요!</p>
            <p className='comment2'>30일 중 15일 완료</p>

            <a href={`/`} >
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
            </a>
        </div>

    </body>
  )
}

export default ExerciseFinish
