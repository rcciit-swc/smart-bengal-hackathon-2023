import { Button, Card, Container } from "react-bootstrap";
import { useDataContext } from "../../contexts/DataProvider";
import ProblemStatementModal from "../../components/AdminPortal/ProblemStatementModal";
import AddOrganisationModal from "../../components/AdminPortal/AddOrganisationModal";
import UpdateProblemStatementModal from "../../components/AdminPortal/UpdateProblemStatementModal";
import SponsorModal from "../../components/AdminPortal/SponsorModal";
import { useAuth } from "../../contexts/Auth";

const AdminPortal = () => {
  const { org, getSponsors } = useDataContext();
  const { logOut } = useAuth();

  // useEffect(() => {
  //   async function fetchSponsors() {
  //     await getSponsors();
  //   }
  //   fetchSponsors();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main
      className="w-100 d-flex flex-column justify-content-center align-items-center "
      style={{ backgroundColor: "var(--primary-color-light)" }}
    >
      <h1 className="fw-bold mt-3">Admin Portal</h1>
      <Container className="d-flex flex-row justify-content-center align-items-center flex-wrap mb-3">
        {org.map((item: any, index: any) => {
          return (
            <Card
              key={index}
              style={{
                width: "300px",
                height: "auto",
                margin: "10px",
                backgroundColor: "var(--primary-color-light)",
              }}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body className="d-flex flex-column justify-content-evenly align-items-center">
                <Card.Title className="fw-bold fs-2">{item.name}</Card.Title>
                <Card.Text>
                  <b>Problem Statements : </b>
                  {item.problemStatements.length}
                </Card.Text>
                <div className="d-flex flex-column gap-3 text-center">
                  <ProblemStatementModal org={item} />
                  <UpdateProblemStatementModal org={item} />
                </div>
              </Card.Body>
            </Card>
          );
        })}

        {/* Add Sponsor */}
        <Card
          style={{
            width: "18rem",
            height: "15rem",
            marginLeft: "10px",
          }}
        >
          <Card.Body className="text-center d-flex flex-column justify-content-evenly">
            <Card.Title className="fw-bold fs-3 text-center">
              Add Sponsor
            </Card.Title>
            <SponsorModal />
          </Card.Body>
        </Card>

        {/* Add Organization */}
        <Card
          style={{
            width: "18rem",
            height: "15rem",
            marginLeft: "10px",
          }}
        >
          <Card.Body className="text-center d-flex flex-column justify-content-evenly">
            <Card.Title className="fw-bold fs-3 text-center">
              Add Organisation
            </Card.Title>
            <AddOrganisationModal />
          </Card.Body>
        </Card>
      </Container>
      <Button variant="danger" onClick={logOut} className="mb-5">
        Logout
      </Button>
    </main>
  );
};

export default AdminPortal;
