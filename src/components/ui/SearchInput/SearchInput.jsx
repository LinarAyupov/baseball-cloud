import React, { useState } from "react";
import { Input, InputWrap, IconWrap, DropDownItem } from "./styled";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";
import BlueArrowSvg from "../../SvgComponents/BlueArrowSvg";
import DropdownList from "../../commons/DropdownList";
const SearchInput = ({
  iconType = "arrow",
  width,
  rotatable,
  options = [],
  getValue,
  getId,
  placeholder,
  border = false,
  type = "text",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderOptions = ({ options }) => {
    return options.map((opt) => (
      <DropDownItem key={opt.id} id={opt.id} onClick={() => getId(opt.id)}>
        {opt.title}
      </DropDownItem>
    ));
  };
  return (
    <InputWrap>
      <Input
        type={type}
        rotatable={rotatable}
        iconType={iconType}
        placeholder={placeholder}
        width={width}
        border={border}
        onChange={(e) => getValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 300)}
      />
      <IconWrap id="icon">
        {iconType === "search" ? <SearchIconSvg /> : <BlueArrowSvg />}
      </IconWrap>
      {options && options.length !== 0 ? (
        <DropdownList isOpen={isOpen} setIsOpen={setIsOpen}>
          {renderOptions({ options })}
        </DropdownList>
      ) : null}
    </InputWrap>
  );
};

export default SearchInput;
