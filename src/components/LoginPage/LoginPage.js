//import { Button } from 'bootstrap';
import React,{useEffect,useState,useHistory} from 'react'
import './LoginPage.css'

function LoginPage() {

    return (
        <div>
            <img src='./img/LoginLogo.png' alt='LoginLogo' className='LoginLogo'></img>
            <p className='guide'>SNS계정으로 간편하게 로그인 하기</p>

            <input type='button'className="btnKakao"></input>
        
        </div>
    )
}

export default LoginPage
