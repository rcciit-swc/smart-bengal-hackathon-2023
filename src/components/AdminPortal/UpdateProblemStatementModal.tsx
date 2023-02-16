import { truncate } from "fs/promises";
import { useState } from "react";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";

const UpdateProblemStatementModal = ({ org }: { org: any }) => {
  const [show, setShow] = useState(false);

  const [problemStatement, setProblemStatement] = useState({
    title: "",
    category: "",
    domain: "",
    description: "",
  });

  const [prevProblemStatement, setPrevProblemStatement] = useState({
    title: "",
    category: "",
    domain: "",
    description: "",
  });

  const [psindex, setPsindex] = useState(0);

  const [showForm,setShowForm] = useState(false);

  const [showDetails,setShowDetails] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Update Problem Statement
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Problem Statement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {org.problemStatements.map((item: any, index: any) => {
              return (
                <Col className="d-flex flex-column p-3 my-3"
                style={{border:"1px solid black",borderRadius:"10px"}}
                key={index}
                >
                  <div className="w- 100 d-flex flex-row justify-content-between align-items-center">
                    <span className="fw-bold fs-4">
                      Problem Statement {index + 1}
                    </span>
                    <img
                    className="edit-icon"
                    style={{ display: showDetails ? "block" : "none" }}
                      src="https://img.icons8.com/ios/50/000000/edit-file.png"
                      alt="edit"
                      onClick={() => {setShowForm(!showForm)
                      setShowDetails(!showDetails)
                      setPsindex(index)
                      }}
                    />
                  </div>
                  
                    <Form
                      className="w-100"
                      style={{ display: showForm ? "block" : "none" }}
                    >
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problem Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Problem Title"
                          autoFocus
                          value={item.title}
                          onChange={(e) =>
                            setProblemStatement({
                              ...problemStatement,
                              title: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Domain</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Domain"
                          value={item.domain}
                          onChange={(e) =>
                            setProblemStatement({
                              ...problemStatement,
                              domain: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Category"
                          value={item.category}
                          onChange={(e) =>
                            setProblemStatement({
                              ...problemStatement,
                              category: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Problem Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={item.description}
                          onChange={(e) =>
                            setProblemStatement({
                              ...problemStatement,
                              description: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                    <Col className="flex-column "
                    style={{display:showDetails ? "flex" : "none"}}
                    >
                    <span><b>Problem Statement Title: </b>{item.title}</span>
                    <span><b>Domain: </b>{item.domain}</span>
                    <span><b>Category: </b>{item.category}</span>
                    <p><b>Problem Statement Description: </b>{item.description}</p>
                  </Col>
                </Col>
              );
            })}
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateProblemStatementModal;
