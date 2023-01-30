import { Suspense } from "react";
import { Route, Router } from "react-router-dom";
import { collegeRoute, schoolRoute } from "../../Routes";
import GuidelinesCollege from "./Page.college";
import GuidelinesSchool from "./Page.school";

const Guidelines = () => {
  return (
    <div>
    <Router >
      <Route
        path={schoolRoute}
        element={
          <Suspense fallback={<></>}>
            <GuidelinesSchool />
          </Suspense>
        }
      />
      <Route
        path={collegeRoute}
        element={
          <Suspense fallback={<></>}>
            <GuidelinesCollege />
          </Suspense>
        }
      />
    </Router>
    </div>
  );
};

export default Guidelines;
