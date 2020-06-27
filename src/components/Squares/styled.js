import styled, {keyframes} from 'styled-components';

export const SquareList = styled.ul`
  
`;

const up = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  } 50% {
    opacity: 1;
  } to {
    opacity: 0;
    transform: translateY(-1000px) rotate(960deg);
  }
`;

export const SquareItem = styled.li`
  z-index: 1;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: rgba(8, 253, 216, 0.15);
  display: block;
  position: absolute;
  left: ${props => props.position}%;
  bottom: -${props => props.size}px;
  animation: ${up} ${props => props.duration}s infinite;
  animation-direction: alternate;
  animation-delay: ${props => props.delay}s;
  animation-timing-function: ${`cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()})`};
`;
