import "./sbh2023.css";

export const ImpactCard = ({
  digit,
  text,
  image,
}: {
  digit: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="impact-card-root">
      <div className="impact-card-left">
        <h1 className="text2">{digit}</h1>
        <p>{text}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
const Impact = () => {
  return (
    <div className="impact-title">
      <div className="impact-title">
        <h4 style={{color:"#f75700"}}><b>SIH 2022</b></h4>
        <h1>IMPACT SIH 2022</h1>
      </div>
      <div className="impact-title">
        <h2 style={{color:"#f75700"}}>Our Reach</h2>
        <div className="impact-body">
          <ImpactCard
            digit="532"
            text="Lorem ipsum dolor sit amet"
            image="https://www.sih.gov.in/img1/satyemev-jayte-logo.png"
          />

          <ImpactCard
            digit="532"
            text="Lorem ipsum dolor sit amet"
            image="https://www.sih.gov.in/img1/satyemev-jayte-logo.png"
          />
          <ImpactCard
            digit="532"
            text="Lorem ipsum dolor sit amet"
            image="https://www.sih.gov.in/img1/satyemev-jayte-logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
