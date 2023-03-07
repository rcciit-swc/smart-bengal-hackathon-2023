import { useData } from "../../contexts/Data";
import { FadeIn } from "react-slide-fade-in";
import "./Teams.style.css";

const Team = () => {
  const { teamData } = useData();

  return (
    <div className="pt-5 pb-5">
      <h3
        className="text-center text-uppercase fw-bold fs-1"
        style={{ color: "var(--heading-color)" }}
      >
        Team SBH
      </h3>
      <div className="container pt-5 pb-5 team-wrapper">
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
      </div>
    </div>
  );
};

export default Team;
