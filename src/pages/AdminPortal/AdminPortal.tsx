import { Button, Card, Container } from "react-bootstrap";
import { useDataContext } from "../../contexts/DataProvider";
import ProblemStatementModal from "../../components/AdminPortal/ProblemStatementModal";

const AdminPortal = () => {
  const { org } = useDataContext();

  return (
    <main
      className="w-100 d-flex flex-column justify-content-center align-items-center "
      style={{ backgroundColor: "var(--primary-color-light)" }}
    >
      <h1 className="fw-bold">Admin Portal</h1>
      <Container className="d-flex flex-row justify-content-center align-items-center flex-wrap">
        {org.map((item: any, index: Number) => {
          return (
            <Card
              style={{ width: "18rem", margin: "10px",  }}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title
                className="fw-bold fs-2"
                >{item.name}</Card.Title>
                <Card.Text>
                  <b>SPOC Name: </b>{item.spocName}
                  <br />
                  <b>Email: </b>{item.email}
                  <br />
                  <b>Phone No. : </b>{item.mobileNumber}
                </Card.Text>
                <ProblemStatementModal org={item}/>
                {/* <Button variant="primary">Add Problem Statement</Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </main>
  );
};

export default AdminPortal;
