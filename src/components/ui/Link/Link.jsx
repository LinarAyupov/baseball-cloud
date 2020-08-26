import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ className, children, to }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

export default Link;
