import "./sbh2023.css";

const impactData = [
  {
    digit: "532",
    text: "Union Ministry/State Government/Departments",
    image: "https://www.sih.gov.in/img1/satyemev-jayte-logo.png",
  },
  {
    digit: "6+",
    text: "Industries",
    image: "https://www.sih.gov.in/img1/sih-2018-soft-stu-icon.png",
  },
  {
    digit: "563",
    text: "Total Problem Statements",
    image: "https://www.sih.gov.in/img1/training-seassion-icon.png",
  },
];
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
      <div className="impact-card-left" style={{ width: "50%" }}>
        <h1 className="text2">{digit}</h1>
        <p>{text}</p>
      </div>
      <div>
        <img
          src={image}
          height={"80%"}
          width={"80px"}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    </div>
  );
};
const Impact = () => {
  return (
    <div className="impact-title">
      <div className="impact-title">
        <h4 style={{ color: "#f75700" }}>
          <b>SIH 2022</b>
        </h4>
        <h1>IMPACT SIH 2022</h1>
      </div>
      <div className="impact-title">
        <h2 style={{ color: "#f75700" }}>Our Reach</h2>
        <div className="impact-body">
          {impactData.map((data, index) => {
            return (
              <ImpactCard
                key={index}
                digit={data.digit}
                text={data.text}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Impact;
