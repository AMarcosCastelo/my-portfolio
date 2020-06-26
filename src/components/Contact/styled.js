import styled from 'styled-components';

export const ContactWrapper = styled.section`
  display: flex;
  padding: 2rem 4rem;
`;

export const ContactFormWrapper = styled.div`
  /* height: 100vh; */
`;


export const ContactFieldset = styled.fieldset`
  padding: 3rem 0;
`;

export const ContactForm = styled.form`
  color: var(--texts);
  width: 60vh;
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 100%;

  .w50 {
    width: 50%;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding-top: 13px;
`;

export const FormLabel = styled.label`
  font-size: 1.2rem;
  padding: 1rem 0;
`;

export const FormInput = styled.input`
  font-size: 1rem;
  padding: 0 0.75rem;
  height: 3rem;
  border: 2px solid transparent;
  border-radius: 5px;
  background: #bdbdbd;
  outline: none;
  transition: all .3s ease-out;

  &:hover {
    border: 2px solid var(--highlight);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  background: #bdbdbd;
  outline: none;
  padding: 0.2rem;

  &:hover {
    border: 2px solid var(--highlight);
  }
`;

export const ContactFormTitle = styled.h1`
  font-size: 3rem;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  cursor: pointer;
  color: var(--titlesText);
  background: transparent;
  border: 2px solid var(--highlight);
  padding: 1rem 1.5rem;
  font-size: 1rem;

  &:hover {
    color: #242424;
    background: var(--highlight);
  }
`;

export const ContactMapWrapper = styled.section``;