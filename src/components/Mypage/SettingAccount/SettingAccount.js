import React from 'react'
import './SettingAccount.css'
function SettingAccount() {
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


          <input type='text' className='settingBox' value='아이디' placeholder="여기에 작성하세용"></input>
          <input type='text' className='settingBox'></input>
          <input type='text' className='settingBox'></input>

      </body>
  )
}

export default SettingAccount
