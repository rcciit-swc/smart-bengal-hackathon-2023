import { Link } from "react-router-dom";
import "./sbh2023.css";


const winnerData = [
  {
    title: "WINNERS - SBH 2023 SENIOR",
    link: " ",
  },
  {
    title: "WINNERS - SBH 2023 JUNIOR",
    link: " ",
  },
];
const WinnerCard = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="winner-card-root">
      <div className="impact-card-left">
        <h1>{title}</h1>
        <Link to={link} target="_blank">
          <h5 className="winner-link">Click to view the list</h5>
        </Link>
      </div>
      <div>
        <img
          src="https://www.sih.gov.in/img1/winners-pic.png"
          alt=""
          className="winner-img"
        />
      </div>
    </div>
  );
};
const Winners = () => {
  return (
    <div className="winner-root">
      <div className="winner-body">
        {winnerData.map((item, index) => {
          return <WinnerCard key={index} title={item.title} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default Winners;
