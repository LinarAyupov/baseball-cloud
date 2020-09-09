import React, { useState } from "react";
import { Container, IconWrap, MenuList, DropDownItem } from "./styled";
import BlueArrowSvg from "../../SvgComponents/BlueArrowSvg";
const DropDownBtn = ({
  menuWidth,
  options,
  isShowValue = false,
  title = "",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const getValue = ({ target }) => {
    const { innerHTML } = target;
    let searchType = innerHTML;
    if (searchType === "None") {
      searchType = "";
    }
    setValue(innerHTML);
    onChange(searchType);
  };
  const renderOptions = () => {
    if (options) {
      return options.map((opt, index) => (
        <DropDownItem key={index} onClick={getValue}>
          {opt}
        </DropDownItem>
      ));
    }
  };

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <span>
        {title} {value && isShowValue && value !== "None" ? `(${value})` : ""}
      </span>
      <IconWrap isOpen={isOpen}>
        <BlueArrowSvg />
      </IconWrap>
      <MenuList isOpen={isOpen} menuWidth={menuWidth}>
        {renderOptions()}
      </MenuList>
    </Container>
  );
};

export default DropDownBtn;
