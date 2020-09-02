import React, { useState, useEffect } from "react";
import { SingleSelect, SelectWrap, Label, ErrorMassage } from "./styled";

const FormSelect = ({
  input,
  placeholder,
  selectType = "",
  isMulti,
  meta,
  options = [],
}) => {
  const { initial } = meta;
  const { onChange } = input;
  const [isActive, onChangeIsActive] = useState(false);
  const [opts, setOption] = useState(options);
  const [newValue, setValue] = useState("");
  const toggleLabelVisibility = () => {
    onChangeIsActive(!isActive);
  };
  console.log(opts);
  const newOptionValue = (e) => {
    setValue(e);
  };

  const inputProps = {
    ...input,
    onChange: (e) => {
      onChange(e);
    },
  };

  const handleKeyDown = (event) => {
    if (!newValue) return;
    if (event.key === "Enter") {
      setOption([...opts, { name: newValue, id: newValue }]);
      event.preventDefault();
    }
  };

  return (
    <SelectWrap selectType={selectType}>
      {isMulti ? (
        <SingleSelect
          {...input}
          classNamePrefix="Select"
          defaultValue={initial}
          options={opts}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          onInputChange={newOptionValue}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
          isMulti
        />
      ) : (
        <SingleSelect
          {...inputProps}
          classNamePrefix="Select"
          defaultValue={initial}
          options={options}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
        />
      )}
      <Label isActive={isActive} id="input-label">
        {placeholder}
      </Label>
      {meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </SelectWrap>
  );
};

export default FormSelect;
