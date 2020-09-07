import * as React from "react";

function CalenderSvg(props) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <path
        fill="#48BBFF"
        d="M14.222 1.778h-.889v1.778h-2.666V1.778H5.333v1.778H2.667V1.778h-.89C.8 1.778 0 2.578 0 3.556v10.666C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V3.556c0-.978-.8-1.778-1.778-1.778zm0 12.444H1.778v-7.11h12.444v7.11zM4.89 0H3.11v3.111h1.78V0zm8 0h-1.78v3.111h1.778V0z"
      />
    </svg>
  );
}

export default CalenderSvg;
