const Header = ({
  text,
  image,
  textColor = "white",
}: {
  text: string;
  image: string;
  textColor?: string;
}) => {
  return (
    <>
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={image}
          alt={"projectImplementation"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="fw-bold text-center position-absolute w-100"
          style={{
            bottom: "5px",
            fontSize:
              "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
            color: textColor,
          }}
        >
          {text}
        </h1>
      </div>
    </>
  );
};

export default Header;
