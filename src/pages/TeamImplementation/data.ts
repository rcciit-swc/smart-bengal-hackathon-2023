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
    name: "Mr. Pranabesh Das",
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
    name: "Prof. Anirban Mukherjee",
    position: "Patron",
    designation: "Principal(ofg.), RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/cse/f/minakshi.jpg",
    name: "Dr. Minakshi Banerjee",
    position: "Adviser",
    designation: "Professor, Dept.of CSE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/ashoke.jpg",
    name: "Dr. Ashoke Mondal",
    position: "Adviser",
    designation: "Professor,Dept.of ECE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/indrajit.jpg",
    name: "Dr. Indrajit Pan",
    position: "Adviser",
    designation: "Professor, Dept.of IT, Dean, R & D, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/cse/f/harinandan.jpg",
    name: "Mr. Harinandan Tunga",
    position: "Adviser",
    designation: "Professor, Dept.of CSE, FIC(SA & SW), RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/Debasish.jpg",
    name: "Dr. Debasish Mondal",
    position: "Chief Convener",
    designation: "Professor, Dept.of EE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/aeie/f/srijan.jpg",
    name: "Dr. Srijan Bhattacharya",
    position: "Joint Convener (SBH Junior)",
    designation: "Professor,  Dept.of AEIE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Soumen.jpg",
    name: "Dr. Soumen  Mukherjee",
    position: "Joint Convener (SBH Junior)",
    designation: "Professor, Dept.of IT, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/arpan.jpg",
    name: "Dr. Arpan Deyasi",
    position: "Joint Convener (SBH Senior)",
    designation: "Professor, Dept.of ECE, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Hiranmoy.jpg",
    name: "Dr. Hiranmoy Roy",
    position: "Joint Convener (SBH Senior)",
    designation: "HOD, Dept.of IT, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Soumyadip.jpg",
    name: "Dr. Soumyadip Dhar",
    position: "Joint Coordinator",
    designation: "Associate Professor, Dept.of IT , RCCIIT",
  },
  {
    img: "https://media.licdn.com/dms/image/C5603AQFX_Sc3mnzMTw/profile-displayphoto-shrink_200_200/0/1593141816986?e=1712793600&v=beta&t=xibN9IWIhwgwMa6904-QiHvOBrgXHTmUaGP8Oi4D1mI",
    name: "Dr. Arijit Ghosh",
    position: "Joint Coordinator",
    designation: "Assistant Professor, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/it/f/Hrishikesh.jpg",
    name: "Dr. Hrishikesh Bhaumik",
    position: "Joint Coordinator",
    designation: "Professor, Dept.of IT, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/alok.jpg",
    name: "Dr. Alok Kole ",
    position: "Joint Coordinator",
    designation: "Professor, Dept.of EE, RCCIIT",
  },
  {
    img: "https://rcciit.org.in/images/staff/ca/f/manas_g.jpg",
    name: "Mr. Manas Ghosh",
    position: "Joint Coordinator",
    designation: "Assistant Professor, Dept. of CA, RCCIIT",
  },
  {
    img: "https://rcciit.org.in/images/staff/it/f/abhijit.jpg",
    name: "Dr. Abhijit Das",
    position: "Joint Coordinator",
    designation: "Assistant Professor, Dept. of IT, RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/Sarbojit.jpg",
    name: "Mr. Sarbojit Mukherjee",
    position: "Joint Coordinator",
    designation: "Assistant Professor, Dept.of EE , RCCIIT",
  },
  {
    img: "https://rcciit.org.in/images/staff/sh/f/Avijit.jpg",
    name: "Mr. Avijit Saha",
    position: "Joint Coordinator",
    designation: "",
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/arpan.jpg",
    name: "Dr. Arpan Deyasi",
    position: "Joint Coordinator",
    designation: "Associate Professor, Dept.of ECE , RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/cse/f/Anup.jpg",
    name: "Dr. Anup Kolya",
    position: "Joint Coordinator",
    designation: "Associate Professor, Dept.of CSE , RCCIIT",
  },
  {
    img: "https://rcciit.org.in/images/staff/aeie/f/avishek.jpg",
    name: "Mr. Avishek Paul",
    position: "Joint Coordinator",
    designation: "Assistant Professor, Dept.of AEIE , RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ee/f/Budhaditya.jpg",
    name: "Mr. Budhaditya Biswas",
    position: "Joint Coordinator",
    designation: "Assistant Professor, Dept.of EE , RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/Abhishek.jpg",
    name: "Dr. Abhishek Basu",
    position: "Joint Coordinator",
    designation: "Associate Professor, Dept.of ECE , RCCIIT",
  },
  {
    img: "https://rcciit.org/images/staff/ece/f/Soham.jpg",
    name: "Dr. Soham Sarkar",
    position: "Joint Coordinator",
    designation: "Associate Professor, Dept.of ECE , RCCIIT",
  },
];

export default impl_team_data;
