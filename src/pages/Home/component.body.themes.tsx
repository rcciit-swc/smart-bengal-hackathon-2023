import { useEffect, useState } from "react";
import { useData } from "../../contexts/Data";
import "./component.body.themes.style.css";

const ThemeCard = ({
  theme,
  desc,
  id,
}: {
  theme: string;
  desc: string;
  id: string;
}) => {
  return (
    <div
      id={`theme_card_${id}`}
      style={{
        backgroundColor: `var(--primary-color-light)`,
      }}
      className="m-3 p-3 d-flex flex-column align-items-center"
    >
      <h5 className="fw-bold text-center">{theme}</h5>
      <span style={{ textAlign: "justify" }} className="fs-6">
        {desc}
      </span>
    </div>
  );
};

const Themes = () => {
  const { title, themes, themesTagline } = useData();

  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visible < themes.length - 1) {
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
              setVisible(themes.length - 1);
            }
          }}
        />
        <div className="d-grid themes-grid">
          <ThemeCard
            id="1"
            theme={themes[visible - 2].title}
            desc={themes[visible - 2].description}
          />
          <ThemeCard
            id="2"
            theme={themes[visible - 1].title}
            desc={themes[visible - 1].description}
          />
          <ThemeCard
            id="3"
            theme={themes[visible].title}
            desc={themes[visible].description}
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
            if (visible < themes.length - 1) {
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
