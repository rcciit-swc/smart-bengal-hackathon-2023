
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
          className="carousel-caption fw-bold text-center"
          style={{ fontSize: "60px" }}
        >
          UPDATES
        </h1>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <h2
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          Important Dates and Deadlines
        </h2>
        <ul style={{fontSize:"20px"}}>
          <li><b>Registration Deadline:</b> 28th February, 2023.</li>
          <li><b>Idea Submission Deadline:</b> 28th February, 2023..</li>
          <li><b>Shortlisted Teams Announcement:</b> 31st March.2023.</li>
          <li><b>Smart Bengal Hackathon Begins:</b> 11th April,2023 for SBH Junior & 12th April, 2023 for SBH Senior</li>
        </ul>
      </div>
    </main>
  )
}

export default Updates