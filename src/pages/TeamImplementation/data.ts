import abhijtSir from "../../assets/implementation-team/Prof. Abhijit.png";
import pranashSir from "../../assets/implementation-team/Mr. Pranabesh Das.png";
import anirbanSir from "../../assets/implementation-team/Prof.Anirban Mukherjee.png";
import aloknathSir from "../../assets/implementation-team/Dr. Aloknath De.png";
import amlanSir from "../../assets/implementation-team/Prof..Amlan Chakrabrti.png";
import joydeepSir from "../../assets/implementation-team/Joydeep Banerjee.png";
import swagatamSir from "../../assets/implementation-team/Prof.Swagatam Das.png";

type impl_team_type = {
  img: string;
  name: string;
  position: string;
  designation: string;
};

const impl_team_data: impl_team_type[] = [
  {
    img: abhijtSir,
    name: "Prof. Abhijit Chakraborty",
    position: "Chief Patron",
    designation:
      "Chairman, BOM, RCCIIT & Ex.VC of Jadavpur University & Professor of IIEST",
  },
  {
    img: pranashSir,
    name: "Mr. Pranabesh Das",
    position: "Patron",
    designation:
      "Chairman, BOG, RCCIIT, Ex.Director of Technical Education, Govt.of West Bengal",
  },
  {
    img: anirbanSir,
    name: "Prof. Anirban Mukherjee",
    position: "Patron",
    designation: "Principal(ofg.), RCCIIT",
  },
  {
    img: aloknathSir,
    name: "Dr. Alokenath De",
    position: "Chief Mentor",
    designation:
      "Ex. Corporate Vice President of Samsung Electronics and Chief Technology Officer of Samsung R&D Institute India, Bangalore, Chair, IEEE Bangalore section",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/alok.jpg",
    name: "Dr. Alok Kole",
    position: "Convener",
    designation:
      "Professor, Dept.of EE & President of Institution’s Innovation Council, RCCIIT",
  },
  {
    img: amlanSir,
    name: "Prof. Amlan Chakrabrti",
    position: "Adviser",
    designation:
      "Professor and Director, A.K. Choudhury School of Information Technology University of Calcutta",
  },
  {
    img: joydeepSir,
    name: "Joydeep Banerjee",
    position: "Adviser",
    designation: "Global CoC, Mainframe Modernization Service, IBM Consulting",
  },
  {
    img: swagatamSir,
    name: "Prof. Swagatam Das",
    position: "Adviser",
    designation:
      "Associate Professor and Head Electronics and Communication Sciences Unit, Indian Statistical Institute",
  },
];

export default impl_team_data;
