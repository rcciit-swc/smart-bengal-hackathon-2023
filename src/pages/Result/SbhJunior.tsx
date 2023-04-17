import "./SbhJunior.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDataContext } from "../../contexts/DataProvider";
//import DescriptionModal from "./DescriptionModal";

const SbhJunior = () => {
  const { org } = useDataContext();

  

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
        <span className="text-uppercase">RESULT</span>
      </div>
      <div
        className="w-75 d-flex total-statements-container p-4 justify-content-between"
      >
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
              
              <th>Rank</th>
              <th>Team Name</th>
              <th>Team Leader's Name</th>
              <th>School Name</th>
              <th>Category</th>
              
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
                        <td className="w-25">{}</td>
                        <td
                          className="w-25 text-center"
                          style={{
                            cursor: "pointer",
                            color: "blue",
                          }}

                        >
                          {}
                        </td>
                        <td className="text-center">{}</td>
                        <td className="text-center">{}</td>
                        <td className="w-25 text-center">{}</td>
                        <td className="text-center">{}</td>
                      </tr>
                    </>
                  );
                })
              )}
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default SbhJunior;
