import { useData } from "../../contexts/Data";

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
        nearby to the venue .But the participants has to bear the accommodation
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
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={"https://sih.gov.in/img/project-implementation.jpg"}
          alt={"projectImplementation"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center "
          style={{
            fontSize:
              "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
          }}
        >
          PROJECT IMPLEMENTATION
        </h1>
      </div>
      <div className="d-flex w-100 flex-column justify-content-center align-items-center">
        <h2
          className="w-50 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          GUIDELINES FOR FURTHER DEVELOPMENT AND DEPLOYMENT OF SMART BENGAL
          HACKATHON (SBH2023) WINNING PROJECTS
        </h2>
        <p className="w-75">
          The Smart Bengal Hackathon (SBH) is envisioned to promote innovation
          and out-of-the-box thinking among young minds and aims to
          institutionalize a model for harnessing the creativity and technical
          expertise of millions of West Bengal students for the direct benefit
          of our state as well as nation. Through the Smart Bengal Hackathon
          2023 (SBH2023), the Institution’s Innovation Cell (MIC) tried to
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
            The Intellectual Property (IP) of the solution resides with the
            students who have developed and deployed the solution post-Hackathon
            but the concern Concerned Problem statement agency will have
            lifetime access to the solution for free. This has been done to
            encourage Startups to be created out of the developed solutions
            while also keeping in mind the interest of the involved Concerned
            Problem statement agency.
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
    </main>
  );
};

export default ProjectImplementation;
