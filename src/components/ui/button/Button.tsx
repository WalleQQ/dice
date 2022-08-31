import React, {FC, ReactNode} from 'react';
import styles from './Button.module.css';

interface ButonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: FC<ButonProps> = ({children, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
