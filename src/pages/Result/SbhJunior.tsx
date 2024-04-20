import "./SbhJunior.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
//import { useDataContext } from "../../contexts/DataProvider";
import { useData } from "../../contexts/Data";
//import DescriptionModal from "./DescriptionModal";

const SbhJunior = () => {
  const { result } = useData();

  

console.log(result)


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
              <th>Id</th>
              <th>Team Name</th>
              <th>Team Members Name</th>
              <th>School Name</th>
              <th>Mentor's Name</th>
              
            </tr>
          </thead>
           <tbody>
           {

                result?.SbhJunior?.map((data: any, indexing: any) => {
                  return (
                    <>
                      <tr key={indexing}>
                        <td className="text-center">{data.Rank}</td>
                        <td className="text-center">{data.Id}</td>
                        <td className="w-25">{data.TeamName}</td>
                        <td
                          className="w-25 text-center"
                          style={{
                            cursor: "pointer",
                            color: "black",
                          }}

                        >
                          {data.teamLeadersName}
                        </td>
                        <td className="text-center">{data.schoolName}</td>
                        <td className="text-center">{data.catagory}</td>
                      
                       
                      </tr>
                    </>
                  );
                        })
           }
              
          </tbody> 
        </Table>
      </div>
    </main>
  );
};

export default SbhJunior;
