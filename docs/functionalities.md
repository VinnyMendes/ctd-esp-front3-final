## Funcionalidades

## Indice

- [Funcionalidades obrigatórias](#funcionalidades-obrigatórias)
  - [Página 1: Inicio (Home)](<#página-1-inicio-(home)>)
  - [Página 2: Detalhe do Cómic (Quadrinhos)](<#página-2-detalhe-do-cómic-(quadrinhos)>)
  - [Página 3: Detalhe do Personagem(Character)](<#página-3-detalhe-do-personagem(character)>)
  - [Página 4: Compra (finalização da compra)](<#página-4-compra-(finalização-da-compra)>)
  - [Página 5: Pedido confirmado](#página-5-pedido-confirmado)
  - [Página 6: Perguntas frequentes (FAQ)](<#página-6-perguntas-frequentes-(FAQ)>)
- [Funcionalidades extras e opcionais](#funcionalidades-extras-e-opcionais)
  - [Opcional 1: Cartão de Crédito](#opcional-1-cartão-de-crédito)
  - [Opcional 2: Quadrinhos associados ao personagem](#opcional-2-quadrinhos-associados-ao-personagem)
  - [Opcional 3: Comprar em 1 Clique](#opcional-3-comprar-em-1-clique)
- [Requisitos obrigatórios de projeto](#requisitos-obrigatórios-de-projeto)
  - [Requisito 1: Material UI](#requisito-1-material-UI)
  - [Requisito 2: Layouts](#requisito-2-layouts)
  - [Requisito 3: Adaptabilidade (Responsivo)](<#requisito-3-adaptabilidade-(responsivo)>)
- [Resultado final](#resultado-final)

## Funcionalidades obrigatórias

As seguintes funcionalidades são requisitos mínimos necessários para a aprovação da final e é fundamental que funcionem corretamente.

**O aplicativo deve ter 6 (seis) páginas: Home, Quadrinhos, Personagem, Checkout, Pedido Confirmado e Faqs**

### Página 1: Página inicial

Esta página deve exibir uma lista de grade dos quadrinhos da Marvel disponíveis para visualização e compra detalhadas.

Deve-se levar em consideração o seguinte:

- Deve ser a página inicial da web `/`.
- A grade deve apresentar no máximo 12 quadrinhos por página.
- A grade deve suportar algum tipo de paginação simples. Você pode usar os botões `Anterior e Próximo` ou `Carregamento sem fim`
- Cada quadrinho deve conter `imagem` e `nome`, juntamente com dois botões `Comprar` e `Ver detalhes`.
- Permitir que todo o conteúdo junto com os resultados da primeira página sejam indexáveis ​​pelos motores de busca.
- Esta página deve usar o [Layout General](#layout-general)
- Esta página permite a funcionalidade [Optional 3: 1-Click Purchase](#optional-3-1-click-purchase)

### Página 2: Detalhes em Comic (Quadrinhos)

Esta página deve mostrar um detalhe de um quadrinho selecionado junto com seu preço e estoque.

Deve-se levar em consideração o seguinte:

- Deve estar no caminho `/comics/[id]`.
- A página deve indicar pelo menos as seguintes informações:
  - nome cômico
  - Descrição do quadrinho
  - Imagem principal
  - Preço
  - Preço anterior
  - Botão Comprar: dependendo da disponibilidade de estoque
    - Caso haja estoque, o botão deve aparecer habilitado e estar funcional
    - Caso não haja estoque, o botão deve estar desabilitado e cinza, com a mensagem: Sem estoque disponível
  - Lista de personagens associados ao quadrinho, com links para a página de cada personagem
- Permitir que o conteúdo seja indexável pelos motores de busca.
- Esta página deve usar o [Layout General](#layout-general)

### Página 3: Detalhes do Personagem

Esta página deve exibir um detalhe de um personagem individual da Marvel.

Deve-se levar em consideração o seguinte:

- Deve estar no caminho `/characters/[id]`.
- A página deve indicar pelo menos as seguintes informações:
  - Nome do personagem
  - Imagem principal
  - Descrição ou biografia do personagem
- Permitir que o conteúdo seja indexável pelos motores de busca.
- Esta página deve usar o [Layout General](#layout-general)
- Esta página permite a funcionalidade [Opcional 2: Quadrinhos associados ao personagem](#optional-2-comics-associated-to-the-character)

### Página 4: Compra (finalização da compra)

Selecionar o botão comprar na página de detalhes do quadrinho navegará para a página de checkout.

Deve-se levar em consideração o seguinte:

- Deve estar no caminho `/checkout`.
- A página deve ter um formulário dividido em 3 seções ou etapas:
  - Dados pessoais
  - Endereço de entrega
  - Detalhes do pagamento
- A seção de dados pessoais deve conter os seguintes campos `obrigatórios`:
  - Nome
  - Sobrenome
  - E-mail (deve usar qualquer regra de validação de e-mail correta)
- A seção de endereço de entrega deve conter os seguintes campos:
  - Endereço `(obrigatório)`
  - Departamento, andar, etc `(opcional)`
  - Cidade `(obrigatório)`
  - Província `(obrigatório)`
  - CEP `(obrigatório)`
- Por fim, a seção de pagamento deve ter os seguintes campos `obrigatórios`:
  - Número de cartão
  - Nome como aparece no cartão
  - Data de expiração
  - Código de segurança `(estilo de senha secreta ***)`
- O formulário deve ser construído usando React Hook Form e Material UI
- O componente Mui deve ser o [Stepper](https://mui.com/material-ui/react-stepper/)
- Envio (enviar) do formulário
  - Deve ser utilizada a API de compra que já está desenvolvida no repositório. [POST /api/checkout](/pages/api/checkout.route.ts)
  - Se o envio estiver correto, o usuário deve ser redirecionado para [Página 5: Pedido confirmado (confirmação)](#page-5-order-confirmed)
  - Os erros da api devem ser validados corretamente, e indicar o mesmo ao usuário através do componente [Snackbar] (https://mui.com/material-ui/react-snackbar/)
    - Cartão sem fundos disponíveis
    - Cartão sem autorização. Entre em contato com seu banco e tente novamente.
    - Dados do cartão errados
    - Endereço de entrega errado
    - Erro do servidor. Tente novamente
- Deve ser indicado com um painel de informações, indicando o `nome`, `imagem` e o `preço` do quadrinho que está sendo adquirido, para que o usuário tenha certeza de que a ação está sendo realizada.
- Você deve ter testes de unidade que comprovem as validações e deve atingir uma 'cobertura de 90%'
- Observe, o que pode acontecer se você entrar neste site diretamente pelo URL. Talvez você possa redirecionar para Home neste caso.
- **Não é obrigatório** ser indexável pelos motores de busca.
- Esta página deve usar o [Layout de compra](#layout-de-purchase)
- Esta página habilita a funcionalidade [Optional 1: Credit Card](#optional-1-credit-card)

### Página 5: Pedido confirmado

Após a compra bem-sucedida, a tela **Pedido Confirmado** deve ser exibida.

Deve-se levar em consideração o seguinte:

- Deve estar no caminho `/purchase-confirmation`.
- Mostre uma seção superior verde com a mensagem "Aproveite sua compra"
- Você deve ter as informações do quadrinho (Nome e imagem principal) em destaque e em tamanho grande.
- Deve apresentar uma seção inferior, com os dados pessoais, o endereço de entrega e o preço pago pelo quadrinho.
- Observe, o que pode acontecer se você entrar neste site diretamente pelo URL. Talvez você possa redirecionar para Home neste caso.
- **Não é obrigatório** ser indexável pelos motores de busca.
- Esta página deve usar o [Layout de compra](#layout-de-purchase)

Mostre uma seção verde com a mensagem "Aproveite sua compra", ao lado das informações do quadrinho (nome e imagem) em grande,
Uma seção inferior, com dados pessoais, endereço de entrega e o preço pago pelo quadrinho.
Esta página deve utilizar o Layout de Compra, que contém um cabeçalho e rodapé bem simples, para não distrair o usuário do processo de compra.

### Página 6: Perguntas frequentes (FAQ)

O cabeçalho geral tem um link navegável para a página de perguntas frequentes.

Deve-se levar em consideração o seguinte:

- Deve estar no caminho `/faq`.
- Use o componente [Accordion (Accordion)](https://mui.com/material-ui/react-accordion/) da interface do material para exibir as perguntas e respostas
- Carregue as informações das perguntas e respostas do JSON de faqs com seu título e descrição.
- Permitir que todo o conteúdo seja indexável pelos motores de busca.
- Esta página deve usar o [Layout General](#layout-general)

## Funcionalidades extras e opcionais

Os seguintes aspectos são extras ao requisito de aprovação mínima que serão levados em consideração para aumentar a nota final, desde que seu funcionamento esteja correto.

### Opcional 1: Cartão de Crédito

[Página 4: Compra (Checkout)](#pgina-4-purchase-checkout) tem um formulário dividido em 3 seções.
A terceira seção tem os campos de cartão de crédito. Para melhorar a experiência do usuário, o uso de
da biblioteca [react-credit-cards](https://github.com/amaroteam/react-credit-cards), que deve ser integrada ao uso do React Hook Form.

O requisito é exibir um cartão que seja atualizado dinamicamente enquanto o usuário insere os dados do cartão, para melhorar a UX.

### Opcional 2: Quadrinhos associados ao personagem

A [Página 3: Detalhe do Personagem (Personagem)](#page-3-detalhe-do-personagem-character), pode ter uma seção intitulada **Outros quadrinhos de "nome do personagem"**

- Ex: Outros quadrinhos do Homem-Aranha, Outros quadrinhos do Wolverine

Esta seção deve ser listada abaixo dos dados principais do personagem, e deve mostrar uma lista de até 6 elementos em um formato amigável,
reutilizando os componentes do cartão Comics associados ao personagem. Para isso você pode usar a API
`/v1/public/characters/{characterId}/comics`

Esses componentes devem seguir a mesma regra dos quadrinhos [Page 1: Home](#page-1-home-home), ou seja, não devem ter validação de estoque.

### Opcional 3: Comprar em 1 Clique

A [Página 1: Home (Home)](#page-1-home-home), pode ter um botão "Quick Buy" para cada um dos quadrinhos mostrados na grade.
Caso decida realizar esta funcionalidade, o botão "Compra rápida" deve estar sempre habilitado, ou seja, não deve haver
sem controle prévio de estoque.

Ao pressionar este botão, uma API deve ser invocada (que deve ser construída) e um dos dois fluxos a seguir pode acontecer:

- Caso o quadrinho tenha estoque, ele deve ser redirecionado para [Página 4: Compra (Checkout)](#page-4-purchase-checkout), como acontece na página 2 do detalhe do quadrinho.
- Se o quadrinho estiver esgotado, você deverá ser redirecionado para [Página 2: Detalhes do quadrinho (HQ)](#page-2-detalhe-do-comic), que mostrará as informações relevantes junto com o "Esgotado botão " estoque "

_Nota: Embora mostrar a disponibilidade na tela inicial possa ser uma vantagem, neste caso é um requisito obrigatório
se esta funcionalidade for desenvolvida, que o estoque só é avaliado após pressionar o botão comprar na tela inicial.
Esta lógica não deve interferir com a lógica de pré-verificação na página 2._

## Requisitos obrigatórios de projeto

### Requisito 1: Material UI

Atenção especial deve ser dada ao uso do Material UI e da biblioteca [Mui](https://mui.com/material-ui/) para o desenvolvimento da interface web.
Nenhuma outra biblioteca pode ser usada, exceto [react-credit-cards](https://github.com/amaroteam/react-credit-cards) para o desenvolvimento da funcionalidade [Optional 1: Credit Card](#optional-1 - Cartão de crédito)

A criação de componentes personalizados que dependem do uso do Mui é incentivada e permitida.

### Requisito 2: Layouts

A aplicação possui dois Layouts (ou formatos pré-estabelecidos de estilos e componentes) que devem ser utilizados nas funcionalidades obrigatórias.
Cada página deve necessariamente utilizar um e apenas um deles, dependendo da funcionalidade descrita. Esses layouts conterão um cabeçalho
e um rodapé (Rodapé) adequado à funcionalidade.

### Layout Geral

Este Layout deve ser usado nas seguintes páginas:

- [Página 1: Página inicial](#page-1-home-page-home)
- [Página 2: Detalhe do quadrinho (quadrinho)](#page-2-detail-of-the-comic-comic)
- [Página 3: Detalhe do caractere (Personagem)](#page-3-character-detail-character)
- [Página 6: Perguntas frequentes (FAQ)](#page-6-frequently-asked-questions-faq)

Contém um cabeçalho (Header) com links navegáveis ​​que devem ser ajustados com suas rotas correspondentes, e
um rodapé que não requer nenhuma modificação.

Arquivo: [components/layouts/layout-general.tsx](components/layouts/layout-general.tsx)

### Layout de compra

Este Layout deve ser usado nas seguintes páginas:

- [Página 4: Compra (Checkout)](#page-4-purchase-checkout)
- [Página 5: Pedido confirmado (confirmação)](#page-5-order-confirmed)

Ele contém um cabeçalho e um rodapé simples que não requerem nenhuma modificação. Este layout
Destina-se a não distrair o usuário da experiência de compra.

Arquivo: [components/layouts/layout-checkout.tsx](components/layouts/layout-checkout.tsx)

### Requisito 3: Adaptabilidade (Responsivo)

A aplicação terá de se adaptar ao formato mobile e ao formato desktop. Para fazer isso, ambos os Layouts,
juntamente com as estruturas e componentes de ajuda, eles já possuem essa funcionalidade integrada. Embora, o uso dos Layouts
é obrigatório, estruturas e componentes de suporte pré-desenvolvidos não são. Se você decidir não usar o último,
Eles devem garantir que seus próprios componentes sejam Adaptáveis ​​a ambos os formatos (Responsivo).

## Resultado final

Deixamos-lhe um vídeo como exemplo de como deve funcionar a sua aplicação, na pasta public
