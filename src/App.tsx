import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { indexRoute, problemStatementsRoute,sbhthemesRoute } from "./Routes";
import { lazy, Suspense } from "react";
import { DataProvider } from "./contexts/Data";
import ProblemStatements from "./pages/ProblemStatements/ProblemStatements";
import ThemePage from "./pages/ThemePage/ThemePage";

// splitting different page bundles
const Home = lazy(() => import("./pages/Home/Home"));

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
              path={sbhthemesRoute}
              element={
                <Suspense fallback={<></>}>
                  <ThemePage />
                </Suspense>
              }
            ></Route>
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
