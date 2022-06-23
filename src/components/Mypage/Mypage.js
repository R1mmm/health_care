import React from 'react'
import './Mypage.css'
import {Link} from 'react-router-dom';

function Mypage() {
  return (
      <body className='homebody'>
          <Link to="/">
          <div className="Homelogo">
              <img src="img/Logo.png" width="100%" height="23px" alt="Logo"></img>
          </div>
          </Link>
          <div className="logout">
              <p style={{ color: '#FFFFFF' }}>Logout</p>
          </div>


        <Link to="/manageFriend">
          <div className="myPageFriend">친구 관리</div>
        </Link>
        <Link to="/manageRoutin">
          <div className="myPageRoutin">루틴 관리</div>
        </Link>
        <Link to="/settingAccount">
          <div className="myPageSetting">계정 관리</div>
        </Link>
      </body>
  )
}

export default Mypage
