import React, { useState } from "react";
import { InputSelect, SelectWrap, Label, ErrorMassage } from "./styled";

const Select = ({
  input,
  placeholder,
  selectType = "",
  isMulti = false,
  meta,
  options = [],
}) => {
  const [isActive, onChangeIsActive] = useState(false);
  const toggleLabelVisibility = () => {
    onChangeIsActive(!isActive);
  };
  return (
    <SelectWrap selectType={selectType}>
      <InputSelect
        {...input}
        classNamePrefix="Select"
        options={options}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        placeholder={placeholder}
        onFocus={toggleLabelVisibility}
        onBlur={toggleLabelVisibility}
        isMulti={isMulti}
      />
      <Label isActive={isActive} id="input-label">
        {placeholder}
      </Label>
      {meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </SelectWrap>
  );
};

export default React.memo(Select);
