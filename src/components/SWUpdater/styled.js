import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  position: fixed;
  width: 320px;
  right: calc(50vw - 320px / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border: 1px solid var(--borders);
  background: var(--mediumBackground);
  color: var(--titlesText);
  z-index: 100;
  animation: moveUp .5s ease-in-out both;

  @keyframes moveUp {
    0% {
      bottom: -100vh;
    } 100% {
      bottom: 60px;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--titlesText);
  margin-left: 10px;
`;
