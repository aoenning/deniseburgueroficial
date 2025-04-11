import React from "react";
import * as s from "./styles";

function Input({ value, onChange, type, backgroudColor, width }) {
  return (
    <s.Container width={width} backgroudColor={backgroudColor}>
      <s.Input
        type={type}
        value={value}
        onChange={(txt) => {
          onChange(txt);
        }}
        backgroudColor={backgroudColor}
      />
    </s.Container>
  );
}

export default Input;
