import { useState } from "react";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";

const UpdateForm = ({ item, showForm }: { item: any; showForm: any }) => {
  const [problemStatement, setProblemStatement] = useState({
    title: item.title,
    category: item.category,
    domain: item.domain,
    description: item.description,
  });

  function displayData() {
    console.log(problemStatement);
  }

  return (
    <>
      <Form
        className="w-100"
        style={{ display: showForm ? "block" : "none" }}
        onSubmit={displayData}
      >
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Domain</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Domain"
            value={problemStatement.domain}
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
            value={problemStatement.category}
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
            value={problemStatement.description}
            onChange={(e) =>
              setProblemStatement({
                ...problemStatement,
                description: e.target.value,
              })
            }
          />
        </Form.Group>
        <Button
          variant="primary"
          //type="submit"
          onClick={displayData}
        >
          Save Changes
        </Button>
      </Form>
    </>
  );
};
export default UpdateForm;
