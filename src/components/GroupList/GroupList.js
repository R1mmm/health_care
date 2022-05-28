import React,{useState} from 'react'
import './GroupList.css'
import CreateGroupModal from '../ManagingRoutin/modals/CreateGroupModal';
import GroupRender from './GroupRender/GroupRender';


function Grouplist() {

    const sortOptions=[
        {value:0,label:"기본순"},
        {value:1,label:"가나다순"},
        {value:2,label:"최신순"},
    ]


    const groupList=[
        {
          VideoName:"하체운동",
          groupName:"그룹1",
          memo:"#등 #열심히",
          rate:"80%",
          member: 15,
          groupId:0
        },
        {
          VideoName:"등운동",
          groupName:"그룹200",
          memo:"#등 #열심히",
          rate:"80%",
          groupId:1
        },
        {
          VideoName:"매일20분홈트",
          groupName:"그룹300",
          memo:"#등 #열심히",
          rate:"80%",
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
        {
          friendName:"나림",
          groupName:"아자자자자",
          memo:"",
          rate:"100%",
        },
      
      ];

    const[sortOption,setSortOptions]=useState(0);

    const onSortOptionChange = (e) => {
        setSortOptions(e.currentTarget.value);
    };




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
            <a href={`/`} >
                <img  className="RecLogo" src="img/Logo2.png"></img>
            </a>
            <p className='RecHome'>Home</p>


            <input type='button' className='showMyGroup' value='내 그룹 보기'></input>

            <input type="text" className="GroupSearchBox" placeholder="검색어를 입력하세요"></input>
            <img className="GroupsearchLogo" src="img/search.png" alt="searchLogo"></img>


            <select className='sortSelector' onChange={onSortOptionChange}>
                  {sortOptions.map((item,index)=>(
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
            </select>


            <input type='button' onClick={openModal} value='내 그룹 만들기' className='makeGroup'></input>


        {/* 조건부 렌더링 : modalOpen 변수값에 따라 루틴만들기 팝업창 띄우기 */}
            {modalOpen ? (
          <CreateGroupModal show={modalOpen} onHide={closeModal}/>
            ):null}


            <GroupRender sort={sortOption} groupList={groupList}></GroupRender>
                
        </body>
    )
}

export default Grouplist