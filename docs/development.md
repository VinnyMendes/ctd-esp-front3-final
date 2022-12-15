# Desenvolvimento

## Indice

- [Iniciando o aplicativo](#iniciando-o-aplicativo)
- [Dependências](#dependências)
- [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Configuração da API Marvel](#configuração-da-api-marvel)
- [Recomendações a seguir](#recomendações-a-seguir)

## Iniciando o aplicativo

Instalamos as dependências

`npm instalar`

Podemos iniciar nossa aplicação com o comando

`npm run start`

## Dependências

A versão do React 18.0.2 e Next.js 12.2.5 será usada

Apenas as seguintes dependências podem ser instaladas:

- Typescript
- Next.js
- React Hook Form
- Yup
- React-credit-cards

Nota: Sugere-se não utilizar Redux ou React-Router devido à complexidade que podem atingir em uma aplicação com Next.js.

## Dependências de Desenvolvimento

As seguintes dependências de desenvolvimento adicionais (devDependencies) podem ser usadas, mas elas _não_ alteram a nota de forma positiva, nem são requisitos para aprovação. A possibilidade de usá-los é oferecida apenas para quem sabe o que está fazendo e se sente confortável com eles.

_ESLint
_ Esta ferramenta foi usada em aula no Frontend V. Ela está configurada, mas se desejar, você pode fazer modificações para um estilo que melhor se adapte ao seu gosto pessoal.

- Jest e biblioteca de testes
  - É necessária a utilização de Testes para verificar as funcionalidades e atingir a cobertura definida.

\*livro de histórias

- O Storybook está configurado e pronto para ser usado com Next.js e Material UI. A sua utilização é encorajada mas não obrigatória para desenvolver os componentes que serão utilizados nas diferentes páginas.

## Configuração da API Marvel

Para obter as Chaves da API Marvel, devemos entrar em [Marvel Developers](https://developer.marvel.com/account)
e crie nossa conta. Fazer isso nos dará uma chave pública e uma chave privada que devemos configurar
em nosso arquivo .env.local

Vamos primeiro copiar o exemplo rodando em nosso terminal
`cp .env.local.sample .env.local`

Em seguida, abrimos o arquivo [.env.local](.env.local) e inserimos as API Keys obtidas anteriormente

### Implantação em Vercel

Quando implantamos nossa aplicação no Vercel, devemos configurar as Variáveis ​​de Ambiente para que nossa aplicação
pode se conectar com a API da Marvel, pois o Vercel ignorará nosso `.env.local`

Tenha em mente que devemos configurar as 3 variáveis ​​que existem em nosso `.env.local` para que funcione corretamente

## Recomendações a seguir

A lista a seguir pretende ser um guia para desenvolver efetivamente esse final, mas por esse motivo, seu correto acompanhamento não é um requisito obrigatório.

### Configuração inicial

1. Clone o projeto em nosso computador
   - Em seguida, instale as dependências
   - Execute o `test` e `coverage` para verificar se tudo funciona
   - Execute o comando `dev` para testar o aplicativo
   - Execute o comando `storybook` para verificar se as histórias são renderizadas corretamente
2. Siga a [Configuração da API da Marvel](#marvel-api-setup)
3. Faça o upload `push` para o nosso repositório pessoal
   - Isso ativará o CI de ações do Github, onde serão executados os testes e a cobertura
4. Tendo nosso repositório carregado, podemos prosseguir para [Deployment in Vercel](#deployment-in-vercel)
5. Com o aplicativo funcionando em todas as suas variantes localmente e a implantação, podemos prosseguir com o desenvolvimento

### Iniciando

Nem todos os recursos têm a mesma dificuldade, por isso recomendamos que você siga a seguinte ordem
para que você possa passar por etapas e ganhar confiança (e 'propriedade') neste projeto.

1. Comece com [Página 6: Perguntas frequentes (FAQ)](/docs/functionalities.md#page-6-frequently-asked-questions-faq)

- A página de perguntas frequentes deve ser a mais simples das seis.
  - Se você se atreve ao Storybook, você pode criar um componente Faqs junto com sua história, para visualizá-lo
  - Deve receber um array de Faqs, um objeto que devemos digitar
  - Renderizar para cada FAQ um item do `accordion`
  - Com o componente pronto, podemos continuar a usá-lo dentro das páginas
- Obtendo o array de faqs do JSON, podemos proceder para importar nosso componente e enviar esses dados, e já devemos ter a primeira página.
- Devemos descobrir qual é o melhor tipo de renderização para esta página para garantir que o conteúdo seja indexável pelos mecanismos de pesquisa. Lembre-se de que você sempre pode usar o Chrome Inspector para verificá-lo.
- Por fim, embora não seja obrigatório, este é um componente simples de testar, para manter nossa cobertura alta e fechar essa função.
- Subimos nosso conteúdo e verificamos se ele funciona corretamente no Vercel, antes de passar para a próxima etapa.
- Pronto, já temos 1 de 6! Não se esqueça de enviar essas alterações e, se estiver usando uma estratégia de ramificação, mesclar essa ramificação com a principal antes de continuar.

2. Em seguida, continue com [Page 1: Home](#page-1-home-page-home)
