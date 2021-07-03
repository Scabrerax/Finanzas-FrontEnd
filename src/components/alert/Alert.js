import React, { } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModal } from '../../actions/modal';
import './alert.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const Alert = () => {

  const { modalOpen } = useSelector(state => state.modal);

  const { modalMsg } = useSelector(state => state.modalMsg)

  const dispatch = useDispatch();

  const ccloseModal = () => {
    dispatch(CloseModal())
  }

  return (
    <div className="modal">
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={handleAfterOpenFunc}
        onRequestClose={ccloseModal}
        style={customStyles}
        // closeTimeoutMS={5000}
        contentLabel="Example Modal"
      >
        <h4>{modalMsg}</h4>
        <button onClick={ccloseModal} className="button">cerrar</button>
      </Modal>
    </div>
  )
}
