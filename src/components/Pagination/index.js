import React from 'react';
import propTypes from "prop-types";
import { Link } from 'gatsby';
import { LeftArrowAlt as Left } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt as Right } from "@styled-icons/boxicons-regular/RightArrowAlt";

import * as S from "./styled";

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}><Left size={30} /> página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage}>proxima página <Right size={30}  /></Link>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination;
