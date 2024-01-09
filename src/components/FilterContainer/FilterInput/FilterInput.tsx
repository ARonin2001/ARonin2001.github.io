import React, { useState } from 'react';
import style from './FilterInput.module.scss';

type FilterInputProps = {
  setInputValue: (value: string) => void;
  value: string | undefined;
};

const FilterInput: React.FC<FilterInputProps> = ({ setInputValue, value }) => {
  const onChangeName = (e: { target: { value: string } }) => {
    let value = e.target.value;

    setInputValue(value);
  };

  return (
    <input
      type="text"
      id="Name"
      className={style.input}
      placeholder="Name"
      value={value}
      onChange={(e) => onChangeName(e)}
    />
  );
};

export default FilterInput;
