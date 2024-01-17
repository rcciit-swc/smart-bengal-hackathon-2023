import Committe from "../../components/SBH2023/Committe";
import Finale from "../../components/SBH2023/Finale";
import Gallery from "../../components/SBH2023/Gallery";
import Sponsors from "../Home/Sponsors";
import Impact from "../../components/SBH2023/Impact";
import Winners from "../../components/SBH2023/Winners";
import Themes from "../Home/component.body.themes";
import "../../components/SBH2023/sbh2023.css";
const SBH2023 = () => {
  return (
    <div className="sbh2023-root">
      <Impact />
      <Finale />
      <Winners />
      <Gallery />
      <Themes />
      <Committe />
      <Sponsors />
    </div>
  );
};

export default SBH2023;
