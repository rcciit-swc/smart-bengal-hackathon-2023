import { lazy, Suspense } from "react";
import { Table } from "react-bootstrap";
import { useData } from "../../contexts/Data";
import { psData } from "./ps_data";

const Header = lazy(() => import("../../components/Header/Header"));

const ProblemStatements24 = () => {
  const { ThemeCardData } = useData();
  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Problem Statements of SBH 2024"
          image="https://sih.gov.in/img/themes-bg.jpg"
        />
      </Suspense>
      {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold py-4"
          style={{color: "black"}}>COMING SOON</h1> */}
      <Table
        striped
        bordered
        responsive
        className={"my-5"}
        style={{ width: "75%", margin: "0 auto", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "#313D76", color: "white" }}>
              PS No.
            </th>
            <th style={{ backgroundColor: "#313D76", color: "white" }}>
              Category
            </th>
            <th
              style={{
                backgroundColor: "#313D76",
                color: "white",
                width: "25%",
              }}
            >
              Theme
            </th>
            
            <th style={{ backgroundColor: "#313D76", color: "white" }}>
              Problem Statement
            </th>
            <th style={{ backgroundColor: "#313D76", color: "white" }}>
              Problem Statement Description
            </th>
            <th style={{ backgroundColor: "#313D76", color: "white" }}>
              Organization
            </th>

            {/* <th
              style={{
                backgroundColor: "#313D76",
                color: "white",
                textAlign: "center",
              }}
            >
              SBH Junior Themes<br></br>
              (schools)
            </th>
            <th
              style={{
                backgroundColor: "#313D76",
                color: "white",
                textAlign: "center",
              }}
            >
              SBH Senior Themes<br></br>
              (colleges)
            </th> */}
          </tr>
        </thead>
        <tbody>
          {psData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.psno}</td>
                <td>{item.category}</td>
                <td>
                  <span className="d-flex jusify-content-center align-items-center">
                    <img
                      src={item.icon}
                      alt={item.theme}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    <h5>{item.theme}</h5>
                  </span>
                </td>
                <td>{item.problemStat}</td>
                <td>{item.desc}</td>
                <td>{item.org}</td>
                {/* <td className=" ">
                  {item.institution.includes("school") ? (
                    <img
                      className="d-block mx-auto my-5"
                      src={"https://img.icons8.com/fluency/96/approval.png"}
                      alt={"approval-icon"}
                      style={{ height: "50px", width: "50px" }}
                    />
                  ) : (
                    <img
                      className="d-block mx-auto my-5"
                      src={"https://img.icons8.com/fluency/96/null/cancel.png"}
                      alt={"approval-icon"}
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </td>
                <td>
                  {item.institution.includes("college") ? (
                    <img
                      className="d-block mx-auto my-5"
                      src={"https://img.icons8.com/fluency/96/approval.png"}
                      alt={"approval-icon"}
                      style={{ height: "50px", width: "50px" }}
                    />
                  ) : (
                    <img
                      className="d-block mx-auto my-5"
                      src={"https://img.icons8.com/fluency/96/null/cancel.png"}
                      alt={"approval-icon"}
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProblemStatements24;
