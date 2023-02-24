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
  const [orgName, setOrgName] = useState("");
  const [modalData, setModalData] = useState({});

  let sno = 1;
  let softwareCount = 0;
  let hybridCount = 0;

  for (let i = 0; i < org.length; i++) {
    for (let j = 0; j < org[i].problemStatements.length; j++) {
      if (org[i].problemStatements[j].category === "Software") {
        softwareCount++;
      } else if (org[i].problemStatements[j].category === "Hybrid") {
        hybridCount++;
      }
    }
  }

  return (
    <main className="d-flex flex-column align-items-center my-5 w-100">
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
          <span className="fs-2 fw-bold">{softwareCount}</span>
          <span className="text-capitalize">software</span>
        </div>
        <div className="d-flex flex-column soft-background">
          <span className="fs-2 fw-bold">{hybridCount}</span>
          <span className="text-capitalize">hybrid</span>
        </div>
      </div>
      <div className="w-100">
        <Table
          striped
          bordered
          responsive
          className={"my-5"}
          style={{ width: "75%", margin: "0 auto" }}
        >
          <thead>
            <tr className="text-center">
              <th>S.No.</th>
              <th>Organization</th>
              <th>Problem Statement Title</th>
              <th>PS Number</th>
              <th>Category</th>
              <th>Domain Bucket</th>
              <th>Applicable For</th>
            </tr>
          </thead>
          <tbody>
            {org &&
              org?.map((item: any, index: any) =>
                item?.problemStatements?.map((data: any, indexing: any) => {
                  return (
                    <>
                      <tr key={indexing}>
                        <td className="text-center">{sno++}</td>
                        <td className="w-25">{item.name}</td>
                        <td
                          className="w-25 text-center"
                          style={{
                            cursor: "pointer",
                            color: "blue",
                          }}
                          onClick={() => {
                            setShow(true);
                            setModalData(data);
                            setOrgName(item.name);
                          }}
                        >
                          {data.title}
                        </td>
                        <td className="text-center">{data.psNumber}</td>
                        <td className="text-center">{data.category}</td>
                        <td className="w-25 text-center">{data.domain}</td>
                        <td className="text-center">{data.applicableFor}</td>
                      </tr>
                    </>
                  );
                })
              )}
            <DescriptionModal
              OrgName={orgName}
              Ps={modalData}
              Show={show}
              Hide={() => setShow(false)}
            />
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default ProblemStatements;
