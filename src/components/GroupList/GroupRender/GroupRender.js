import { render } from '@testing-library/react'
import React from 'react'
import './GroupRender.css'

function GroupRender({sort,groupList}) {

    function GroupBox({ groupList }) {
        return (
          <a href={`/exerciseGroup`} style={{margin:"10px 30px 25px 0px"}}>
            <div className="GroupListBox" >
              <p className="Mrate">출석률     {groupList.rate}</p>
              <p className="MfriendName">{groupList.friendName}</p>
              <p className="MgroupName">{groupList.groupName}</p>
              <p className="Mmemo">{groupList.memo}</p>
            </div>
          </a>
        )
      }



    if(sort === 0) {
        return (
            <div className='GroupListDiv'>
                {groupList.map((routin)=>(<GroupBox groupList={routin}/>))}
            </div>
        )
    }
    else if(sort === 1) {
        return (
            <p>가나다순입니다</p>
        )
    
    
    }
    else if(sort === 2) {
        return (
            <p>최신순입니다</p>
        )
    }
}

export default GroupRender
