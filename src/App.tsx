import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { indexRoute } from "./Routes";
import { lazy, Suspense } from "react";

// splitting different page bundles
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
