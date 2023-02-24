import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import UpdateForm from "./UpdateForm";

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

  const [showForm, setShowForm] = useState(false);

  const [showDetails, setShowDetails] = useState(true);

  const [updateData, setupdateData] = useState({
    title: "test",
    category: "test",
    domain: "test",
    description: "test",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function setEdit(item: any) {
    setupdateData({
      ...updateData,
      title: item.title,
      category: item.category,
      domain: item.domain,
      description: item.description,
    });
  }

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
                <div style={{ display: showDetails ? "block" : "none" }}>
                  <Col
                    className="d-flex flex-column p-3 my-3"
                    style={{
                      display: showDetails ? "block" : "none",
                      border: "1px solid black",
                      borderRadius: "10px",
                    }}
                    key={index}
                  >
                    <div
                      className="w- 100 d-flex flex-row justify-content-between align-items-center"
                      style={{ display: showDetails ? "block" : "none" }}
                    >
                      <span className="fw-bold fs-4">
                        Problem Statement {index + 1}
                      </span>
                      <img
                        className="edit-icon"
                        style={{ display: showDetails ? "block" : "none" }}
                        src="https://img.icons8.com/ios/50/000000/edit-file.png"
                        alt="edit"
                        onClick={() => {
                          setEdit(item);
                          setShowForm(!showForm);
                          setShowDetails(!showDetails);

                          setPsindex(index);
                        }}
                      />
                    </div>

                    <Col
                      className="flex-column "
                      style={{ display: showDetails ? "flex" : "none" }}
                    >
                      <span>
                        <b>Problem Statement Title: </b>
                        {item.title}
                      </span>
                      <span>
                        <b>Domain: </b>
                        {item.domain}
                      </span>
                      <span>
                        <b>Category: </b>
                        {item.category}
                      </span>
                      <p>
                        <b>Problem Statement Description: </b>
                        {item.description}
                      </p>
                    </Col>
                  </Col>
                </div>
              );
            })}
            <UpdateForm item={updateData} showForm={showForm} />
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateProblemStatementModal;
