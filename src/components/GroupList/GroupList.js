import React,{useState} from 'react'
import './GroupList.css'
import CreateGroupModal from '../ManagingRoutin/modals/CreateGroupModal';
import GroupRender from './GroupRender/GroupRender';
import {Link} from 'react-router-dom'


function Grouplist() {

    // const sortOptions=[
    //     {value:0,label:"기본순"},
    //     {value:1,label:"가나다순"},
    //     {value:2,label:"최신순"},
    // ]


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

    // const[sortOption,setSortOptions]=useState(0);

    // const onSortOptionChange = (e) => {
    //     setSortOptions(e.currentTarget.value);
    // };




    const [modalOpen, setModalOpen] = useState(false);


    const openModal=()=>{
        setModalOpen(true)
    };

    const closeModal=()=>{
        setModalOpen(false)
    };

    return (
        <body className='Recbody'> 
        {/* ExerciseRecording에서 가져온 레이아웃 */}
          <Link to="/">
                <img  className="RecLogo" src="img/Logo2.png"></img>
            </Link>
            <Link to="/">
              <p className='RecHome'>Home</p>
            </Link>


            <input type='button' className='showMyGroup' value='내 그룹 보기'></input>

            <input type="text" className="GroupSearchBox" placeholder="검색어를 입력하세요"></input>
            <img className="GroupsearchLogo" src="img/search.png" alt="searchLogo"></img>


            {/* <select className='sortSelector' onChange={onSortOptionChange}>
                  {sortOptions.map((item,index)=>(
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
            </select> */}


            <input type='button' onClick={openModal} value='그룹 만들기' className='makeGroup'></input>


        {/* 조건부 렌더링 : modalOpen 변수값에 따라 루틴만들기 팝업창 띄우기 */}
            {modalOpen ? (
          <CreateGroupModal show={modalOpen} onHide={closeModal}/>
            ):null}


            <GroupRender groupList={groupList}></GroupRender>
                
        </body>
    )
}

export default Grouplist
