# Boilerplate Nextjs com TypeScript

Este repositório foi criado a partir do curso de React Avançado do Willian Justen na Udemy. O objetivo deste repositório é servir como template para a criação de novos projetos usando essa stack. Neste projeto estão incluídas as tecnologias a seguir:

- Nextjs
- TypeScript
- Testes com Jest e verificação de cobertura
- Configurações de padrão de código com Eslint e Prettier
- Documentação de componentes com Storybook
- Configuração para PWA

## Como usar esse repositório como template para novas aplicações

Basta abrir o terminal na sua máquina, acessar a pasta onde deseja criar o projeto, usar o comando `yarn create next-app -e https://github.com/jb9dev/boilerplate_nextjs_with_typescript` e aguardar o promp solicitar o nome do projeto que deseja criar. Na sequência o projeto será criado usando todas as configurações aqui já definidas. Ao final da criação e configuração, rode o comando `yarn`, para que as dependências sejam instaladas.

## Rodando o projeto localmente

Para visualizar as mudanças feitas no código localmente, rode o comando `yarn dev` e acesse através do navegador o caminho `http://localhost:3000`.

## Geração automática de componente

Rode o comando `yarn generate <NomeDoComponente>` para gerar automaticamente um boilerplate de pasta e arquivos para a criação de um novo componente no padrão usado no projeto, sendo uma pasta com o nome do componente contendo:

- o arquivo index.tsx, com a estrutura do componente em React
- o arquivo stories.tsx, com a estrutura da documentação do storybook do componente
- o arquivo styles.ts, com a estrutura de estilização usando o Styled Componentes
- o arquivo test.tsx com a estrutura básica para criar os testes para o componente

## Visualizando Storybook

É possível visualizar o Storybook localmente através do comando `yarn storybook` e ao final do processo você será redirecionado para o navegador no endereço `http://localhost:6006`, já com acesso à documentação dos componentes.

Também é possível disponibilizar o Storybook online em qualquer hospedagem de arquivos estáticos, para isso rode o comando `yarn build-storybook`. No final do processo será gerada a parta `storybook-static`. Basta subir os arquivos dessa pasta na sua hospedagem, que será possível visualizar a mesma documentação, sendo que online.

## Rodando os testes

Para verificar se todos os testes estão passando, basta rodar o comando `yarn test`. Caso queira que os testes continuem rodando à cada alteração no código, ative a funcionalidade de _watch_ através do comando `yarn test:watch`. A cada nova rodada de testes é gerado o percentual de cobertura dos testes da aplicação. Também é gerado o snapshot para os componentes que o estiverem utilizando.

## Build do projeto

É possível realizar o build do projeto para verificação em ambiente de desenvolvimento, apenas para se certificar que está tudo conforme esperado. Para isso rode o comando `yarn build:dev` e ao final do processo rode o comando `yarn start` e acesse o endereço `http://localhost:3000` no seu navegador, para visualizar a aplicação como ficará em ambiente de produção.

Para realizar o build do projeto para produção, rode o comando `yarn build:prod`. Ao final do processo será gerada a pasta .next com os arquivos para subir a aplicação online.
