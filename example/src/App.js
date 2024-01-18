import React from 'react'
import Modal from 'react-modal-zinkat'
//import { ExampleComponent } from 'react-modal-zinkat'
import 'react-modal-zinkat/dist/index.css'
import { useState } from 'react'



const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

    const handleEvent = () => {
  
    openModal();
  };
  return <div>
  <button onClick={handleEvent}>Open</button>
  <Modal isOpen={isModalOpen} onClose={closeModal} contentBtn="Close">
    {/* Modal content goes here */}
    Hello, this is my modal!
  </Modal>
</div>
}

export default App
