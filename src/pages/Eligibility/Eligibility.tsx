import { lazy, Suspense } from "react";

const Header = lazy(() => import("../../components/Header/Header"));

const Eligibility = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text=""
          image="https://images.shiksha.com/mediadata/images/articles/1671001988phpTUr4cn.jpeg"
        />
      </Suspense>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center caveat fw-bold my-5 text-uppercase"
          style={{ color: "var(--heading-color)" }}
        >
          Eligibility
        </h2>
        <h3 className="fw-bold w-75">SBH Senior</h3>
        <ul className="w-75 fs-5">
          <li>
            <b>College Students</b>
          </li>
          <li>
            <b>University Students</b>
          </li>
          <li>
            <b>Polytechnic/ Diploma Students</b>
          </li>
        </ul>
        <h3 className="fw-bold w-75 mt-3">SBH Junior</h3>
        <ul className="w-75 mb-5 fs-5">
          <li>
            <b>Class 8th to 12th Standard Students</b>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default Eligibility;
