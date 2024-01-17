import React from "react";
import { ImpactCard } from "./Impact";

const Finale = () => {
  return (
    <div className="impact-title" style={{paddingBottom:"25px", width:"80%"}}>
      <h1 className="text">GRAND FINALE FOR SIH SENIOR</h1>
      <div className="impact-body"  style={{paddingBottom:"25px"}}>
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
        <ImpactCard
          digit="532"
          text="Lorem ipsum dolor sit amet"
          image="https://www.sih.gov.in/img1/satyemev-jayte-logo.png"
        />
      </div>
      <p>
        To interate the efforts towards PM's vision of Digital India and to
        promote digital literacy in order to make development a comprehensive
        mass movement. MHRD, AICTE, i4C and Persistent System were found to
        organize the 2nd edition of this initiative - Smart India Hackathon.
      </p>
    </div>
  );
};

export default Finale;
