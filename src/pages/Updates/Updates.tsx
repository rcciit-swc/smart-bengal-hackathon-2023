const Updates = () => {
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={
            "https://images.pexels.com/photos/5408684/pexels-photo-5408684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          alt={"updates"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center "
          style={{
            fontSize:
              "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
          }}
        >
          REGISTRATION AND UPDATES
        </h1>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          Important Dates and Deadlines
        </h2>
        <ul className="w-75" style={{ fontSize: "20px" }}>
          <li>
            <b>Registration & Idea Submission:</b> Begins on 28 Feb 2023 and ends on 10 Mar 2023.
          </li>
          <li>
            <b>Shortlisted Teams Announcement:</b> 25th March.2023.
          </li>
          <li>
            <b>Smart Bengal Hackathon Begins:</b> 11th April,2023 for SBH Junior
            & 12th April, 2023 for SBH Senior
          </li>
        </ul>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-3"
          style={{ color: "var(--heading-color)" }}
        >
          Registration Fees
        </h2>
        <ul className="w-75" style={{ fontSize: "20px"}}>
          <li>
            <b>SBH SENIOR :</b> - Rs. 2000/- per team
          </li>
          <li>
            <b>SBH JUNIOR :</b> - Rs. 1000/- per team
          </li>
        </ul>
        <span className="mb-4 text-center">Registration fees need to be paid after the shortlisting.</span>
      </div>
    </main>
  );
};

export default Updates;
