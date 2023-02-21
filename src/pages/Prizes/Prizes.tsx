import { Table } from "react-bootstrap";

const PrizesNotes = [
  {
    description:
      "Total cash prizes worth INR 2,00,000 + goodies, internship opportunities for SBH Senior & SBH  Junior both",
  },
  {
    description: "Certificate of excellence for top 3 teams",
  },
  {
    description: "Certificate of distinction for top 10 teams",
  },
  {
    description: "Certificate of participation to all teams",
  },
];

const Prizes = () => {
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={
            "https://www.lupin.com/wp-content/uploads/2021/04/about-us-Awards-Recognition-2.jpg"
          }
          alt={"prizes"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center"
          style={{ fontSize: "60px" }}
        >
          PRIZES
        </h1>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5 text-uppercase"
          style={{ color: "var(--heading-color)" }}
        >
          Rewards and Prizes
        </h2>
        <p className="w-75">
          All participants will be provided a certificate of participation. Top
          3 teams will be awarded with prize money, exciting goodies and a
          certificate of excellence for SBH Junior and SBH Senior.
        </p>
        <Table
          striped
          bordered
          hover
          responsive
          className="w-100 mt-4 mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          <thead>
            <tr>
              <th className="text-center">Prize</th>
              <th className="text-center">SBH Senior</th>
              <th className="text-center">SBH Junior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.icons8.com/emoji/35/null/1st-place-medal-emoji.png"
                    alt="1st prize"
                  />
                  <b>1st Prize</b>
                </span>
              </td>
              <td className="text-center">₹ 30,000</td>
              <td className="text-center">₹ 25,000</td>
            </tr>
            <tr>
              <td>
                <span className="d-flex align-items-center justify-content-between">
                  <img
                    src="https://img.icons8.com/emoji/35/null/2nd-place-medal-emoji.png"
                    alt="2nd prize"
                  />
                  <b>2nd Prize</b>
                </span>
              </td>
              <td className="text-center">₹ 20,000</td>
              <td className="text-center">₹ 15,000</td>
            </tr>
            <tr>
              <td>
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.icons8.com/emoji/35/null/3rd-place-medal-emoji.png"
                    alt="3rd prize"
                  />
                  <b>3rd Prize</b>
                </span>
              </td>
              <td className="text-center">₹ 10,000</td>
              <td className="text-center">₹ 10,000</td>
            </tr>
          </tbody>
        </Table>
        <ul className="w-75">
          {PrizesNotes.map((item, index) => (
            <li
              key={index}
              className="my-2 text-start"
              style={{
                listStyle: "square",
                color: "var(--heading-color)",
                fontSize: "25px",
              }}
            >
              <p
                style={{
                  color: "var(--bs-body-color)",
                  fontSize: "var(--bs-body-font-size)",
                  lineHeight: "var(--bs-body-line-height)",
                }}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <h3 className="w-75 fs-6 text-center mb-5">
          * All the prizes and certificate will be Released Within 30 days after
          the event is over
        </h3>
      </div>
    </main>
  );
};

export default Prizes;
