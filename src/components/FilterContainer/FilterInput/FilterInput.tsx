import { useState } from 'react';
import style from './FilterInput.module.scss';

const FilterInput = () => {
  let [name, setName] = useState('');

  const onChangeName = (e: { target: { value: string } }) => {
    let value = e.target.value;

    setName(value);
  };

  return (
    <input
      type="text"
      id="Name"
      className={style.input}
      placeholder="Name"
      value={name}
      onChange={(e) => onChangeName(e)}
    />
  );
};

export default FilterInput;
