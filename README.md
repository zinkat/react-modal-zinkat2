# react-modal-zinkat

> A customizable and reusable React modal component

[![NPM](https://img.shields.io/npm/v/react-modal-zinkat.svg)](https://www.npmjs.com/package/react-modal-zinkat) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-zinkat
```

## Usage

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal-zinkat'
import 'react-modal-zinkat/dist/index.css'

const App = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

    const handleEvent = () => {
    // This function is called during an event
    // It opens the modal to indicate information
    openModal();
  };

  return (
    <div>
      <button onClick={handleEvent}>Open</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} contentBtn="Close">
        {/* Modal content goes here */}
        Hello, this is my modal!
      </Modal>
    </div>
  );
};

export default App;
```
## Props

- `isOpen` (boolean): Controls whether the modal is open or closed.
- `onClose` (function): Callback function triggered when the modal is requested to be closed.
- `children` (node): Content of the modal.
- `contentBtn` (node): Button for closing the modal .


## License

MIT © [Zineb KATIM](https://github.com/Zineb KATIM)
