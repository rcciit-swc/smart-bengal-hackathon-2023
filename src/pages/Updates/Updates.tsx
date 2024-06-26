import { Button } from "react-bootstrap";

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
        {/* <ul style={{ fontSize: "20px" }}>
                
                <li>
                  <b>Smart Bengal Hackathon Begins:</b> 16th April,2024 for SBH
                  Junior & 17th April, 2024 for SBH Senior
                </li>
              </ul>  */}
        <ul className="w-75" style={{ fontSize: "20px" }}>
          <li>
            <b>Registration & Idea Submission:</b> Begins on 07 Feb 2024 and
            ends on 20th March 2024.
          </li>
          <li>
            <b>Shortlisted Teams Announcement for Senior:</b> 6th April 2024
          </li>
          <li>
            <b>Smart Bengal Hackathon Begins:</b> 16th April,2024 for SBH Junior <br />
            <p style={{ marginLeft: "350px" }}>& 17th April, 2024 for SBH Senior</p>
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
        <ul className="w-75" style={{ fontSize: "20px" }}>
          <li>
            <b>SBH SENIOR :</b> - FREE
          </li>
          <li>
            <b>SBH JUNIOR :</b> - FREE
          </li>
        </ul>
         {/* <Button
          variant="success"
          className="mb-5"
          style={{
            outline: "none",
            border: "none",
            // backgroundColor: "var(--heading-color)",
            // color: "white",
            padding: "10px 30px",
            borderRadius: "50px",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1cU0g4wkYu0AWkGODDz7yPYB-hVHu8ZzT/edit#gid=2103771487"
            target="_blank"
            rel="noreferrer"
          >
            View Finalist Teams for SBH Senior (Hardware)
          </a>
        </Button> */}
        {/* <Button
          variant="success"
          className="mb-5"
          style={{
            outline: "none",
            border: "none",
            // backgroundColor: "var(--heading-color)",
            // color: "white",
            padding: "10px 30px",
            borderRadius: "50px",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1CXHVXLMlmgSm1V-xJSKjWkIk-onlH8CE/edit#gid=16674244"
            target="_blank"
            rel="noreferrer"
          >
            View Finalist Teams for SBH Senior (Software)
          </a>
        </Button>   */}
      </div>
    </main>
  );
};

export default Updates;
