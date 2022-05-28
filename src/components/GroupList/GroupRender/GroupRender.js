
import React from 'react'
import './GroupRender.css'
import { Link } from 'react-router-dom'

function GroupRender({sort,groupList}) {

    function GroupBox({ groupList }) {
        return (
            //Link를 통해 props 데이터 전달
            <Link to={`/groupMain/${groupList.groupId}`}
            state={{
                groupList : groupList
                }}>
            <div className="GroupListBox">
              <p className="Mrate">출석률     {groupList.rate}</p>
              <p className="MfriendName">{groupList.friendName}</p>
              <p className="MgroupName">{groupList.groupName}</p>
              <p className="Mmemo">{groupList.memo}</p>
            </div>
            </Link>
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
