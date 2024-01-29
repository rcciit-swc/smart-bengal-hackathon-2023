import { lazy, Suspense, useEffect, useState } from "react";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import { useData } from "../../contexts/Data";
import "./component.body.themes.style.css";

const Circle = lazy(() => import("../../components/Blob/Circle"));

const ThemeCard = ({
  theme,
  desc,
  id,
  picture,
  color,
}: {
  theme: string;
  desc: string;
  id: string;
  picture: string;
  color: string;
}) => {
  return (
    <div
      id={`theme_card_${id}`}
      style={{
        borderRadius: "20px",
        height: "375px",
        boxShadow: "-8px 32px 30px -2px rgba(0, 106, 167, 0.21)",
        overflow: "hidden",
        backgroundColor: "white",
      }}
      className="m-3 p-3 d-flex flex-column align-items-center position-relative"
    >
      <span
        style={{
          height: "250px",
          width: "250px",
          backgroundColor: color,
          opacity: "0.5",
          borderRadius: "50%",
          top: "225px",
          left: "-36px",
        }}
        className="position-absolute"
      ></span>
      <div
        style={{
          height: "266px",
          width: "414px",
          left: "85px",
          top: "180px",
          borderRadius: "20px",
          transform: "rotate(-28deg)",
          backgroundColor: color,
        }}
        className="position-absolute"
      >
        <img
          style={{
            height: "inherit",
            width: "inherit",
            borderRadius: "inherit",
            opacity: "0.2",
          }}
          src={picture}
          alt=""
        />
      </div>
      <h5 className="fw-bold text-start w-100">{theme}</h5>
      <span style={{ textAlign: "justify" , zIndex:10}} className="fs-6">
        {desc}
      </span>
    </div>
  );
};

const Themes = () => {
  const { title, themesTagline, ThemeCardData } = useData();

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
    <div className="pt-5 w-100 h-100 d-flex flex-column align-items-center text-center position-relative">
      <Suspense fallback={<></>}>
        
      </Suspense>
      <h5
        style={{ color: `var(--heading-color)` }}
        className="caveat text-uppercase fw-bold fs-2"
      >
        {`${title}'s`}
      </h5>
      <h1
        style={{ color: "var(--primary-color)" }}
        className="text-uppercase fw-bold caveat"
      >
        themes
      </h1>
      <h5 className="fw-light fs-6 text-center">{themesTagline}</h5>
      <FadeIn
        from="bottom"
        positionOffset={200}
        triggerOffset={0}
        delayInMilliseconds={100}
      >
        <div className="d-flex flex-row align-items-center themes-grid-container">
          <img
            style={{
              transform: "rotate(180deg)",
            }}
            src="https://img.icons8.com/ios-glyphs/40/null/more-than.png"
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
          <div className="d-grid themes-grid ">
            <ThemeCard
              id="1"
              theme={ThemeCardData[visible - 2].theme}
              desc={ThemeCardData[visible - 2].desc}
              picture={ThemeCardData[visible - 2].picture}
              color={ThemeCardData[visible - 2].color}
            />
            <ThemeCard
              id="2"
              theme={ThemeCardData[visible - 1].theme}
              desc={ThemeCardData[visible - 1].desc}
              picture={ThemeCardData[visible - 1].picture}
              color={ThemeCardData[visible - 1].color}
            />
            <ThemeCard
              id="3"
              theme={ThemeCardData[visible].theme}
              desc={ThemeCardData[visible].desc}
              picture={ThemeCardData[visible].picture}
              color={ThemeCardData[visible].color}
            />
          </div>
          <img
            src="https://img.icons8.com/ios-glyphs/40/null/more-than.png"
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
      </FadeIn>
      <p className="mt-4 fw-500 fs-6 w-75">
        Participants can submit their innovative ideas according to their choice
        of concerned theme irrespective of the already present problem
        statements.
      </p>
    </div>
  );
};

export default Themes;
