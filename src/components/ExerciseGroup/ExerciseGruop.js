import React from 'react'
import './ExerciseGroup.css'

function ExerciseGruop() {

  function newPage(e){
    window.location.href='/exerciseRecording'
  }
  return (
    <body className='homebody'>
        <a href={`/`} >
            <div className="esclogo">
            <img src="img/Logo.png" width="100%" height="23px" ></img>
            </div>
          </a>
            <p className='logout'>Logout</p>

      <div className='box'>
            
        <a href='/exerciseRecording'>
          <input type='button' onClick={newPage} value='기록하기' className='record'></input>
        </a>
      </div>
  
    </body>
  )
}

export default ExerciseGruop
