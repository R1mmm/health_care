import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import './modal.css';

function CreateGroupModal ({show,onHide}){


  const open={show}
  const header="냐냐냐안녕하새융"
  console.log('안녕하세요')
  
  return (

    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <button className="close" onClick={onHide}>
              &times;
            </button>
          <main>
            <p className='makeRoutin'>루틴 만들기 </p>

            <p className='text'>루틴명</p>
            <input type="text" className='routinName'></input>

            
            <p className='text'>운동 영상 제목</p>

            <p className='text'>영상 링크</p>
            <p className='text'>목표 운동 요일</p>

            <p className='text'>세트 반복 횟수</p>
            <p className='text'>루틴설명</p>

            <textarea className='RecText2' placeholder='텍스트를 입력하세요' ></textarea>

            
          </main>
          <footer>
            <button className="close" onClick={onHide}>
              close
            </button>
          </footer>
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
