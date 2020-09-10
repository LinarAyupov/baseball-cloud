import React, { useState } from "react";
import { Input, InputWrap, IconWrap, DropDownItem } from "./styled";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";
import BlueArrowSvg from "../../SvgComponents/BlueArrowSvg";
import { DropdownList } from "../../../commonStyles/styled";
const SearchInput = ({
  iconType = "arrow",
  width,
  rotatable,
  options = [],
  getValue,
  getId,
  placeholder,
  border = false,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
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
        rotatable={rotatable}
        iconType={iconType}
        placeholder={placeholder}
        width={width}
        border={border}
        onChange={(e) => getValue(e.target.value)}
        onFocus={() => setDropdownActive(true)}
        onBlur={() => setTimeout(() => setDropdownActive(false), 300)}
      />
      <IconWrap id="icon">
        {iconType === "search" ? <SearchIconSvg /> : <BlueArrowSvg />}
      </IconWrap>
      {options && options.length !== 0 ? (
        <DropdownList dropdownActive={dropdownActive}>
          {renderOptions({ options })}
        </DropdownList>
      ) : null}
    </InputWrap>
  );
};

export default SearchInput;
