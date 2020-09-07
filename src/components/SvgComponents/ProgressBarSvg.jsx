import * as React from "react";

function ProgressBarSvg(props) {
  return (
    <svg
      className="prefix__rc-progress-line"
      viewBox="0 0 100 1"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        className="prefix__rc-progress-line-trail"
        d="M.5.5h99"
        strokeLinecap="round"
        stroke="#eff1f3"
        fill="none"
      />
      <path
        className="prefix__rc-progress-line-path"
        d="M.5.5h99"
        strokeLinecap="round"
        stroke="#ffd01a"
        strokeDasharray={`${props.percent}, 100px`}
        style={{
          transition:
            "stroke-dashoffset .3s ease 0s,stroke-dasharray .3s ease 0s,stroke .3s linear 0s,.06s",
        }}
        fill="none"
      />
    </svg>
  );
}

export default ProgressBarSvg;
