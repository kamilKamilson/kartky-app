import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $type?: 'primary' | 'secondary' | 'tertiary';
  isFull?: boolean;
}

const Button = ({
  $type = 'primary',
  isFull = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  console.log(`${styles.button} ${$type}`);

  return (
    <button className={`${styles.button} ${styles[$type]} ${isFull && styles.full}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
