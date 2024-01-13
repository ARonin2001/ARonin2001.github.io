import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  setValue: (value?: string) => void;
  value?: string;
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  setValue,
  type,
  ...res
}) => {
  const onFocuceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const onChangeName = (e: { target: { value: string } }) => {
    let value = e.target.value;

    setValue(value);
  };

  return (
    <input
      type={type}
      id={name}
      placeholder={name}
      name={name}
      value={value}
      onChange={(e) => onChangeName(e)}
      onFocus={(e) => onFocuceInput(e)}
      {...res}
    />
  );
};

export default Input;
