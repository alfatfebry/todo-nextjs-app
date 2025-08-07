import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';
import Styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  size: 'small' | 'medium' | 'long';
  variant: 'primary' | 'secondary' | 'danger';
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  size,
  variant = 'primary',
  ...rest
}) => {
  return (
    <>
      <button
        className={clsx(Styles.button, Styles[variant], Styles[size])}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
