//import { render } from '@testing-library/react';
import React from 'react';
import './ExerciseHome.css'

function ExerciseHome() {


  
  const groupList=[
    {
      groupName:"등운동",
      psnGname:"아자자자자",
      tag:"#등 #열심히",
      rate:"80%",
    },
    {
      groupName:"어깨운동",
      psnGname:"힘내자아아",
      tag:"#함께해요",
      rate:"90%",
    },
    {
      groupName:"하체운동",
      psnGname:"파이티ㅣ이이잉",
      tag:"#안녕안녕",
      rate:"10%",
    },
    {
      groupName:"하체운동",
      psnGname:"파이티ㅣ이이잉",
      tag:"#안녕안녕",
      rate:"10%",
    },
    {
      groupName:"하체운동",
      psnGname:"파이티ㅣ이이잉",
      tag:"#안녕안녕",
      rate:"10%",
    }
  ];
  
  function Groupbox({groupList}){
    return (
      <a href={`/exerciseGroup`} >
        <div className="Groupbox" style={{marginBottom: '40px'}}>
          <p className="groupName">{groupList.groupName}</p>
          <p className="psnGname">{groupList.psnGname}</p>
          <p className="tag">{groupList.tag}</p>
          <p className="rate">출석률 {groupList.rate}</p>
        </div>
      </a>
      )
  }
  

  return (
    <div className='homebody'>
      <a href={`/`} >
        <div className="esclogo">
          <img src="img/Logo.png" width="100%" height="23px" ></img>
        </div>
      </a>
      <p className='logout'>Logout</p>


      <div className="GroupList">
          <p className="select">
            운동선택
          </p>

          
          {groupList.map((group)=>(<Groupbox groupList={group}/>))}
      </div>
    </div>
  )
}

export default ExerciseHome
