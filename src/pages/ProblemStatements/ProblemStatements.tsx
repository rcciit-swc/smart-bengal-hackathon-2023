import "./ProblemStatements.style.css";
import Table from "react-bootstrap/Table";
import { useData } from "../../contexts/Data";

const ProblemStatements = () => {
  const { ps } = useData();
  return (
    <main className="d-flex flex-column align-items-center my-5">
      <div
        style={{ color: "var(--heading-color)" }}
        className="d-flex flex-row fw-bold fs-1"
      >
        <span className="text-uppercase">problem statements</span>
      </div>
      {/* <div
        style={{
          backgroundColor: "var(--primary-color)",
          borderRadius: "20px",
          color: "var(--invert-color  )",
        }}
        className="w-75 d-flex total-statements-container p-4 justify-content-between"
      >
        <div className="d-flex flex-column">
          <span
            style={{ color: "var(--heading-color)" }}
            className="text-uppercase fw-bold fs-2"
          >
            total statements
          </span>
          <span className="text-capitalize">as per available data</span>
        </div>
        <div className="d-flex flex-column soft-background">
          <span className="fs-2 fw-bold">459</span>
          <span className="text-capitalize">software</span>
        </div>
        <div className="d-flex flex-column soft-background">
          <span className="fs-2 fw-bold">104</span>
          <span className="text-capitalize">hardware</span>
        </div>
      </div> */}
      <div className="my-5">
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Organization</th>
              <th>Problem Statement Title</th>
              <th>Category</th>
              <th>PS Number</th>
              <th>Submitted Idea(s) Count</th>
              <th>Domain Bucket</th>
            </tr>
          </thead>
          <tbody>
            {ps.organization.map((item, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td colSpan={2}>{item}</td>
                  <td>{ps.category[index]}</td>
                  <td>{ps.psNumber[index]}</td>
                  <td>{ps.submittedIdeasCount[index]}</td>
                  <td>{ps.domainBucket[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
        Problem statements will be available soon
      </div>
    </main>
  );
};

export default ProblemStatements;
