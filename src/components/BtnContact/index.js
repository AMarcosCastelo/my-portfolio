import React from "react"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const BtnContact = () => {
  return (
    <S.Btn
      to="/contact"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
    >
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
      </svg>
      <div className="text">ENTRE EM CONTATO</div>
    </S.Btn>
  )
}

export default BtnContact
