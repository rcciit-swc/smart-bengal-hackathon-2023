import { useData } from "../../contexts/Data";
import { FadeIn } from "react-slide-fade-in";
import "./Teams.style.css";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("../../components/Header/Header"));

const Team = () => {
  const { teamData } = useData();

  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Team"
          image="https://sih.gov.in/img/project-implementation.jpg"
        />
      </Suspense>

      {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold py-4"
          style={{color: "black"}}>COMING SOON</h1> */}
    
      {<div className="container pt-5 pb-5 team-wrapper">
        {teamData.map((member, index) => {
          return (
            <FadeIn
              from="left"
              positionOffset={150}
              triggerOffset={25}
              delayInMilliseconds={100}
            >
              <div
                key={index}
                className="member-container"
                style={{
                  height: "350px",
                }}
              >
                {member.img && (
                  <img
                    className="member-img mb-3"
                    src={member.img}
                    alt={`${member.name}`}
                  />
                )}
                <h6 className="member-name">{member.name}</h6>
                <h6 className="member-designation mb-3">
                  {member.designation}
                </h6>
                <h6 className="text-center member-committee">
                  {member.committee}
                </h6>
              </div>
            </FadeIn>
          );
        })}
      </div>}
    </>
  );
};

export default Team;
