import React from 'react'
import './Managingfriend.css'

function Managingfriend() {

/*
  const [FriendList,setFriendList]=useState([])
    useEffect(()=>{

        const user={
          //userFrom : 백엔드에서 user 참조하는 변수
            userFrom:localStorage.getItem('userId')
        }
        axios.post('/api/video/getFriendList',user)
        .then(response =>{
            if(response.data.success){
                console.log(response.data)
                setFriendList(response.data.백엔드에서 친구DB)
            }else{
                alert('친구 정보 가져오기 실패')
            }
        })
    },[])

    => FriendList에 친구DB 저장됨.

    */
  const friendList=[
      {
        friendName:"조소연",
        groupName:"그룹1",
        memo:"#등 #열심히",
        rate:"80%",
      },
      {
        friendName:"양경훈",
        groupName:"그룹1",
        memo:"운동 열심히",
        rate:"90%",
      },
      {
        friendName:"이하늘",
        groupName:"아자자자자",
        memo:"공부시러",
        rate:"80%",
      },
      {
        friendName:"나림",
        groupName:"아자자자자",
        memo:"",
        rate:"100%",
      }
    ];
    
  function Friendbox({ friendList }) {
    return (
      <a href={`/exerciseGroup`} >
        <div className="friendBox" style={{ marginBottom: '30px' }}>
          <p className="Mrate">출석률     {friendList.rate}</p>
          <p className="MfriendName">{friendList.friendName}</p>
          <p className="MgroupName">{friendList.groupName}</p>
          <p className="Mmemo">{friendList.memo}</p>
        </div>
      </a>
    )
  }
      
  return (
    <body className='Recbody'>
      <a href={`/`} >
        <img className="RecLogo" src="img/Logo2.png"></img>
      </a>
      <a href={`/`} >
        <p className='RecHome'>Home</p>
      </a>


      <input type="text" className="searchBox" placeholder="아이디로 친구 맺기"></input>
      <img className="searchLogo" src="img/search.png" alt="searchLogo"></img>

      <div className='boxdiv'>
        {friendList.map((friend)=>(<Friendbox friendList={friend}/>))}
      </div>

    </body>
  )
}

export default Managingfriend
