import Committe from "../../components/SBH2023/Committe";
import Finale from "../../components/SBH2023/Finale";
import Gallery from "../../components/SBH2023/Gallery";
import Sponsors from "../../components/SBH2023/Sponsors";
import Impact from "../../components/SBH2023/Impact";
import Winners from "../../components/SBH2023/Winners";
import Themes from "../Home/component.body.themes";
import "../../components/SBH2023/sbh2023.css";
const SBH2023 = () => {
  return (
    
    <div className="sbh2023-root">
      {/* <img
            className={"d-block"}
            src={"https://i.imgur.com/TQLfvXU.jpg"}
            alt={"sbh2023"}
            style={{ height: "30%", width: "100%", objectFit: "cover" }}
          /> */}
      {/* <Impact /> */}
      {/* <Finale /> */}
      <Winners />
      <Gallery />
      <Themes />
      <Committe />
      <Sponsors />
    </div>
  );
};

export default SBH2023;
