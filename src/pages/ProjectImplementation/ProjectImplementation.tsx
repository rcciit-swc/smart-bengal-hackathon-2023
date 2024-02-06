import { lazy, Suspense } from "react";
import { useData } from "../../contexts/Data";

const Header = lazy(() => import("../../components/Header/Header"));

const ImportantNotes = [
  {
    description: (
      <p>
        In case the solution developed by the teams is an assembly of available
        components, then any conflict arising due to plagiarism, IP, or
        copyright violations, the individuals of the concerned team will be
        solely responsible. Hence, the teams have been advised to use verified
        open-source components only and acknowledge them appropriately.{" "}
        <b>
          RCCIIT also get a signed declaration from all the members of the team
          in this regard to indemnify itself from any legal conflict.
        </b>
      </p>
    ),
  },
  {
    description: (
      <p>
        In some cases, the final-year students/participants of the winning team
        pass out of college and proceed to higher studies or jobs, or some
        members of the team (due to some personal reasons) may not wish to
        continue with project development post-SBH, in such scenarios the
        respective teams have the flexibility to include new members into the
        team as replacements.
      </p>
    ),
  },
  {
    description: (
      <p>
        <b>Long Distance Travel/Short Distance Travel:</b>  SBH committee will
        not reimburse any travel cost for the participants. The concerned
        participants shall bear the travel cost even if they travel from any
        other district.
      </p>
    ),
  },
  {
    description: (
      <p>
        <b>Stay: SBH organizing</b> committee will arrange the accommodation
        nearby to the venue. But the participants has to bear the accommodation
        cost. However the participants shall request the accommodation request
        to SBH committee in advance.
      </p>
    ),
  },
  {
    description: (
      <p>
        <b>Cost Incurred during Field Visits:</b> Other than travel and stay, if
        any other cost is incurred during any field visit to collect data/field
        survey or to undertake user testing etc (wherever required), each person
        shall bear the cost.
      </p>
    ),
  },
];

const ProjectImplementation = () => {
  const { winningGuidelines } = useData();

  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Project Implementation"
          image="https://sih.gov.in/img/project-implementation.jpg"
        />
      </Suspense>
      {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold py-4"
          style={{color: "black"}}>COMING SOON</h1> */}
      <div className="d-flex w-100 mb-5 flex-column justify-content-center align-items-center">
        <h2
          className="text-center fw-bold my-5"
          style={{ color: "var(--heading-color)", width: "90%" }}
        >
          GUIDELINES FOR FURTHER DEVELOPMENT AND DEPLOYMENT OF SMART BENGAL
          HACKATHON (SBH2024) WINNING PROJECTS
        </h2>
        <p className="w-75">
          The Smart Bengal Hackathon (SBH) is envisioned to promote innovation
          and out-of-the-box thinking among young minds and aims to
          institutionalize a model for harnessing the creativity and technical
          expertise of millions of West Bengal students for the direct benefit
          of our state as well as nation. Through the Smart Bengal Hackathon
          2024 (SBH2024), the Institution’s Innovation Cell (IIC) tried to
          crowdsource solutions for improving governance and quality of life and
          provide young citizens with an opportunity to co-create and present
          innovative solutions to India's pressing needs.
          <br />
          <br />
          Post SBH, the RCC Institute of Information Technology is committed to
          the further development, implementation, and deployment of SBH-winning
          ideas by effectively supporting the concerned ministries/departments.
          Hence, to initiate the development and deployment of SBH-winning
          ideas, the concerned Problem Statement given agency is requested to
          follow the guidelines indicated below.
        </p>
        <ul className="list-unstyled w-75">
          {winningGuidelines.map((item, index) => (
            <li className="my-2">
              <span
                className="w-100 fw-semibold m-1 p-1"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                }}
              >
                {index + 1}
              </span>
              {item.title}
            </li>
          ))}
        </ul>
        <br />
        <div className="w-75 ">
          <h3 className="fw-bold">INTELLECTUAL PROPERTY (IP):</h3>
          <p>
            The Intellectual Property (IP) of the solution shall reside normally
            with the students who have developed and deployed the solution,
            unless the agency furnishing the problem statement explicitly
            mentions that the IP of the solution shall reside jointly with the
            agency and the students who developed it. The agency furnishing the
            problem statement shall have lifetime access to the solution for
            free, under all situations, whether or not it holds the IP.
          </p>
        </div>
        <br />
        <div className="w-75 ">
          <h3 className="fw-bold">IMPORTANT NOTE:</h3>
          <ul id="important-notes">
            {ImportantNotes.map((item, index) => (
              <li
                className="my-2"
                style={{
                  listStyle: "square",
                  color: "var(--heading-color)",
                  fontSize: "25px",
                }}
              >
                <p
                  style={{
                    color: "var(--bs-body-color)",
                    fontSize: "var(--bs-body-font-size)",
                    lineHeight: "var(--bs-body-line-height)",
                  }}
                >
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectImplementation;
