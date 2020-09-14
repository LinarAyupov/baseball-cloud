import React, { useRef } from "react";
import { DropdownWrap } from "./styled";
import { useOnClickOutside } from "../../customHoks/customHoks";

const DropdownList = ({ children, menuWidth, isOpen, setIsOpen }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <DropdownWrap ref={ref} menuWidth={menuWidth} isOpen={isOpen}>
      {children}
    </DropdownWrap>
  );
};

export default DropdownList;
