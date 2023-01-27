import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { indexRoute } from "./Routes";
import { lazy, Suspense } from "react";
import { DataProvider } from "./contexts/Data";

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
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
