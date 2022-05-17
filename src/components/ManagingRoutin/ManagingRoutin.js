import React,{useState} from 'react';
import './ManagingRoutin.css';
import CreateGroupModal from './modals/CreateGroupModal';


function ManagingRoutin() {

  const routinList=[
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
    }
  ];
  function RoutinBox({ routinList }) {
    return (
      <a href={`/exerciseGroup`} style={{margin:"10px 30px 25px 0px"}}>
        <div className="routinBox" >
          <p className="Mrate">출석률     {routinList.rate}</p>
          <p className="MfriendName">{routinList.friendName}</p>
          <p className="MgroupName">{routinList.groupName}</p>
          <p className="Mmemo">{routinList.memo}</p>
        </div>
      </a>
    )
  }


  const [modalOpen, setModalOpen] = useState(false);


  const openModal=()=>{
    setModalOpen(true)
  };

  const closeModal=()=>{
    setModalOpen(false)
  };


  return (
    
    <>

  
      <body className='Recbody'>

        <a href={`/`}>
          <img className="RecLogo" src="img/Logo2.png"></img>
        </a>
        <a href={`/`} >
          <p className='RecHome'>Home</p>
        </a>

        <input type='button' onClick={openModal} value='새로 만들기' className='createNew'></input>

        
        {modalOpen ? (
          <CreateGroupModal show={modalOpen} onHide={closeModal}/>
        ):null}
        <div className='routindiv'>
          {routinList.map((routin)=>(<RoutinBox routinList={routin}/>))}
        </div>


      </body>




    </>
  )
}

export default ManagingRoutin
