import React from "react";
import { Table } from "react-bootstrap";
import { useData } from "../../contexts/Data";
import "./ThemePage.style.css";

const ThemePage = () => {
  const { themes } = useData();
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
          style={{ color: "var(--sub-heading)", fontSize: "36px" }}
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
              <th style={{ backgroundColor: "#313D76", color: "white" }}>
                SIH Junior(Jr) Themes
                <span>(for schools)</span>
              </th>
              <th style={{ backgroundColor: "#313D76", color: "white" }}>
                SBH Senior(Sr) Themes
                <span>(for colleges)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {themes.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <h4>{item.title}</h4>
                    {<br />}
                    {item.description}
                  </td>
                  <td>
                    <img
                      className={"d-block mx-auto"}
                      src={"https://img.icons8.com/fluency/96/approval.png"}
                      alt={"approval-icon"}
                    />
                  </td>
                  <td>
                    <img
                      className="d-block mx-auto"
                      src={"https://img.icons8.com/fluency/96/approval.png"}
                      alt={"approval-icon"}
                    />
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
