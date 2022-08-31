import React, {FC} from 'react';
import {dieImg} from '../../mock/die-image';
import {DieImage} from '../Die-image/DieImage';
import styles from './DieImages.module.css';

interface DieImagesProps {
  die1: number;
  die2: number;
}

export const DieImages: FC<DieImagesProps> = ({die1, die2}) => {
  return (
    <div className={styles.dieImgContainer}>
      {dieImg.map((item) => (
        <DieImage die1={die1} die2={die2} item={item} key={item.id} />
      ))}
    </div>
  );
};
