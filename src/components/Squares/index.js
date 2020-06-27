import React from 'react';

import * as S from "./styled";

const Squares = () => {

  return (
    <S.SquareList>
      {Array.from({length: 15}).map((_, i) => {
        const random = (min, max) => Math.random() * (max - min) + min;
        const size = Math.floor(random(10, 120));
        const position = random(1, 100);
        const delay = random(0.1, 5);
        const duration = random(12, 24);
        const animationTiming = random(12, 24);

        return (
          <S.SquareItem
            key={i}
            size={size}
            position={position}
            delay={delay}
            duration={duration}
          />);
      })}
    </S.SquareList>
  );
}

export default Squares;
