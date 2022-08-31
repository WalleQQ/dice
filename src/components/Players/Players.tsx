import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {rollSlice} from '../../store/reducers/userRoll';
import {DieImages} from '../Die-images/DieImages';
import {Player} from '../Player/Player';
import {Button} from '../ui/button/Button';
import styles from './Players.module.css';

export const Players = () => {
  const {die1, die2, firstUserScore, secondUserScore} = useAppSelector(
    (state) => state.rollReducer
  );
  const {userRoll, saveResult, resetResult} = rollSlice.actions;
  // const {userRoll, saveFirstUserRoll, saveSecondUserRoll} = rollSlice.actions;
  const dispatch = useAppDispatch();

  const [turnCount, setTurnCount] = useState(0);
  const [maxScore, setMaxScore] = useState(100);
  const [firstUserTitle, setFirstUserTitle] = useState('Player 1');
  const [secondUserTitle, setSecondUserTitle] = useState('Player 2');

  const onHoldClick = () => setTurnCount((prevState) => prevState + 1);
  const handleMaxScoreChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = Number(evt.target.value);
    setMaxScore(enteredValue);
  };

  useEffect(() => {
    if (turnCount % 2 === 0) {
      dispatch(saveResult(2));
    } else {
      dispatch(saveResult(1));
    }
  }, [turnCount]);

  useEffect(() => {
    if (firstUserScore >= maxScore) {
      setFirstUserTitle('Winner!');
    } else if (secondUserScore >= maxScore) {
      setSecondUserTitle('Winner!');
    }
  }, [firstUserScore, secondUserScore]);

  useEffect(() => {
    if (die1 === 6 && die2 === 6) {
      dispatch(resetResult());
      onHoldClick();
    }
  }, [die1]);

  return (
    <div className={styles.players}>
      {turnCount % 2 === 0 ? (
        <Player
          title={firstUserTitle}
          current={die1 + die2}
          score={firstUserScore}
          currentClass={true}
        />
      ) : (
        <Player
          title={firstUserTitle}
          current={0}
          score={firstUserScore}
          currentClass={false}
        />
      )}
      <div className={styles.players__controls}>
        <DieImages die1={die1} die2={die2} />
        <Button onClick={() => dispatch(userRoll(0))}>Roll dice</Button>
        <Button onClick={onHoldClick}>Hold</Button>
        <input
          className={styles.players__controlsInput}
          type='number'
          onChange={handleMaxScoreChange}
          placeholder='Final score'
        />
      </div>
      {turnCount % 2 !== 0 ? (
        <Player
          title={secondUserTitle}
          current={die1 + die2}
          score={secondUserScore}
          currentClass={true}
        />
      ) : (
        <Player
          title={secondUserTitle}
          current={0}
          score={secondUserScore}
          currentClass={false}
        />
      )}
    </div>
  );
};
