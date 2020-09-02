import React, { useState, useEffect } from "react";
import { SingleSelect, SelectWrap, Label, ErrorMassage } from "./styled";

const FormSelect = ({
  input,
  placeholder,
  selectType = "",
  isMulti,
  meta,
  options = [],
  initialOptValue = null,
}) => {
  const { onChange } = input;
  const [isActive, onChangeIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const setDefaultValue = (options, value) => {
    let defaultValue = options.find((opt) => opt.value === value);
    return defaultValue;
  };
  const toggleLabelVisibility = () => {
    onChangeIsActive(!isActive);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption });
    return selectedOption;
  };

  const inputProps = {
    ...input,
    onChange: ({ label, value }) => {
      onChange(label);
      handleChange({ value });
    },
  };

  return (
    <SelectWrap selectType={selectType}>
      <Label
        isActive={isActive}
        id="input-label"
        onClick={toggleLabelVisibility}
      >
        {placeholder}
      </Label>
      {isMulti ? (
        <SingleSelect
          {...input}
          classNamePrefix="Select"
          defaultValue={setDefaultValue(options, initialOptValue)}
          options={options}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
          isMulti
        />
      ) : (
        <SingleSelect
          {...inputProps}
          classNamePrefix="Select"
          defaultValue={setDefaultValue(options, initialOptValue)}
          options={options}
          value={selectedOption.value}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
        />
      )}
      {meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </SelectWrap>
  );
};

export default FormSelect;
