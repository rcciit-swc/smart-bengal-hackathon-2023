import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDataContext } from "../../contexts/DataProvider";

function AddOrganisationModal() {
  const [show, setShow] = useState(false);

    const { addOrganisation } = useDataContext();

  const [organisation, setOrganisation] = useState({
    name: "",
    spocName: "",
    email: "",
    mobileNumber: "",
    problemStatements: [],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addOrganisation(organisation);
    setShow(false);
    setOrganisation({
        name: "",
        spocName: "",
        email: "",
        mobileNumber: "",
        problemStatements: [],
    });
    };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <img
          src="https://img.icons8.com/ios-filled/108/null/plus-2-math.png"
          alt="addOrg"
        />
      </Button>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "10vh" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Organisation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organisation Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Organisation Name"
                autoFocus
                value={organisation.name}
                onChange={(e) =>
                  setOrganisation({ ...organisation, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organisation Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Organisation Email"
                value={organisation.email}
                onChange={(e) =>
                  setOrganisation({ ...organisation, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organisation Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Organisation Phone"
                value={organisation.mobileNumber}
                onChange={(e) =>
                  setOrganisation({
                    ...organisation,
                    mobileNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>SPOC Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter SPOC Name"
                value={organisation.spocName}
                onChange={(e) =>
                  setOrganisation({ ...organisation, spocName: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddOrganisationModal;
