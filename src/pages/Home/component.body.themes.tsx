import { useEffect, useState } from "react";
import { useData } from "../../contexts/Data";
import "./component.body.themes.style.css";

const ThemeCard = ({
  theme,
  desc,
  id,
  icon,
}: {
  theme: string;
  desc: string;
  id: string;
  icon: string;
}) => {
  return (
    <div
      id={`theme_card_${id}`}
      style={{
        backgroundColor: `var(--primary-color-light)`,
      }}
      className="m-3 p-3 d-flex flex-column align-items-center "
    >
      <img src={icon} alt={theme} className="my-4" style={{width:"80px",height:"80px"}}/>
      <h5 className="fw-bold text-center">{theme}</h5>
      <span style={{ textAlign: "justify" }} className="fs-6">
        {desc}
        {desc}
      </span>
    </div>
  );
};

const Themes = () => {
  const { title,  themesTagline, ThemeCardData } = useData();

  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visible < ThemeCardData.length - 1) {
        setVisible(visible + 1);
      } else {
        setVisible(2);
      }
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <div
      style={{ backgroundColor: `var(--primary-color-light)` }}
      className="py-5 w-100 h-100 d-flex flex-column align-items-center"
    >
      <h5
        style={{ color: `var(--heading-color)` }}
        className="text-uppercase fw-bold mt-3"
      >
        {`${title}'s`}
      </h5>
      <h1
        style={{ color: "var(--primary-color)" }}
        className="text-uppercase fw-bold"
      >
        themes
      </h1>
      <h5 className="fw-light fs-5 text-center">{themesTagline}</h5>
      <div className="d-flex flex-row align-items-center themes-grid-container">
        <img
          src="https://img.icons8.com/flat-round/64/000000/long-arrow-left.png"
          alt="previous"
          role="button"
          onClick={() => {
            if (visible > 2) {
              setVisible(visible - 1);
            } else {
              setVisible(ThemeCardData.length - 1);
            }
          }}
        />
        <div className="d-grid themes-grid "
        style={{
          height: "60vh",
        }}>
          <ThemeCard
            id="1"
            theme={ThemeCardData[visible - 2].theme}
            desc={ThemeCardData[visible - 2].desc}
            icon={ThemeCardData[visible - 2].icon}
          />
          <ThemeCard
            id="2"
            theme={ThemeCardData[visible - 1].theme}
            desc={ThemeCardData[visible - 1].desc}
            icon={ThemeCardData[visible - 1].icon}
          />
          <ThemeCard
            id="3"
            theme={ThemeCardData[visible].theme}
            desc={ThemeCardData[visible].desc}
            icon={ThemeCardData[visible].icon}
          />
        </div>
        <img
          style={{
            transform: "rotate(180deg)",
          }}
          src="https://img.icons8.com/flat-round/64/000000/long-arrow-left.png"
          alt="next"
          role="button"
          onClick={() => {
            if (visible < ThemeCardData.length - 1) {
              setVisible(visible + 1);
            } else {
              setVisible(2);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Themes;
