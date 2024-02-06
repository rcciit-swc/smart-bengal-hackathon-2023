const Rules = () => {
  return (
    <main className="d-flex flex-column align-items-center mb-5 w-100">
      <div
        style={{ color: "var(--heading-color)" }}
        className="d-flex flex-row fw-bold fs-1 text-uppercase text-center caveat"
      >
        Rules and Regulations
      </div>
      {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold py-4"
          style={{color: "black"}}>COMING SOON</h1> */}
      <div className="w-75 my-3">
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          <li>
          Maximum allowed student member (SBH- Senior) in each team is 06 excluding 01 mentor (industry/ academic institution). Mentor is compulsory for an idea submission.
          </li>
          <li>
          Maximum allowed student member (SBH- Junior) in each team is 04 excluding 01 mentor. Mentor is compulsory for an idea submission.
          </li>
          <li>One mentor may supervise multiple teams.</li>
          <li>
          One student member may include himself/herself in different projects, however can only participate in one of the final selected project (if any).
          </li>
          <li>
          Participants from multiple institutions/ organizations can collaborate in a single team provided consent letter from all respective institutions/organizations are submitted.
          </li>
          <li>
          Each participate must treat all team members, competitors, judges, coaches, volunteers, etc, with respect and courtesy, abiding by the guidelines of SBH-2024.
          </li>
          <li>
          Prizes won by a particular team are to be shared between all team members.
          </li>
          <li>All team members should be present at the event.</li>
          <li>
            Team members can of course take advice and support from
            organizers,volunteers, sponsors, and others.
          </li>
          <li>
            All execution of a project should be done during the hackathon with
            the following guidelines:
          </li>
          <ul>
            <li>Two judgment sessions will be allotted to each team.</li>
            <li>
              First judgment session will start after 2hrs of the event
              inauguration. Final round of judgement will take place after 3 hrs
              of first evaluation.
            </li>
            <li>Partial hardware and software design in advance is allowed.</li>
            <li>
              The final decision about the project solely depends upon the
              jury’s/ panel member’s discretion.
            </li>
          </ul>
          <li>
            Teams can work on ideas that have already been done. If somebody
            wants to work on a common idea they should be allowed to do so and
            should be judged on the quality of their hack.
          </li>
          <li>
            Teams can use libraries, frameworks, or open-source code in their
            projects. However, final version of the product should not violate
            any existing IPR.
          </li>
          <li>
            Teams must stop hacking once the time is up. No changes or adding
            new features are allowed after that.
          </li>
          <li>
            Teams can be disqualified from the competition at the organizers’
            discretion. Reasons might include but are not limited to breaking of
            the SBH Rules & Regulations, behaving in a way that violates the
            code of conduct and other unsporting behaviour.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default Rules;
