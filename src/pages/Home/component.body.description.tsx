import { useEffect, useState } from "react";

const DescriptionCard = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    import(`../../assets/description_card_${index}.png`).then((icon) => {
      setIcon(icon.default);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ height: "280px", width: "200px" }}
      className="d-flex flex-column justify-content-start align-items-center mx-3 mb-5 position-relative"
    >
      <img
        src={icon}
        width="80px"
        height="auto"
        className="mb-2"
        alt="desc card icon"
        style={{
          filter: "opacity(1) drop-shadow(0px 0px 5px var(--primary-color))",
        }}
      />
      <span
        style={{ color: "var(--primary-color)" }}
        className="fw-bold fs-4 text-capitalize"
      >
        {title}
      </span>
      <span className="text-center" style={{ color: "var(--primary-color)" }}>
        {desc}
      </span>
      <span
        className="position-absolute"
        style={{
          bottom: "0",
          height: "5px",
          width: "100%",
          backgroundColor: "var(--primary-color)",
        }}
      ></span>
    </div>
  );
};

export default DescriptionCard;
