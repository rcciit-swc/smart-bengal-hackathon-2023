import React from "react";
import secondprize from "../../assets/secondprize.png";
interface PrizeCardProps {
    boxShadow?:boolean,
    prizeType:string,
    prizeAmount:string,
    taskadePro?:string,
    prizeUpdate?:string
}
const PrizeCard = () => {
  return (
    <div style={{ boxShadow: "0px 7px 34px -8px #00000040",paddingRight:"13px" }}>
      <img src={secondprize} alt={"secondprize"} />
      <div style={{ marginLeft: "93px", marginTop: "-32px" }}>
        <h1 style={{fontSize:"24px",fontWeight:"900"}}>2ND PRIZE</h1>
        <p style={{fontSize:"25px",fontWeight:"300",margin:"0px"}}>RS.20,000</p>
        <p style={{fontWeight:"500",fontSize:"15px",margin:"0px"}}>+ Taskade Pro lifetime free subscription</p>
        <p style={{marginTop:"20px"}}>*Prize money will be updated as more prizes will be added</p>
      </div>
    </div>
  );
};

export default PrizeCard;
