import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Committee.style.css";
import CommitteCard from "./CommitteeCard";

const CommitteeComp = () => {
  const [key, setKey] = useState("one");
  return (
    <div
      className="w-75 m-2 process-container p-5 text-center"
      style={{ backgroundColor: "var(--invert-color)" }}
    >
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k: any) => setKey(k)}
        className="mb-3 tabs_button"
        fill
      >
        <Tab eventKey="one" title="One">
          <div className="row p-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CommitteCard />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CommitteCard />
            </div>
          </div>
        </Tab>
        <Tab eventKey="two" title="Two">
          <div className="row p-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CommitteCard />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CommitteCard />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CommitteeComp;
