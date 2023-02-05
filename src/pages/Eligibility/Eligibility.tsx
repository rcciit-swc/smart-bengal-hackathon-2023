const Eligibility = () => {
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block eligibility"}
          src={
            "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23165124/Exam-Eligibility.jpg"
          }
          alt={"eligibilty"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center text-uppercase "
          style={{
            fontSize:
              "min(max(40px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
            color: "var(--primary-color)",
          }}
        >
          Eligibility
        </h1>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5 text-uppercase"
          style={{ color: "var(--heading-color)" }}
        >
          Eligibility
        </h2>
        <h3 className="fw-bold w-75">
            SBH Junior
        </h3>
        <ul className="w-75 ">
            <li className="fs-5">
                <b>Colleges: </b>
                Undergraduate and Engineering Students of Higher Education Institution
            </li>
        </ul>
        <h3 className="fw-bold w-75 mt-3">
            SBH Senior
        </h3>
        <ul className="w-75 mb-5">
            <li className="fs-5">
                <b>Schools: </b>
                Class 9th to 12th Students
            </li>
        </ul>
      </div>
    </main>
  );
};

export default Eligibility;
