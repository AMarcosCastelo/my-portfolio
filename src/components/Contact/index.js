import React from 'react';

import * as S from './styled';

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContactFormWrapper>
        <S.ContactForm>
          <S.ContactFormTitle>Entre em Contato</S.ContactFormTitle>

          <S.ContactFieldset>
            <S.FieldGroup>
              <S.Field className="w50">
                <S.FormLabel htmlFor="name">Nome</S.FormLabel>
                <S.FormInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                />
              </S.Field>

              <S.Field className="w50">
                <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
                <S.FormInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                />
              </S.Field>
            </S.FieldGroup>
            <S.Field>
              <S.FormLabel htmlFor="subject">Assunto</S.FormLabel>
              <S.FormInput
                type="text"
                name="subject"
                id="subject"
                placeholder=" "
                required
              />
            </S.Field>
            <S.Field>
              <S.FormLabel htmlFor="message">Mensagem</S.FormLabel>
              <S.TextArea name="message" id="message" rows="10" />
            </S.Field>
          </S.ContactFieldset>
          <S.BtnDiv>
            <S.ButtonForm>Enviar</S.ButtonForm>
          </S.BtnDiv>
        </S.ContactForm>
      </S.ContactFormWrapper>

      <S.ContactMapWrapper>

      </S.ContactMapWrapper>
    </S.ContactWrapper>
  );
}

export default Contact;
