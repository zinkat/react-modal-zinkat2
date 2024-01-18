import React from 'react';
import PropTypes from 'prop-types';
import modalStyles from './modal.module.css';

const Modal = ({ isOpen, onClose, children, contentBtn }) => {
  const modalClasses = `${modalStyles['modal-overlay']} ${isOpen ? modalStyles.open : ''}`;
  const contentClasses = `${modalStyles['modal-content']} ${isOpen ? modalStyles.open : ''}`;

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        <div className={modalStyles['close-icone']}>
          <button onClick={onClose} className={modalStyles.icone}>
            &times;
          </button>
        </div>

        {children}
        <button onClick={onClose} className={modalStyles['close-btn']}>
          {contentBtn}
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  contentBtn: PropTypes.node.isRequired,
};

export default Modal;
