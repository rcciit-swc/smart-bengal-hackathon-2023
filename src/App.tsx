import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { collegeRoute, guidelinesRoute, indexRoute, schoolRoute } from "./Routes";
import { lazy, Suspense } from "react";
import { DataProvider } from "./contexts/Data";

// splitting different page bundles
const Home = lazy(() => import("./pages/Home/Home"));
const School = lazy(() => import("./pages/Guidelines/Page.school"));
const College = lazy(() => import("./pages/Guidelines/Page.college"));

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path={indexRoute} element={<NavBar />}>
            <Route
              index={true}
              element={
                <Suspense fallback={<></>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path={guidelinesRoute}
            >
              
            </Route>
          </Route>
        </Routes>
      </DataProvider>
      <img
        className="position-fixed"
        style={{ bottom: "20px", right: "20px" }}
        alt="scroll to top"
        src="https://img.icons8.com/color/40/000000/login-rounded-up--v1.png"
        role="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </BrowserRouter>
  );
}

export default App;
