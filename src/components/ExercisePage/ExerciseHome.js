//import { render } from '@testing-library/react';
import React from 'react';
import './ExerciseHome.css';
import {Link} from 'react-router-dom';

function ExerciseHome() {


  const groupList=[
    {
      VideoName:"하체운동",
      groupName:"운동만이 살 길!",
      memo:"저희는 하체를 열심히 해볼건데요 열심히 운동합시다",
      rate:"80%",
      tag:"#등 #열심히",
      psnGname:'하체하는 그룹',
      member: 15,
      groupId:0,
      videoUrl:'https://youtu.be/LGzhC9prUPw'
    },
    {
      VideoName:"등운동",
      groupName:"나림이네 그룹",
      memo:"열심히 하실분만 ㅎㅎ",
      tag:"#꾸준히 #열심히",
      psnGname:'등 운동하는 그룹',
      rate:"76%",
      member: 12,
      groupId:1,
      videoUrl:'https://youtu.be/OEZc_c7A7Ko'
    },
    {
      VideoName:"매일20분홈트",
      groupName:"열정열정",
      memo:"열정만 있으면 됩니다",
      psnGname:'매일하는 그룹',
      tag:"#열정 #열정열정",
      member: 9,
      rate:"80%",
      videoUrl:'https://youtu.be/wOjnJYAn1uk',
      groupId:2
    },
    {
      friendName:"나림",
      groupName:"아자자자자",
      memo:"",
      rate:"100%",
      groupId:3
    },
    {
      friendName:"나림",
      groupName:"아자자자자",
      memo:"",
      rate:"100%",
    },
    {
      friendName:"나림",
      groupName:"아자자자자",
      memo:"",
      rate:"100%",
    },
  ];
  
  function Groupbox({groupList}){
    return (
      <Link to={`/groupMain/${groupList.groupId}`}
            state={{
                groupList : groupList
                }}>
        <div className="Groupbox" style={{marginBottom: '40px'}}>
          <p className="groupName">{groupList.groupName}</p>
          <p className="psnGname">{groupList.psnGname}</p>
          <p className="tag">{groupList.tag}</p>
          <p className="rate">출석률 {groupList.rate}</p>
        </div>
      </Link>
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
