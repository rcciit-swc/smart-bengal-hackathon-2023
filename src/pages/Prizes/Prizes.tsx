import { lazy, Suspense } from "react";
import { Table } from "react-bootstrap";
import PrizeCard from "../../components/PrizeCard/PrizeCard";
import { useData } from "../../contexts/Data";

const Header = lazy(() => import("../../components/Header/Header"));

const PrizesNotes = [
  {
    description:
      "Total cash prizes worth INR 65,000 + goodies, internship opportunities for SBH Senior & SBH  Junior both",
  },
  {
    description: "Best Prize for innovation and creativity of INR 2,000",
  },
  {
    description: "Certificate of distinction for top 10 teams",
  },
  {
    description: "Certificate of participation to all teams",
  },
];

const Prizes = () => {

  const { prize } = useData();

  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Prizes"
          image="https://www.lupin.com/wp-content/uploads/2021/04/about-us-Awards-Recognition-2.jpg"
        />
      </Suspense>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5 text-uppercase caveat"
          style={{ color: "var(--heading-color)" }}
        >
          Rewards and Prizes
        </h2>
        {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold"
          style={{color: "black"}}>COMING SOON</h1> */} 
         <p className="w-75">
          All participants will be provided a certificate of participation. Top
          3 teams will be awarded with prize money, exciting goodies and a
          certificate of excellence for SBH Junior and SBH Senior.
        </p>
        <div className="d-flex flex-column gap-2 my-2">
           <h1 className="poppins text-center fs-3 text-uppercase fw-semibold"
          style={{color: "var(--heading-color)"}}
          >SBH Senior</h1> 
            {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold"
          style={{color: "black"}}>COMING SOON</h1>  */}
           <PrizeCard
            prize={prize.SBHSenior}
            /> 
 <h1 className="poppins text-center fs-3 text-uppercase fw-semibold"
          style={{color: "var(--heading-color)"}}
          >SBH Junior</h1> 
           <PrizeCard
            prize={prize.SBHJunior}
            /> 
             {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold"
          style={{color: "black"}}>COMING SOON</h1>  */}
        </div>
         <ul className="w-75">
          {PrizesNotes.map((item, index) => (
            <li
              key={index}
              className="my-2 text-start"
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
         <h3 className="w-75 fs-6 text-center mb-2">
          * All the prizes and certificate will be Released Within 30 days after
          the event is over
        </h3>
        <h3 className="w-75 fs-6 text-center mb-5">
          * Prize value may be enhanced
        </h3> 
      </div>
    </>
  );
};

export default Prizes;
