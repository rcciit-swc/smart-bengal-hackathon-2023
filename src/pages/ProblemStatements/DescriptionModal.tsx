import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DescriptionModal({Desc,Show,Hide}:{Desc:string,Show:boolean,Hide:any}) {
//   const [show, setShow] = useState(false);

  

  return (
    <>
      <Modal style={{marginTop:"10vh"}} show={Show} onHide={Hide}>
        <Modal.Header closeButton>
          <Modal.Title>Problem Statement Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Desc}</Modal.Body>
      </Modal>
    </>
  );
}

export default DescriptionModal;
