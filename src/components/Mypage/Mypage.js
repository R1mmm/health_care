import React from 'react'
import './Mypage.css'

function Mypage() {
  return (
      <body className='homebody'>
          <a href={`/`}>
          <div className="Homelogo">
              <img src="img/Logo.png" width="100%" height="23px" alt="Logo"></img>
          </div>
          </a>
          <div className="logout">
              <p style={{ color: '#FFFFFF' }}>Logout</p>
          </div>


        <a href={`/manageFriend`}>
          <div className="myPageFriend">친구 관리</div>
        </a>
        <a href={`/manageRoutin`}>
          <div className="myPageRoutin">루틴 관리</div>
        </a >
        <a href={`/settingAccount`}>
          <div className="myPageSetting">계정 관리</div>
        </a>
      </body>
  )
}

export default Mypage
