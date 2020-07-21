import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const ContactWrapper = styled.section`
  display: flex;
  padding: 0 3rem;
  z-index: 3;

  ${media.lessThan("large")`
    padding: 1rem 3rem;
  `}

  ${media.lessThan("medium")`
    padding: 5rem 1rem;
  `}
`

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const ContactSocialMedia = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;

  ${media.lessThan("large")`
    padding: 1rem 0;
  `}
`

export const ContactLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  z-index: 3;
`

export const ContactLinksItem = styled.li``

export const ContactLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  z-index: 3;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #242424;
  width: 30px;
  height: 30px;
  z-index: 3;
`

export const ContactSocialDescription = styled.p`
  color: var(--texts);
  padding: 0.75rem 0;
  font-weight: 300;
  font-size: 1.255rem;
  z-index: 3;
  ${media.lessThan("large")`
    text-align: center;
  `}
`

export const ContactFieldset = styled.fieldset`
  padding: 3rem 0 0;
  width: 100%;
  z-index: 3;
`

export const ContactForm = styled.form`
  color: var(--texts);
  width: 100%;
  z-index: 3;
`

export const FieldGroup = styled.div`
  display: flex;

  ${media.lessThan("small")`
    flex-direction: column;
    width: 100%;
  `}/* .w50 {
    width: 50%;
  } */
`

export const FormLabel = styled.label`
  font-size: 1.125rem;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 0.5rem);
  left: 0;
  margin-top: 0.813rem;
  transition: all 0.3s ease-out;
  z-index: 3;
`

export const FormInput = styled.input`
  border: 0;
  padding: 0.6rem 0;
  color: var(--texts);
  border-bottom: 2px solid var(--texts);
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  transition: all 0.3s ease-out;
  border-radius: 0;
  width: 100%;
  z-index: 3;

  &:focus {
    border-bottom: 2px solid var(--highlight);
  }

  ${FormLabel} &::placeholder {
    color: transparent;
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    font-size: 0.938rem;
    margin-top: 0;
    top: 0;
    color: var(--highlight);
  }

  &:focus-within:required:invalid {
    border-bottom: 2px solid red;
  }
`

export const Field = styled.div`
  position: relative;
  padding-top: 13px;
  display: flex;
  flex-direction: column;
  margin-right: 0.625rem;
  padding-top: 0.813rem;
  margin-bottom: 1.5rem;
  width: 100%;
`

export const LabelTextArea = styled.label`
  font-size: 1.125rem;
  padding: 1rem;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.813rem;
  transition: all 0.3s ease-out;
  z-index: 3;

  & ${FormInput}::placeholder {
    color: transparent;
  }
`

export const TextArea = styled.textarea`
  border: 0;
  padding: 1rem;
  color: var(--texts);
  border: 2px solid var(--texts);
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  transition: all 0.3s ease-out;
  border-radius: 0;
  z-index: 3;

  &:focus {
    border: 2px solid var(--highlight);
  }

  &:focus + ${LabelTextArea}, &:not(:placeholder-shown) + ${LabelTextArea} {
    font-size: 0.938rem;
    margin-top: 0;
    top: -1.25rem;
    left: -0.938rem;
    color: var(--highlight);
  }
`

export const ContactFormTitle = styled.h1`
  font-size: 3rem;
  color: var(--titleHome);

  ${media.lessThan("large")`
    font-size: 2.5rem;
  `}

  ${media.lessThan("small")`
    font-size: 1.9rem;
  `}
  z-index: 3;
`

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ButtonForm = styled.button`
  cursor: pointer;
  color: var(--titlesText);
  background: transparent;
  border: 2px solid var(--highlight);
  padding: 1rem 1.5rem;
  font-size: 1rem;
  margin-right: 0.625rem;
  z-index: 3;

  &:hover {
    color: #242424;
    background: var(--highlight);
  }
`

export const ContactImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 40vw;
  height: 100vh;
  padding: 3rem 0 0 3rem;
  ${media.lessThan("large")`
    display: none;
  `}
`

export const ImageBox = styled.div`
  width: 100%;
`

export const ContactImage = styled(Img)`
  display: block;
  max-width: 620px;
  margin: auto;
`
