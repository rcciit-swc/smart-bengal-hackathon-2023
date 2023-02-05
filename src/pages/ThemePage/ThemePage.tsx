import React from "react";
import { Table } from "react-bootstrap";
import { useData } from "../../contexts/Data";

const ThemePage = () => {
  const { ThemeCardData } = useData();
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={"https://sih.gov.in/img/themes-bg.jpg"}
          alt={"Theme Background"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center"
          style={{ fontSize: "var(--responsive-heading-font)" }}
        >
          THEMES OF SBH 2023
        </h1>
      </div>
      <div className="w-100">
        <h2
          className="w-100 text-center py-5 fw-bold"
          style={{ color: "var(--heading-color)", fontSize: "36px" }}
        >
          SCHOOLS AND COLLEGES
        </h2>
        <Table
          striped
          bordered
          responsive
          className={"my-5"}
          style={{ width: "75%", margin: "0 auto" }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "#313D76", color: "white" }}>
                S.No.
              </th>
              <th style={{ backgroundColor: "#313D76", color: "white" }}>
                Themes
              </th>
              <th
                style={{
                  backgroundColor: "#313D76",
                  color: "white",
                  textAlign: "center",
                }}
              >
                SBH Junior(Jr) Themes
                <span>(for schools)</span>
              </th>
              <th
                style={{
                  backgroundColor: "#313D76",
                  color: "white",
                  textAlign: "center",
                }}
              >
                SBH Senior(Sr) Themes
                <span>(for colleges)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {ThemeCardData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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
                      <h4>{item.theme}</h4>
                    </span>

                    {<br />}
                    {item.desc}
                  </td>
                  <td className=" ">
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
                        src={
                          "https://img.icons8.com/fluency/96/null/cancel.png"
                        }
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
                        src={
                          "https://img.icons8.com/fluency/96/null/cancel.png"
                        }
                        alt={"approval-icon"}
                        style={{ height: "50px", width: "50px" }}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default ThemePage;
