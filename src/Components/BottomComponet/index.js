import React from "react";
import * as s from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "../../Styles";

function BottomComponet({
  disabled,
  icon,
  text,
  backgroudColor,
  bordercolor,
  textColor,
  onClick,
  loading,
  width,
  height,
}) {
  return (
    <s.Container
      width={width}
      height={height}
      disabled={disabled}
      backgroudColor={backgroudColor}
      bordercolor={bordercolor}
      onClick={onClick}
    >
      {/* {loading ? (
        <CircularProgress size={20} style={{ color: colors.white }} />
      ) : ( */}
      <s.Title textColor={textColor}>{text}</s.Title>
      {/* )} */}
    </s.Container>
  );
}

export default BottomComponet;
