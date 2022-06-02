import React,{useState} from 'react';
import './GroupMain.css';
import { useLocation,Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function GroupMain() {
  const location=useLocation()

  //groupId를 기준으로해서 코멘트 정보 가져오는 코드 짜기
  //groupId==location.state.groupList.groupId인 comment 가져올 것


  //현재 작성중인 댓글 정보 받기
  const[Content,setContent]=useState("");

  const onContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const onSubmit=(e)=>{
    e.preventDefault(); //본래 클릭 시 일어나는 모든 동작들을 막음


    const variables={
      groupId:location.state.groupList.groupId,
      content:Content,
      writer:'', //현재 로그인한 유저 아이디 저장
      postId:''
    }

    /*
    axios.post('/api/GroupMain/comment',variables)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)

                message.success('댓글을 성공적으로 업로드 했습니다!')

                setTimeout(()=>{
                  //댓글 전송 성공 시 알람 띄우는 페이지를 고민해봐야 할 것 같음
                    alert('댓글 남기기에 성공했습니다!')
                },3000);

            }else{
                alert('댓글 저장에 실패 했습니다')
            }
        })
    }*/
  }


  //기존 그룹 정보/그룹에 저장된 댓글 정보 받기
  const [GroupDetail,setGroupDetail]=useState([]);
  const [Comments,setComments]=useState([])

  //groupId를 보내서 해당 그룹 데이터를 가져옴
  const variable={groupId:location.state.groupList.groupId}

  /*
  useEffect(()=>{
    Axios.post('/api/group/getGroupDetail',variable)
    .then(response=>{
        if(response.data.success){
            setGroupDetail(response.data.GroupDetail)
        }else{
            alert('그룹 정보 가져오기 실패')
        }
    })

    Axios.post('/api/comment/getComments', variable)
    .then(response=>{
        if(response.data.success){
            setComments(response.data.comments)
        }else{
            alert('코멘트 정보 가져오기 실패')
        }
    })
}, [])*/
  

  const comments=[
    {
      groupId:0,
      content:'파이팅해요 저희',
      writer:'나림',
      postId:0,
    },
    {
      groupId:0,
      content:'우리 그룹이 최고당',
      writer:'나림',
      postId:1,
    },
    {
      groupId:0,
      content:'파이팅',
      writer:'나림',
      postId:2,
    },
    {
      groupId:0,
      content:'아자아자자',
      writer:'나림',
      postId:3,
    },
    {
      groupId:0,
      content:'오늘도 출석합니당',
      writer:'나림',
      postId:4,
    },
    {
      groupId:0,
      content:'운동운동운동',
      writer:'나림',
      postId:5,
    },
  ];


  //컴포넌트 명은 무조건 대문자로 시작해야 불러올 수 있음.! 잊지말자
  function CommentBox({comments}){
    console.log(comments)
    return(
      <div className="comment">
        <img src="../img/comment.png" style={{width:'100%'}} alt="comment">
        </img>
        <p className='commentContent'> {comments.content} </p>
      </div>
    )
  }


  
  //만약 로그인 된 유저가 접속한 GroupMain 페이지 그룹에 가입돼있으면 "출석부 보기" 버튼이 뜨고,
  //만약 로그인 된 유저가 접속한 GroupMain 페이지 그룹에 미가입돼있으면 "가입하기" 버튼이 뜨게 한다.
  const realButton=<input type='button' value='출석부 보기' className='showAttendance'/>; //우선 임시로 해두기 ...

  function ShowingButton(){
    return(
      <div>{realButton}</div>
    )
  }
/*
  //불러온 그룹정보에서 멤버 정보를 순회하며 로그인 된 유저가 해당 그룹에 가입되어있는지 확인한다.
  for (i=0, i<length.(GroupDetail.members), i++){
    if GroupDetail.members[i]==localStorage.getItem('userId'){
      realButton="<input type='button' value='출석부 보기' className='showAttendance'/>";
      break;
    }
    else{
      realButton="<input type='button' value='가입하기' className='showAttendance'/>";
    }
    }
    */
  return (

    
    //ExerciseRecording에서 가져온 body
    <body className='Recbody'> 
        <a href={`/`} >
            <img  className="RecLogo" src="../img/Logo2.png"></img>
            </a>
            <p className='RecHome'>Home</p>


        <p className='videoNameSt'>{location.state.groupList.VideoName}</p>
        <p className='groupNameSt'>{location.state.groupList.groupName}</p>
        <p className='groupMemberCount'>멤버수 {location.state.groupList.member} / 20명</p>
        <p className='groupMainRate'>출석률 {location.state.groupList.rate}</p>
        <p className='groupMainMemo'>{location.state.groupList.memo}</p>

        <ShowingButton />
        <Link to={`/exerciseRecording`}
            state={{
                groupId : location.state.groupList.groupId
                }}>
        <input type='button' value='운동 기록하기' className='recordingButton'/>
        </Link>

        <div className='exerciseVideo'>
          <ReactPlayer url={location.state.groupList.videoUrl} playing={false} controls={false}/>
        </div>

        <div className='commentBox'>
          {comments.map((comment)=>(<CommentBox comments={comment}/>))}
        </div>

        <hr className='line'/>
        <textarea className='commentInput' placeholder='텍스트를 입력하세요 (최대 15자)' onChange={onContentChange}></textarea>

        <input type='button' value='전송' onClick={onSubmit} className='commentSave'/> 
    </body>
  )
}

export default GroupMain
