import "./ProblemStatements.style.css";
import { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import { useData } from "../../contexts/Data";
import { useDataContext } from "../../contexts/DataProvider";
import DescriptionModal from "./DescriptionModal";

const ProblemStatements = () => {
  const { ps } = useData();
  const { org } = useDataContext();

  const [show, setShow] = useState(false);
  const modalData = useRef("");

  return (
    <main className="d-flex flex-column align-items-center my-5">
      <div
        style={{ color: "var(--heading-color)" }}
        className="d-flex flex-row fw-bold fs-1"
      >
        <span className="text-uppercase">problem statements</span>
      </div>
      <div
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
          <span className="fs-2 fw-bold">11</span>
          <span className="text-capitalize">software</span>
        </div>
        <div className="d-flex flex-column soft-background">
          <span className="fs-2 fw-bold">4</span>
          <span className="text-capitalize">hybrid</span>
        </div>
      </div>

      <div className="my-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Organization</th>
              <th>Problem Statement Title</th>
              <th>Category</th>
              <th>PS Number</th>
              <th>Domain Bucket</th>
            </tr>
          </thead>
          <tbody>
            {/* {org &&
              org?.map((item: any, index: any) =>
                item?.problemStatements?.map((data: any, indexing: any) => (
                  <tr>
                    <td>{indexing + 1}</td>
                    <td className="w-25">{item.name}</td>
                    <td className="w-25">{data.psTitle}</td>
                    <td>{data.category}</td>
                    <td>{data.psNumber}</td>
                    <td className="w-25">{data.domainBucket}</td>
                  </tr>
                ))
              )} */}
            {ps.organization.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td className="w-25">{item}</td>
                    <td
                      className="w-25"
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        textDecoration: "underline",
                      }}
                      onClick={() => {
                        setShow(true);
                        modalData.current = ps.problemStatementDesc[index];
                      }}
                    >
                      {ps.problemStatementTitle[index]}
                    </td>
                    <td>{ps.category[index]}</td>
                    <td>{ps.psNumber[index]}</td>
                    <td className="w-25">{ps.domainBucket[index]}</td>
                  </tr>
                  <DescriptionModal
                    Desc={modalData.current}
                    Show={show}
                    Hide={() => setShow(false)}
                  />
                </>
              );
            })}
          </tbody>
        </Table>
        {/* Problem statements will be available soon */}
      </div>
    </main>
  );
};

export default ProblemStatements;
