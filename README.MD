# Consulta CEP - App de Consulta e Favoritos

Este é um aplicativo desenvolvido em **React Native** que permite ao usuário consultar endereços completos informando um **CEP** (Código de Endereçamento Postal) através de uma integração com o webservice dos Correios (Brasil). O usuário também pode salvar os seus **CEPs favoritos** para acessá-los facilmente na aba de favoritos.

## Funcionalidades

- **Consulta de CEP**: O usuário pode informar um CEP e obter o endereço completo associado (rua, bairro, cidade, estado).
- **Salvar CEPs favoritos**: O usuário pode marcar um CEP como favorito e visualizá-lo em uma lista específica na aba de favoritos.
- **Gerenciamento de Favoritos**: Os CEPs salvos podem ser gerenciados na aba de favoritos.
  
## Tecnologias Utilizadas

- **React Native**: Desenvolvimento do frontend do aplicativo.
- **Expo**: Framework utilizado para facilitar o desenvolvimento e testes do app.
- **Webservice Correios**: Integração com o serviço dos Correios para consulta de CEP.
- **AsyncStorage**: Utilizado para armazenar os CEPs favoritos localmente no dispositivo do usuário.

## Pré-requisitos

- Node.js e npm instalados na máquina.
- Expo CLI globalmente instalado (caso não tenha: `npm install -g expo-cli`).

## Como Rodar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/usuario/projeto-cep.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projeto-cep
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o projeto com o Expo:
    ```bash
    npx expo start
    ```

5. Escaneie o QR code no terminal ou no navegador para rodar o app no seu dispositivo ou emulador.

## Como Usar

- Na tela principal, insira um CEP válido no formato **00000-000**.
- Clique no botão de busca para consultar o endereço completo.
- Para salvar o CEP nos favoritos, clique no botão de **favoritar**.
- Para acessar seus CEPs favoritos, vá até a aba de **Favoritos** no menu de navegação.

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
