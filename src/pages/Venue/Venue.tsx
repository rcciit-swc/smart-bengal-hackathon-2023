const Venue = () => {
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={
            "https://college4u.in/wp-content/uploads/2018/03/RCC3-830x254.jpg"
          }
          alt={"venue"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center"
          style={{ fontSize: "60px" }}
        >
          VENUE
        </h1>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          RCC Institute of Information Technology, Canal South Road,Beliaghata
          Kolkata-700015,West Bengal ,India
        </h2>
        <div className="d-flex flex-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.1384452715624!2d88.39580110048716!3d22.55838225625057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ad44b718c770205!2sRCC%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20(New%20Campus)!5e0!3m2!1sen!2sin!4v1675389260805!5m2!1sen!2sin"
            title="RCC Institute of Information Technology"
            width="800"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            target={"_blank"}
            rel="noreferrer"
            id="rcciit-direction"
            className="w-100 text-center fw-bold my-5"
            href="https://www.google.com/maps?saddr=My+Location&daddr=Rcc+institute+of+Information+Technology "
            style={{
              color: "var(--heading-color)",
              textDecoration: "underline",
              fontSize: "20px",
            }}
          >
            Visit RCCIIT
          </a>
        </div>
      </div>
    </main>
  );
};

export default Venue;
