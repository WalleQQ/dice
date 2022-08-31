import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {rollSlice} from '../../store/reducers/userRoll';
import styles from '../Game/Game.module.css';
import {Players} from '../Players/Players';
import {Button} from '../ui/button/Button';

export const Game = () => {
  const {resetGame} = rollSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <section className={styles.game}>
      <h1 className='hidden'>Игра в кости</h1>
      <Button onClick={() => dispatch(resetGame())}>New Game</Button>
      <Players />
    </section>
  );
};
