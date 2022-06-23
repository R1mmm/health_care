import React from 'react';
import './ExerciseGroup.css';
import {Link} from 'react-router-dom';

function ExerciseGruop() {

  function newPage(e){
    window.location.href='/exerciseRecording'
  }
  return (
    <body className='homebody'>
        <Link to="/">
            <div className="esclogo">
            <img src="img/Logo.png" width="100%" height="23px" ></img>
            </div>
          </Link>
            <p className='logout'>Logout</p>

      <div className='box'>
            
        <Link to="/exerciseRecording">
          <input type='button' onClick={newPage} value='기록하기' className='record'></input>
        </Link>
      </div>
  
    </body>
  )
}

export default ExerciseGruop
