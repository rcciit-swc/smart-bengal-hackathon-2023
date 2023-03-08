import { lazy, Suspense } from "react";
import { Table } from "react-bootstrap";
import { useData } from "../../contexts/Data";

const Header = lazy(() => import("../../components/Header/Header"));

const ThemePage = () => {
  const { ThemeCardData } = useData();
  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Themes of SBH 2023"
          image="https://sih.gov.in/img/themes-bg.jpg"
        />
      </Suspense>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ThemePage;
