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
        <ol>
          <li>
            Maximum allowed student member in each team is 6 excluding 1
            mentor(industry/ academic institution). Mentor is compulsory for
            idea submission.
          </li>
          <li>One guide can mentor different teams.</li>
          <li>
            One student member may include name in different projects, however
            can only participate in only one of the final selected project (if
            any).
          </li>
          <li>
            Participants from multiple institutions/ organizations can
            collaborate in a single team provided consent letter from all
            respective institutions/organizations are submitted.
          </li>
          <li>
            Each participate must treat all team members, competitors, judges,
            coaches,volunteers, etc, with respect and courtesy, abiding by the
            guidelines of SBH-2024.
          </li>
          <li>All prizes are to be shared between all team members.</li>
          <li>
            Teams should be made up exclusively of students who are not
            organizers,volunteers, judges, sponsors, or in any other privileged
            position at the event.
          </li>
          <li>
            All team members should be present at the event. Leaving the venue
            for some time to hack elsewhere is fine.
          </li>
          <li>
            Team members can of course take advice and support from
            organizers,volunteers, sponsors, and others.
          </li>
          <li>
            All execution of a project should be done during the hackathon with
            the following guidelines:
          </li>
          <ul>
            <li>Three judgment sessions will be allotted to each team.</li>
            <li>
              First judgment session will start after 2hrs of the event
              inauguration.Other two rounds will take place after consecutive 3
              hrs and 4 hrs respectively.
            </li>
            <li>Partial hardware and software design in advance is allowed</li>
            <li>
              The final decision about the project solely depends upon the
              jury’s/ panel member’s discretion.
            </li>
          </ul>
          <li>Teams can use any idea they had before the event.</li>
          <li>
            Teams can work on ideas that have already been done. If somebody
            wants to work on a common idea they should be allowed to do so and
            should be judged on the quality of their hack.
          </li>
          <li>
            Teams can use libraries, frameworks, or open-source code in their
            projects.
          </li>
          <li>
            Teams must stop hacking once the time is up. No changes or adding
            new features are allowed after that.
          </li>
          <li>
            Teams can be disqualified from the competition at the organizers’
            discretion.Reasons might include but are not limited to breaking the
            Competition Rules, behaving in a way that violates the code of
            conduct and other unsporting behavior.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default Rules;
