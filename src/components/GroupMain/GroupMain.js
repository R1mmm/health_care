import React from 'react'
import './GroupMain.css'
import { useLocation } from 'react-router-dom';

function GroupMain() {

    const location=useLocation()
    console.log(location)
  return (

    
    //ExerciseRecording에서 가져온 body
    <body className='Recbody'> 
        <a href={`/`} >
            <img  className="RecLogo" src="../img/Logo2.png"></img>
            </a>
            <p className='RecHome'>Home</p>


        <p className='videoNameSt'>{location.state.groupList.VideoName}</p>
        <p className='groupNameSt'>{location.state.groupList.groupName}</p>
        <p className='groupMemberCount'>{location.state.groupList.member}명/20명</p>
        <p className='groupMainRate'>{location.state.groupList.rate}</p>


    </body>
  )
}

export default GroupMain
