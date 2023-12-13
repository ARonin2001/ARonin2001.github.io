import { useState } from 'react';

import style from './Input.module.scss';

interface Props {
  placeholder: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  let [value, setValue] = useState('');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setValue(e.target.value);
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
