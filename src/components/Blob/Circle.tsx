const Circle = ({
  color = "#F88208",
  width = "200px",
  height = "200px",
  blur = "70",
  top,
  left,
  right,
  bottom,
  zIndex,
}: {
  color?: string;
  width?: string;
  height?: string;
  blur?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: width,
        height: height,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        borderRadius: "50%",
        zIndex: zIndex,
      }}
    ></div>
  );
};

export default Circle;
