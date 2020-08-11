---
title: Tecnologias utilizadas no meu Portfólio/Blog
description: Neste post eu listo todas as tecnologias usadas no meu
  Portfolio/Blog e falo um pouco sobre cada uma delas.
date: 2020-08-08T02:25:20.000Z
thumbnail: logos.jpg
category: dev
---
Vou deixar aqui o [link](https://github.com/AMarcosCastelo/my-portfolio) do GitHub com o repositório do projeto para vocês darem uma olhada e como o código é aberto, até podem contribuir caso queiram.

## Tecnologias utilizadas

* [Gatsby](https://www.gatsbyjs.org/) - Framework open source para gerar todo o estático.
* [GraphQL](https://graphql.org/) - Linguagem para a consulta de dados em tempo de execução.
* [SVG](https://pt.wikipedia.org/wiki/SVG) - Para os ícones e para as animações.
* [GreenSock](https://greensock.com/) - Biblioteca para as animações.
* [Styled Components](https://styled-components.com/) - Para trabalhar com CSS dentro do JavaScript.
* [Styled Icons](https://styled-icons.js.org/) - Para importação dos ícones em SVG.
* [Algolia](https://www.algolia.com/) - Para a criação do sistema de busca.
* [Netlify CMS ](https://www.netlifycms.org/)- Gerenciador de conteúdo, open source, de fácil implementação com o Gatsby
* [Netlify](https://www.netlify.com/) - *Static hosting* para a publicação do blog direto do GitHub.

## Gatsby

![Logo do GatsbyJS. Um "G" seguido do nome "Gatsby" em um fundo roxo.](website-rebuilt-in-gatsbyjs.png "GatsbyJS")

[Gatsby](https://www.gatsbyjs.org/) é um SSG (Static Site Generator), com o plus de ser totalmente baseado em React, gratuito, open source e utiliza o GraphQL para consumir todo o conteúdo e os assets.

O Gatsby contém algumas ferramentas excelentes que o diferencia de outros SSG. Primeiro, ele é baseado em React em tempo de desenvolvimento, o que é uma ótima escolha pra quem ama trabalhar com React igual a mim. Segundo, ele possuí milhares de plugins que fornecem soluções do dia-a-dia, assim o dev perde menos tempo com tarefas chatas e sobra mais tempo pra focar no essencial da aplicação. Terceiro, por gerar arquivos estáticos e ter sistemas de cache, a performance é perfeita.

Mas como sempre, não existe bala de prata no mundo Web, para projetos com um volume grande de conteúdo dinâmico ele não é uma boa escolha.

## GraphQL

![Logo do GatsbyJS. Escrito "GraphQL".](graphql.png "GraphQL")

O [GraphQL](https://graphql.org/) foi criado pelo Facebook e é uma das mais modernas maneiras de construir e consultar APIs. Ele é uma sintaxe que descreve como solicitar dados e geralmente é usado para carregar dados de um servidor para um client.

GraphQL possui algumas características principais:

* Permite que o client especifique exatamente quais dados precisa. Isso torna mais fácil agregar dados de várias fontes;
* Usa um sistema de tipos para descrever os dados.

Uma consulta GraphQL é uma string que é enviada para o servidor para ser interpretada e assim preenchida, retornando o JSON de volta ao client:

```javascript
export const query = graphql`
  query MyPost {
    markdownRemark {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }`;
```

E devolve os dados:

```json
  "data": {
    "markdownRemark": {
      "fields": {
        "slug": "/hello-world/"
      },
      "frontmatter": {
        "title": "Hello World",
        "description": "Um pouco sobre minha trajetória até a criação desse portfólio/blog. "
      }
    }
  }
}
```

## SVG

SVG (Scalable Vector Graphics) é uma linguagem XML para descrever de forma vetorial desenhos bidimensionais, sejam estáticos, dinâmicos ou animados.

No Portfólio/Blog todos os ícones e animações são feitos com SVG em conjunto com o [GreenSock](https://greensock.com/) para animações, que falarei mais adiante neste post.

Mas porque usar SVG e não outros formatos?

Uma das principais vantagens do SVG é o tamanho do arquivo. O peso do arquivo costuma ser bem pequeno e isso pode melhorar usando alguma ferramenta de compactação.

O SVG é responsivo e não perde resolução em diferentes tamanhos de telas, ou seja, mantém a qualidade seja em uma tela de celular ou de uma televisão.

Ele é interativo e estilizável via CSS, além de ser adaptativo, você pode modificar o SVG de varias maneiras via CSS.

## GreenSock

![Logo GreenSock. Um homem com uma capa parecido com um herói, e a palavra "GreenSock"](greensocklogo.png "GreenSock")

O [GreenSock](https://greensock.com/) é uma biblioteca para animação que interage com qualquer coisa que o JavaScript pode manipular (propriedades CSS, SVG, canvas, o que for), além de resolver inúmeras inconsistências do navegador.

Por que usar o GreenSock?

* É super performático;
* Compatível com todos os browsers (até o IE8, bixo!);
* Pode animar qualquer coisa (CSS, SVG, Canvas, HTML, etc);
* Total controle das animações (pause, avance, reverta, aumente/diminua a velocidade);
* API intuitiva e fácil de aprender.

## Styled Components

![Logo do Styled Components. Imagem de unhas sendo pintado com esmalte.](styledcoponents.png "Styled Components Logo")

Um dos maiores problemas no CSS é a especificidade, colisão de classes pode literalmente atrapalhar um projeto e tira o dev do sério.

Surgiram várias tentativas de resolver esse problema, como o OOCSS, BEM, SMACSS, etc... Infelizmente essas metodologias não são escaláveis por depender da ação humana para funcionar.

O Styled Components permite a gravação de CSS no JavaScript (CSS-in-JS) usando Template Strings com tags. Podemos considerar que ele é um sucessor do CSS Modules, uma maneira de escrever CSS com escopo para um único componente e não vazar para nenhum outro elemento da página.

Um exemplo básico:

```javascript
import styled from "styled-components";
import media from 'styled-media-query';

export const AboutHeader = styled.header`
  color: #fff;
  margin: auto;
  padding: 2rem 5rem;
`;
```

Código gerado:

```css
.styled__AboutHeader-kiNEpj {
    color: #fff;
    margin: auto;
    padding: 2rem 5rem;
}
```

## Styled Icons

O [Styled Icons ](https://styled-icons.js.org/)é perfeito. Fornece os pacotes de ícones mais populares como o Font Awesome, Material Design, Octicons, como um Styled Component como todo o suporte TypeScript Types e tree-shaking/Es-Modules.

Assim posso usá-los como componentes:

```jsx
import React from 'react';
import { Blog } from "@styled-icons/icomoon/Blog";

const MenuBar = () => {
  return (
    <MenuBarItem>
      <Blog /> //Seu ícone estará disponível em SVG de forma simples
    </MenuBarItem>
  );
};

export default MenuBar;
```

## Algolia

![Algolia logo. Logo com a imagem de um cronometro e a palavra "Algolia" ao lado.](algolia-vector-logo.png "Algolia logo.")

Usei o [Algolia](https://www.algolia.com/) para a criação do sistema de busca de post do meu blog.

Ele disponibiliza softwares e ferramentas incríveis para a implementação de um sistema de pesquisa eficiente, flexível e bem criteriosa de maneira fácil de implementar, com uma boa documentação e o melhor de tudo: **Gratuito**.

Ele tbm oferece uma biblioteca chamada [InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/) que permite criar uma experiência de resultados de pesquisa instantânea usando as APIs do Algolia toda vez que executo `gatsby build`.

## Netlify CMS

É muito legal escrever com Markdown. Markdown é uma sintaxe usada para padronizar e facilitar formatação de texto na web. Os meus posts são todos estilizados com Markdown, porém algumas pessoas têm dificuldades de trabalhar com ele (tipo eu, rs) e aí vem a beleza do Netlify CMS.

O [Netlify CMS ](https://www.netlifycms.org/)é um sistema de gerenciamento da própria Netlify, open source e fácil de implementar em qualquer gerador de site estático.

Aqui está um exemplo do meu CMS:

Ele é um SPA (Single Page Application), aceita upload de imagens e tem até estágios para draft, review e ready do meu conteúdo:

## Netlify

E até que enfim chegamos na hospedagem do meu Portfólio/Blog no [Netlify](https://www.netlify.com/).

O Netlify é uma plataforma de *static hosting* (servidor para arquivos estáticos), onde você tem diversas funcionalidades legais e é **Gratuito!** Mas por que o Netlify e não o [GitHub Pages](https://pages.github.com/), por exemplo?

* Ele é incrivelmente rápido. Você consegue fazer deploy de uma aplicação em segundos;
* Deploy Atômico e Rollback. Se você fizer o deploy-1 e o deploy-2, eles coexistem e se eu quiser fazer o rollback entre esses deploys, eu consigo;
* Notificações e Permalinks. Você pode configurar para que cada deploy seja notificado no seu GitHub ou até no Slack. Nessas notificações tem os Permalinks, que são links únicos para o nome da branch ou do commit;
* Branch Deploys e Subdomínios. Você pode fazer deploys de quantas branchs você quiser, caso você tenha uma branch de testes você tem a opção de criar um subdomínio para essa branch.
* Possibilita testes A/B;
* Builds Contextuais. Para cada ambiente eu consigo definir um conjunto de comandos que eu quero que seja executado;
* SSL de um jeito fácil! Ao clicar em 1 botão, você ativa o SSL do seu site;
* Integração Continua. Você pode mandar rodar os seus testes dentro do Netlify e se passar ele faz o build;
* Otimização de Assets, entre outras ferramentas incríveis.

Para mim, o Netlify é uma das melhores tecnologias desta lista. Eu já migrei mais 2 projetos meus para lá e penso em utilizá-lo por muito mais tempo.

## Conclusão

Nossa! Post longo e ainda não deu pra falar tudo que deveria ter falado. 

As tecnologias aqui são tão perfeitas que valem um post para cada uma delas.

Para quem leu até aqui tem mais uma coisinha...

Para a criação do meu Blog eu me baseei em um curso perfeito do [Willian Justem](https://willianjusten.com.br/). Vou deixar aqui o [link do curso](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/). Vale muito a pena investir, o cara é muito bom no que faz e o curso é muito bom.

Por enquanto é só isso, povo.

Até a próxima!

[](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/)