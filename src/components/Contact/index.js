import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import links from "../SocialLinks/content"
import Icons from "../SocialLinks/icons"
import { useForm } from "react-hook-form"

import * as S from "./styled"

const ImgLogo = () => {
  const { imgLogo } = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: { eq: "AM-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 503, maxHeight: 394) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <S.ContactImage fluid={imgLogo.childImageSharp.fluid} />
}

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <>
      <S.ContactWrapper>
        <S.ContactFormWrapper>
          <S.ContactForm
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="/success/"
            onSubmit={handleSubmit((_, event) => event.target.submit())}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <S.ContactFormTitle>Entre em Contato</S.ContactFormTitle>

            <S.ContactFieldset>
              <S.FieldGroup>
                <S.Field className="w50">
                  <S.FormInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    ref={register()}
                  />
                  <S.FormLabel htmlFor="name">Nome</S.FormLabel>
                </S.Field>

                <S.Field className="w50">
                  <S.FormInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    ref={register({
                      required: "Entre com seu e-mail",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Entre com um endereço de e-mail válido",
                      },
                    })}
                  />
                  <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                  )}
                </S.Field>
              </S.FieldGroup>
              <S.Field>
                <S.FormInput
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  ref={register()}
                />
                <S.FormLabel htmlFor="subject">Assunto</S.FormLabel>
              </S.Field>
              <S.Field>
                <S.TextArea
                  name="message"
                  placeholder=" "
                  id="message"
                  ref={register({
                    required: "Escreva uma mensagem",
                  })}
                  rows="5"
                />
                <S.LabelTextArea htmlFor="message">Mensagem</S.LabelTextArea>
                {errors.message && (
                  <span className="error-msg">{errors.message.message}</span>
                )}
              </S.Field>
            </S.ContactFieldset>
            <S.BtnDiv>
              <S.ButtonForm type="submit">Enviar</S.ButtonForm>
            </S.BtnDiv>
          </S.ContactForm>
          <S.ContactSocialMedia>
            <S.ContactSocialDescription>
              Você também pode entrar em contato comigo por alguma das minhas
              redes sociais.
            </S.ContactSocialDescription>
            <S.ContactSocialMedia>
              <S.ContactLinksList>
                {links.map((link, i) => {
                  const Icon = Icons[link.label]
                  return (
                    <S.ContactLinksItem key={i}>
                      <S.ContactLinksLink
                        href={link.url}
                        title={link.label}
                        target="_blank"
                        rel="noopener norefer"
                      >
                        <S.IconWrapper>
                          <Icon />
                        </S.IconWrapper>
                      </S.ContactLinksLink>
                    </S.ContactLinksItem>
                  )
                })}
              </S.ContactLinksList>
            </S.ContactSocialMedia>
          </S.ContactSocialMedia>
        </S.ContactFormWrapper>
        <S.ContactImageWrapper>
          <S.ImageBox>
            <ImgLogo />
          </S.ImageBox>
        </S.ContactImageWrapper>
      </S.ContactWrapper>
    </>
  )
}

export default Contact
