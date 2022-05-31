import React ,{useState}from 'react'
import './modal.css';


const GoalDayOptions=[
  {value:0,label:"주 1회"},
  {value:1,label:"주 2회"},
  {value:2,label:"주 3회"},
  {value:3,label:"주 4회"},
  {value:4,label:"주 5회"},
  {value:5,label:"주 6회"},
  {value:6,label:"주 7회"},
]

const SetRepOptions=[
  {value:0,label:"1회"},
  {value:1,label:"2회"},
  {value:2,label:"3회"},
  {value:3,label:"4회"},
  {value:4,label:"5회"},
]

function CreateGroupModal ({show,onHide}){

  //현재 로그인된 유저 정보 / 그룹명+영상제목+태그도 함께보내줘야함
  const[RoutinName,setRoutinName]=useState("");
  const[VideoName,setVideoName]=useState("");
  const[VideoLink,setVideoLink]=useState("");
  const[RoutinContent,setRoutinContent]=useState("");
  const[GoalDay,setGoalDay]=useState(0); //주 1회면 0, 주2회면 1 ...
  const[SetRep,setSetRep]=useState(0);

  const onRoutinNameChange = (e) => {
    setRoutinName(e.currentTarget.value);
  };

  const onVideoNameChange = (e) => {
    setVideoName(e.currentTarget.value);
  };

  const onVideoLinkChange = (e) => {
    setVideoLink(e.currentTarget.value);
  };

  const onRoutinContentChange = (e) => {
    setRoutinContent(e.currentTarget.value);
  };

  const onGoalDayChange= (e) => {
    setGoalDay(e.currentTarget.value);
  };

  const onSetRepChange= (e) => {
    setSetRep(e.currentTarget.value);
  };


  const onSubmit=(e)=>{
    e.preventDefault(); //본래 클릭 시 일어나는 모든 동작들을 막음



    const variables={
      routinName: RoutinName,
      videoName: VideoName,
      videoLink: VideoLink,
      routinContent: RoutinContent,
      goalday: GoalDay,
      setRep: SetRep
    }

    alert(variables.routinName)

    /*const variables={
    }
    axios.post('/api/video/ExerciseRecording',variables)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)

                message.success('성공적으로 그룹을 생성했습니다!')

                setTimeout(()=>{
                    props.history.push('/exerciseFinish')
                },3000);

            }else{
                alert('그룹 생성에 실패 했습니다')
            }
        })
    }*/
  }


  const open={show}
  
  return (

    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <button className="close" onClick={onHide}>
              &times;
            </button>
          <main>
            <h2 className='makeRoutin'>그룹 만들기 </h2>

            <p className='text'>그룹명</p>
            <input type="text" className='routinName' style={{width: '500px' ,
  height: '36px'}} onChange={onRoutinNameChange}></input>

            <div className='clearfix'>
              <div style={{float:'left' ,marginRight:'35px'}}>
                <p className='text'>운동 영상 제목</p>
                <input type="text" className='routinName' onChange={onVideoNameChange} style={{width: '230px' ,
      height: '36px'}}></input>
              </div>

              <div style={{float:'left'}}>
              <p className='text'>영상 링크</p>
              <input type="text" className='routinName' onChange={onVideoLinkChange} style={{width: '230px' ,
      height: '36px'}}></input>
              </div>
            </div>

            <div className='clearfix'>
              <div style={{float:'left' ,marginRight:'35px'}}>
                <p className='text'>목표 운동 요일</p>
                <select style={{position:'relative' , left:'96px' ,outline:'none', border:'none' , color:'#FF855E'}} onChange={onGoalDayChange}>
                  {GoalDayOptions.map((item,index)=>(
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>

              <p className='text'>세트 반복 횟수</p>
              <select style={{position:'relative' , left:'100px' ,outline:'none', border:'none', color:'#FF855E'}} onChange={onSetRepChange}>
                  {SetRepOptions.map((item,index)=>(
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
                </select>
            </div>

            <p className='text'>그룹 설명</p>

            <textarea className='RecText2' onChange={onRoutinContentChange} placeholder='텍스트를 입력하세요' ></textarea>

            <input type='button' value='만들기' className='submit' onClick={onSubmit} /> 
            
          </main>
        </section>
      ) : null}
    </div>
    /*<>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>*/
  )
}

export default CreateGroupModal
