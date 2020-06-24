import React from 'react';
import * as S from "./styled";
import getThemeColor from "../../utils/getThemeColor";

const BtnContact = () => (
  <S.Btn
    to="/contact"
    cover
    direction="left"
    bg={getThemeColor()}
    duration={0.6}
  >ENTRE EM CONTATO</S.Btn>
);

export default BtnContact;
