import React from "react";
import { Button } from "./styled";

const SubmitButton = ({ children, type, disabled }) => {
  return (
    <Button type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export default SubmitButton;
