import { Button, Card, Container } from "react-bootstrap";
import { useDataContext } from "../../contexts/DataProvider";
import ProblemStatementModal from "../../components/AdminPortal/ProblemStatementModal";
import AddOrganisationModal from "../../components/AdminPortal/AddOrganisationModal";
import UpdateProblemStatementModal from "../../components/AdminPortal/UpdateProblemStatementModal";

const AdminPortal = () => {
  const { org } = useDataContext();

  return (
    <main
      className="w-100 d-flex flex-column justify-content-center align-items-center "
      style={{ backgroundColor: "var(--primary-color-light)" }}
    >
      <h1 className="fw-bold mt-3">Admin Portal</h1>
      <Container className="d-flex flex-row justify-content-center align-items-center flex-wrap mb-3">
        {org.map((item: any, index: any) => {
          return (
            <Card key={index} style={{ width: "300px", margin: "10px" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title className="fw-bold fs-2">{item.name}</Card.Title>
                <Card.Text>
                  <b>SPOC Name: </b>
                  {item.spocName}
                  <br />
                  <b>Email: </b>
                  {item.email}
                  <br />
                  <b>Phone No. : </b>
                  {item.mobileNumber}
                  <br />
                  <b>Problem Statements : </b>
                  {
                    item.problemStatements.length
                  }
                </Card.Text>
                <div className="d-flex flex-column gap-3 text-center">
                <ProblemStatementModal  org={item}  />
                <UpdateProblemStatementModal org={item} />
                </div>
                {/* <Button variant="primary">Add Problem Statement</Button> */}
              </Card.Body>
            </Card>
          );
        })}
        <Card style={{ width: "18rem",marginLeft:"10px" }}>
          <Card.Body className="text-center">
            <Card.Title className="fw-bold fs-3 text-center">
              Add Organisation
            </Card.Title>
            <AddOrganisationModal />
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
};

export default AdminPortal;
