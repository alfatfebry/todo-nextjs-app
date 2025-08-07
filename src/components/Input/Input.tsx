import React from 'react';
import Styles from './Input.module.scss';
import clsx from 'clsx';

type InputProps = {
  variant?: 'text' | 'email' | 'number' | 'tel';
};

export const Input: React.FC<InputProps> = ({ variant = 'text' }) => {
  return (
    <>
      <input className={clsx(Styles.input, Styles[variant])} />
    </>
  );
};
