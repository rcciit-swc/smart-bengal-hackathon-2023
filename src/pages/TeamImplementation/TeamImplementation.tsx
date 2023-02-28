import impl_team_data from "./data";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import "../Teams/Teams.style.css";

const TeamImplementation = () => {
  return (
    <div>
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
            EXECUTIVE TEAM
          </h1>
        </div>
      </main>
      <div className="container pt-5 pb-5 team-wrapper">
        {impl_team_data.map((member, index) => {
          return (
            <FadeIn
              from="left"
              positionOffset={150}
              triggerOffset={25}
              delayInMilliseconds={100}
            >
              <div key={index} className="member-container"
              style={{
                height:"350px"
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
                <h6 className="member-designation mb-3">{member.position}</h6>
                <h6 className="text-center member-committee">
                  {member.designation}
                </h6>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

export default TeamImplementation;
