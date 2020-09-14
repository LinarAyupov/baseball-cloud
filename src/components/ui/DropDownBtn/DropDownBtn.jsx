import React, { useState } from "react";
import { Container, IconWrap, DropDownItem } from "./styled";
import BlueArrowSvg from "../../SvgComponents/BlueArrowSvg";
import DropdownList from "../../commons/DropdownList";
const DropDownBtn = ({
  menuWidth,
  options = [],
  isShowValue = false,
  title = "",
  onChange,
  getId,
  defaultValue = "",
  right,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const getValue = ({ target }) => {
    const { innerHTML } = target;
    let searchType = innerHTML;
    if (searchType === "None") {
      searchType = "";
    }
    setValue(innerHTML);
    onChange(searchType);
  };
  const renderOptions = ({ options }) => {
    if (options) {
      return options.map((opt, index) => {
        if (typeof opt === "string") {
          return (
            <DropDownItem key={index} onClick={getValue}>
              {opt}
            </DropDownItem>
          );
        } else {
          return (
            <DropDownItem key={index} onClick={() => getId(opt.id)}>
              {opt.title}
            </DropDownItem>
          );
        }
      });
    }
  };
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {title} {value && isShowValue && value !== "None" ? `(${value})` : ""}
      <IconWrap isOpen={isOpen}>
        <BlueArrowSvg />
      </IconWrap>
      {options.length !== 0 && (
        <DropdownList
          isOpen={isOpen}
          menuWidth={menuWidth}
          setIsOpen={setIsOpen}
        >
          {renderOptions({ options })}
        </DropdownList>
      )}
    </Container>
  );
};

export default DropDownBtn;
