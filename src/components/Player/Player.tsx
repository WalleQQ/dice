import classNames from 'classnames';
import React, {FC} from 'react';
import styles from './Player.module.css';

interface PlayerProps {
  title: string;
  score: number;
  current: number;
  currentClass?: boolean;
}

export const Player: FC<PlayerProps> = ({
  title,
  score,
  current,
  currentClass,
}) => {
  return (
    <div className={styles.player}>
      <h2
        className={classNames(styles.player__title, {
          [styles.isCurrent]: currentClass,
        })}
      >
        {title}
      </h2>
      <span className={styles.player__score}>{score}</span>
      <div className={styles.player__current}>
        <p className={styles.player__currentHeading}>Current</p>
        <p className={styles.player__currentScore}>{current}</p>
      </div>
    </div>
  );
};
