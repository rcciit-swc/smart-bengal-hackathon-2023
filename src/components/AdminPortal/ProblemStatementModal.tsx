import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../contexts/Data";
import { useDataContext } from "../../contexts/DataProvider";
import { db } from "../../firebase";

function ProblemStatementModal({ org }: { org: any }) {
  const { addProblemStatement } = useDataContext();
  const { ps } = useData();
  const [show, setShow] = useState(false);

  const [problemStatement, setProblemStatement] = useState({
    psNumber: "",
    title: "",
    category: "",
    domain: "",
    description: "",
    applicableFor: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addProblemStatement(org.id, problemStatement);
    setShow(false);
    setProblemStatement({
      psNumber: "",
      title: "",
      category: "",
      domain: "",
      description: "",
      applicableFor: "",
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-100 text-center">
        <Button variant="primary" onClick={handleShow}>
          Add problem Statement
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "2vh" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add problem Statement</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            overflow: "scroll",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Problem Statement No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Problem Statement No."
                autoFocus
                value={problemStatement.psNumber}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    psNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Problem Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Problem Title"
                autoFocus
                value={problemStatement.title}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={problemStatement.category}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    category: e.target.value,
                  })
                }
              >
                <option value="">Select Category</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Hybrid">Hybrid</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Domain</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={problemStatement.domain}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    domain: e.target.value,
                  })
                }
              >
                <option value="">Select Domain</option>
                {ps.domainBucket.map((p: any) => {
                  return <option value={p}>{p}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Background/Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={problemStatement.description}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={problemStatement.applicableFor}
                onChange={(e) =>
                  setProblemStatement({
                    ...problemStatement,
                    applicableFor: e.target.value,
                  })
                }
              >
                <option value="">Select Category</option>
                <option value="SBH Senior">SBH Senior</option>
                <option value="SBH Junior">SBH Junior</option>
                <option value="SBH Senior/Junior">SBH Senior/Junior</option>
              </Form.Select>
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

export default ProblemStatementModal;
