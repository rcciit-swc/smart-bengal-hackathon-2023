import Impact from "./Impact";
import "./sbh2023.css";

const WinnerCard = ()=>{
    return(
        <div className="winner-card-root">
            <div className="impact-card-left">
                <h1>WINNERS - SIH 2022 HARDWARE</h1>
                <h5>Click to view the list</h5>
            </div>
            <div>
            <img src="https://www.sih.gov.in/img1/winners-pic.png" alt=""  className="winner-img" />
            </div>
         
        </div>
    )
}
const Winners = () => {
  return (
    <div
    className="winner-root" 
    >
        <div className="winner-body">
        <WinnerCard />
        <WinnerCard />
        <WinnerCard />
        </div>
      
    </div>
  )
}

export default Winners