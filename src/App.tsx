import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {
  indexRoute,
  problemStatementsRoute,
  processFlowRoute,
  projectImplementationRoute,
  TeamImplementationRoute,
  venueRoute,
  sbhthemesRoute,
  updatesRoute,
  teamRoute,
  prizesRoute,
  eligibilityRoute,
  loginRoute,
  adminPortalRoute,
  contactUsRoute,
  faqRoute,
  rulesRoute,
} from "./Routes";
import { lazy, Suspense } from "react";
import { DataProvider } from "./contexts/Data";
import { UserProvider } from "./contexts/DataProvider";
import Team from "./pages/Teams/Team";
import { AuthProvider } from "./contexts/Auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// splitting different page bundles
const Home = lazy(() => import("./pages/Home/Home"));
const ProblemStatements = lazy(
  () => import("./pages/ProblemStatements/ProblemStatements")
);
const ProjectImplementation = lazy(
  () => import("./pages/ProjectImplementation/ProjectImplementation")
);

const TeamImplementation = lazy(
  () => import("./pages/TeamImplementation/TeamImplementation")
);
const Venue = lazy(() => import("./pages/Venue/Venue"));
const ThemePage = lazy(() => import("./pages/ThemePage/ThemePage"));
const Rules = lazy(() => import("./pages/Rules/Rules"));
const Updates = lazy(() => import("./pages/Updates/Updates"));
const ProcessFlow = lazy(() => import("./pages/ProcessFlow/ProcessFlow"));
const Prizes = lazy(() => import("./pages/Prizes/Prizes"));
const Eligibility = lazy(() => import("./pages/Eligibility/Eligibility"));
const Register = lazy(() => import("./pages/Login/Login"));
const AdminPortal = lazy(() => import("./pages/AdminPortal/AdminPortal"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Faq = lazy(() => import("./pages/FAQ/Faq"));

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <UserProvider>
          <AuthProvider>
            <Routes>
              <Route path={indexRoute} element={<NavBar />}>
                <Route
                  index={true}
                  element={
                    <Suspense fallback={<></>}>
                      <Home />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={problemStatementsRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <ProblemStatements />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={processFlowRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <ProcessFlow />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={rulesRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Rules />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={teamRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Team />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={TeamImplementationRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <TeamImplementation />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={faqRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Faq />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={projectImplementationRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <ProjectImplementation />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={venueRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Venue />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={sbhthemesRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <ThemePage />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={updatesRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Updates />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={prizesRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Prizes />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path={eligibilityRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Eligibility />
                    </Suspense>
                  }
                ></Route>
                {/* <Route
                path={EmailRoute}
                element={
                  <Suspense fallback={<></>}>
                    <EmailModule />
                  </Suspense>
                }
              ></Route> */}
                <Route
                  path={loginRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <Register />
                    </Suspense>
                  }
                ></Route>
                <Route path={adminPortalRoute} element={<PrivateRoute />}>
                  <Route
                    index={true}
                    element={
                      <Suspense fallback={<></>}>
                        <AdminPortal />
                      </Suspense>
                    }
                  />
                </Route>
                {/* <Route path={adminPortalRoute} element={
                  <Suspense fallback={<></>}>
                    <AdminPortal />
                  </Suspense>
                }>
                </Route> */}
                <Route
                  path={contactUsRoute}
                  element={
                    <Suspense fallback={<></>}>
                      <ContactUs />
                    </Suspense>
                  }
                ></Route>
              </Route>
            </Routes>
          </AuthProvider>
        </UserProvider>
      </DataProvider>
      <img
        className="position-fixed up__arrow"
        style={{ bottom: "20px", right: "20px" }}
        width="40px"
        height="40px"
        alt=""
        src="/assets/arrow_up.png"
        role="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </BrowserRouter>
  );
}

export default App;
