/**
 * @description: the blob circle component is a colored blob circle with a blur effect and positioned absolute
 * @author: @danger-ahead
 * @param color: the color of the circle
 * @param width: the width of the circle
 * @param height: the height of the circle
 * @param blur: the blur radius of the circle
 * @param top: the top position of the circle
 * @param left: the left position of the circle
 * @param right: the right position of the circle
 * @param bottom: the bottom position of the circle
 * @param zIndex: the z-index of the circle
 * @returns a blob circle
 */

const Circle = ({
  color = "#F88208",
  width = "200px",
  height = "200px",
  blur ,
  top,
  left,
  right,
  bottom,
  zIndex = "-1",
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
    className={`${color}_circle`}
      style={{
        position: "absolute",
        width: width,
        height: height,
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
