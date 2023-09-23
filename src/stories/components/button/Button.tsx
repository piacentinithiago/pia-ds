import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import './button.scss';

interface Props {
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  outline?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  outline = false,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={`btn ${outline ? `btn-outline-${variant}` : `btn-${variant}`} btn-${size}`}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
};
