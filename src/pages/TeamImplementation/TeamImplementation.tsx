const ProjectImplementation = () => {
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={"https://sih.gov.in/img/project-implementation.jpg"}
          alt={"projectImplementation"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center "
          style={{
            fontSize:
              "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
          }}
        >
          TEAM IMPLEMENTATION
        </h1>
      </div>
    </main>
  );
};

export default ProjectImplementation;
