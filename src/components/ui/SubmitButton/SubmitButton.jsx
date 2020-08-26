import React from "react";
import { Button } from "./styled";

const SubmitButton = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};

export default SubmitButton;
