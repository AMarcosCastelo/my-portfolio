import React from 'react';
import * as S from "./styled";

const BtnContact = () => (
  <S.Btn
    to="/contact"
    cover
    direction="left"
    bg="#333333"
    duration={0.6}
  >ENTRE EM CONTATO</S.Btn>
);

export default BtnContact;
