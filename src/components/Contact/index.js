import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialLinks from "../SocialLinks";

import * as S from './styled';

const ImgLogo = () => {
  const { imgLogo } = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: {eq: "AM-2.png"}) {
        childImageSharp {
          fluid(maxWidth: 503, maxHeight: 394) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <S.ContactImage fluid={imgLogo.childImageSharp.fluid} />
  );
};

const Contact = () => {
  return (
    <S.ContactWrapper>  
      <S.ContactFormWrapper>
        <S.ContactForm>
          <S.ContactFormTitle>Entre em Contato</S.ContactFormTitle>

          <S.ContactFieldset>
            <S.FieldGroup>
              <S.Field className="w50">
                <S.FormInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                />
                <S.FormLabel htmlFor="name">Nome</S.FormLabel>
              </S.Field>

              <S.Field className="w50">
                <S.FormInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                />
                <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
              </S.Field>
            </S.FieldGroup>
            <S.Field>
              <S.FormInput
                type="text"
                name="subject"
                id="subject"
                placeholder=" "
                required
              />
              <S.FormLabel htmlFor="subject">Assunto</S.FormLabel>
            </S.Field>
            <S.Field>
              <S.TextArea name="message" placeholder=" " id="message" rows="5" />
              <S.LabelTextArea htmlFor="message">Mensagem</S.LabelTextArea>
            </S.Field>
          </S.ContactFieldset>
          <S.BtnDiv>
            <S.ButtonForm>Enviar</S.ButtonForm>
          </S.BtnDiv>
        </S.ContactForm>
        <S.ContactSocialMedia>
          <S.ContactSocialDescription>
            Você também pode entrar em contato comigo por algum das minhas redes sociais.
          </S.ContactSocialDescription>
          <SocialLinks />
        </S.ContactSocialMedia>
      </S.ContactFormWrapper>
      <S.ContactImageWrapper>
        <S.ImageBox>
          <ImgLogo />
        </S.ImageBox>
      </S.ContactImageWrapper>
    </S.ContactWrapper>
  );
}

export default Contact;
