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
    img: pranashSir,
    name: "Sri Pranabesh Das",
    position: "Chief Patron",
    designation:
      "Chairman, BOG, RCCIIT, Ex.Director of Technical Education, Govt.of West Bengal",
  },
  {
    img: amlanSir,
    name: "Prof. Amlan Chakrabrti",
    position: "Chief Patron",
    designation:
      "Professor and Director, A.K. Choudhury School of Information Technology University of Calcutta",
  },
  {
    img: anirbanSir,
    name: "Prof.(Dr.) Anirban Mukherjee",
    position: "Patron",
    designation: "Principal(officiating), RCCIIT",
  },
  {
    img: 'https://rcciit.org/images/staff/cse/f/minakshi.jpg',
    name: "Prof.(Dr.) Minakshi Banerjee",
    position: "Adviser",
    designation: "Professor, Dept.of CSE, RCCIIT",
  },
  {
    img: 'https://rcciit.org/images/staff/ece/f/ashoke.jpg',
    name: "Prof.(Dr.) Ashoke Mondal",
    position: "Adviser",
    designation: "Professor,Dept.of ECE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/indrajit.jpg",
    name: "Prof.(Dr.) Indrajit Pan",
    position:'Adviser',
    designation: "Professor, Dept.of IT, Dean, R & D, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/cse/f/harinandan.jpg",
    name: "Mr. Harinandan Tunga",
    position: "Adviser",
    designation: "Associate Professor, Dept.of CSE, FIC(SA & SW), RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/Debasish.jpg",
    name: "Prof.(Dr.) Debasish Mondal",
    position:'Chief Convener',
    designation: "Professor, Dept.of EE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/aeie/f/srijan.jpg",
    name: "Dr. Srijan Bhattacharya",
    position:'Joint Convener (SBH Junior)',
    designation: " Assistant Professor,  Dept.of AEIE, RCCIIT",
    
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Soumen.jpg",
    name: "Dr. Soumen  Mukherjee",
    position:'Joint Convener (SBH Junior)',
    designation: "Associate Professor, Dept.of IT, RCCIIT",
    
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/arpan.jpg",
    name: "Dr. Arpan Deyasi",
    position:'Joint Convener (SBH Senior)',
    designation: "Associate Professor, Dept.of ECE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Hiranmoy.jpg",
    name: "Dr. Hiranmoy Roy",
    position:'Joint Convener (SBH Senior)',
    designation: "Associate Professor, HOD ,Dept.of IT, RCCIIT",
  },
];

export default impl_team_data;
