import React, {FC} from 'react';

interface DieImageProps {
  die1: number;
  die2: number;
  item: {
    id: number;
    img: string;
  };
}

export const DieImage: FC<DieImageProps> = ({die1, die2, item}) => {
  return (
    <>
      {die1 === item.id ? (
        <img src={item.img} width='100' height='100' />
      ) : null}
      {die2 === item.id ? (
        <img src={item.img} width='100' height='100' />
      ) : null}
    </>
  );
};
