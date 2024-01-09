import { useState } from 'react';

import style from './Input.module.scss';

interface Props {
  placeholder: string;
  setInputValue: (value: string | undefined) => void;
  value: string | undefined;
}

const Input: React.FC<Props> = ({ placeholder, setInputValue, value }) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setInputValue(e.target.value);
  };

  return (
    <input
      className={style.inp}
      type="number"
      inputMode={'numeric'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChangeValue(e)}
    />
  );
};

export default Input;
