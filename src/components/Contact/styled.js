import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const ContactWrapper = styled.section`
  display: flex;
  padding: 2rem 4rem;
`;

export const ContactFormWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 70vh;
`;

export const ContactSocialMedia = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContactLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const ContactLinksItem = styled.li`

`;

export const ContactLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #242424;
  width: 30px;
  height: 30px;
`;

export const ContactSocialDescription = styled.p`
  color: var(--texts);
  padding: 0.75rem 0;
  font-weight: 300;
  font-size: 1.255rem;
`;

export const ContactFieldset = styled.fieldset`
  padding: 3rem 0 0;
  width: 100%;
`;

export const ContactForm = styled.form`
  color: var(--texts);
  width: 100%;
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 100%;

  .w50 {
    width: 50%;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.125rem;
  pointer-events: none;
  position: absolute;
  top: calc(50% - .5rem);
  left: 0;
  margin-top: 0.813rem;
  transition: all .3s ease-out;
`;

export const FormInput = styled.input`
  border: 0;
  padding: 0.6rem 0;
  color: var(--texts);
  border-bottom: 2px solid var(--texts);
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  transition: all .3s ease-out;
  border-radius: 0;
  /* height: */

  &:focus{
    border-bottom: 2px solid var(--highlight);
  }

  ${FormLabel} &::placeholder{
    color:transparent;
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel}{
    font-size: 0.938rem;
    margin-top: 0;
    top: 0;
    color: var(--highlight);
  }
`;

export const Field = styled.div`
  position: relative;
  padding-top: 13px;
  display: flex;
  flex-direction: column;
  margin-right: 0.625rem;
  padding-top: 0.813rem;
  margin-bottom: 1.5rem;
`;

export const LabelTextArea = styled.label`
  font-size: 1.125rem;
  padding: 1rem;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.813rem;
  transition: all .3s ease-out;

  & ${FormInput}::placeholder{
    color:transparent;
  }
`;

export const TextArea = styled.textarea`
  border: 0;
  padding: 1rem;
  color: var(--texts);
  border: 2px solid var(--texts);
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  transition: all .3s ease-out;
  border-radius: 0;

  &:focus{
    border: 2px solid var(--highlight);
  }

  &:focus + ${LabelTextArea}, &:not(:placeholder-shown) + ${LabelTextArea}{
    font-size: 0.938rem;
    margin-top: 0;
    top: -1.25rem;
    left: -0.938rem;
    color: var(--highlight);
  }
`;

export const ContactFormTitle = styled.h1`
  font-size: 3rem;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonForm = styled.button`
  cursor: pointer;
  color: var(--titlesText);
  background: transparent;
  border: 2px solid var(--highlight);
  padding: 1rem 1.5rem;
  font-size: 1rem;
  margin-right: 0.625rem;

  &:hover {
    color: #242424;
    background: var(--highlight);
  }
`;

export const ContactImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100vh;
  padding: 3rem 0 0 3rem;
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const ImageBox = styled.div`
  width: 100%;
`;

export const ContactImage = styled(Img)`
  display: block;
  max-width: 620px;
  margin: auto;
`;