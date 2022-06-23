import React,{useState,useEffect} from 'react'
import './SettingAccount.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';


function SettingAccount() {
    const[Nickname,setNickname]=useState("");
    const [nameErrorText, setNameErrorText] = useState('닉네임을 입력해주세요.');
    const [isLoading, setIsLoading] = useState(false);



    const onNickChange = (e) => {
        setNickname(e.currentTarget.value);
    };

    const validateName = () => {
        if (Nickname=="") {
          setNameErrorText('닉네임을 입력해주세요.');
        } else if (Nickname.length < 2) {
          setNameErrorText('닉네임은 최소 1자 이상입니다.');
        } else {
          setNameErrorText('');
        }
      };


      const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지
        console.log(Nickname)
        validateName(); // Input값 검증
        setTimeout(1000);
        console.log(nameErrorText)
        setIsLoading(true);
      };

      useEffect(() => {
          if (isLoading) {
            if (nameErrorText=='') {
                toast.success(`닉네임이 ${Nickname}(으)로 변경됐습니다!`,{
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true
                  }); //백엔드에 새로운 닉네임 보내주기
                setIsLoading(false);
            }
            else{
                toast.error(nameErrorText ,{
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true
                  });
                setIsLoading(false);
          }
        }
      }, [isLoading]);

  return (
      <body className='homebody'>
          <Link to="/">
              <div className="Homelogo">
                  <img src="img/Logo.png" width="100%" height="23px" alt="Logo"></img>
              </div>
          </Link>
          <div className="logout">
              <p style={{ color: '#FFFFFF' }}>Logout</p>
          </div>


          <input type='text' className='settingBox' value={'이메일'}></input>
          <input type='text' className='settingBox' placeholder='닉네임 변수 넣기' onChange={onNickChange}></input>

          <p className='settingText'>이메일</p>
          <p className='settingText'>닉네임</p>

          <input type='button' value='닉네임 변경' className='updateNic' onClick={handleSubmit}></input>
          <input type='button' value='탈퇴하기' className='delAccount'></input>

          <ToastContainer />

      </body>
  )
}

export default SettingAccount
