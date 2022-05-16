import React,{useState} from 'react'
import './ExerciseRecording.css'
import axios from 'axios'
//import styled from 'styled-components;'


let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
let time = {
  year: today.getFullYear(),  //현재 년도
  month: today.getMonth() + 1, // 현재 월
  date: today.getDate(), // 날짜
  hours: today.getDay(), //현재 요일
};
let arrDayStr = ['일','월','화','수','목','금','토'];

let timestring = `${time.year}년 ${time.month}월 ${time.date}일 ${arrDayStr[time.date-1]}요일`;

function ExerciseRecording() {

  //현재 로그인된 유저 정보 / 그룹명+영상제목+태그도 함께보내줘야함
  const[Kcal,setKcal]=useState("");
  const[Time,setTime]=useState("");
  const[RepTime,setRepTime]=useState("");
  const[Content,setContent]=useState("");
  const[Image,setImage]=useState([]);


  const onKcalChange = (e) => {
    setKcal(e.currentTarget.value);
  };

  const onTimeChange = (e) => {
    setTime(e.currentTarget.value);
  };

  const onRepTimeChange = (e) => {
    setRepTime(e.currentTarget.value);
  };

  const onContentChange = (e) => {
    setContent(e.currentTarget.value);
  };


  const addImage=(e)=>{
    const nowSelectImageList=e.target.files;
    const nowImageURLList=[...Image];
    for (let i=0; i<nowSelectImageList.length; i++){
      const nowImageURL=URL.createObjectURL(nowSelectImageList[i]);

      nowImageURLList.push(nowImageURL);
    }

    setImage(nowImageURLList);
  }

  const onSubmit=(e)=>{
    e.preventDefault(); //본래 클릭 시 일어나는 모든 동작들을 막음


    const variables={
      date: timestring,
      kcal: Kcal,
      time: Time,
      repTime: RepTime,
      content: Content
    }

    alert(`${Kcal}+${Time}`)
    /*const variables={
    }
    axios.post('/api/video/ExerciseRecording',variables)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)

                message.success('성공적으로 업로드 했습니다!')

                setTimeout(()=>{
                    props.history.push('/exerciseFinish')
                },3000);

            }else{
                alert('기록 저장에 실패 했습니다')
            }
        })
    }*/
  }





  return (
    <body className='Recbody'>
      <a href={`/`} >
            <img  className="RecLogo" src="img/Logo2.png"></img>
          </a>
            <p className='RecHome'>Home</p>



        <div>
            <p className='RecGname'>그룹명</p>
            <p className='RecDate'>{timestring}</p>
            <p className='recKal'>칼로리</p> <input className='RecCalVal' onChange={onKcalChange}></input> 
            <p className='RecTime'>소요 시간</p> <input className='RecTimeVal' onChange={onTimeChange}></input> 
            <p className='RecRep'>반복 횟수</p> <input className='RecRepVal' onChange={onRepTimeChange}></input> 
        </div>


        <div class="picFile">
          <label for="ex_file" onChange={addImage}>사진 추가하기</label>
          <input type="file" multiple="multiple" id="ex_file" accept='.jpg,.jpeg,.png'/>
        </div>

        <p className='RecTag'>영상 제목,   #전신 유산소 #칼로리 #다이어트</p> 

        <textarea className='RecText' placeholder='텍스트를 입력하세요' onChange={onContentChange}></textarea>


        <input type='button' value='저장하기' onClick={onSubmit} className='saveButton'> 
          
        </input>
    </body>
  )
}

export default ExerciseRecording
