# Backend - Orange Portfolio

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js 20.6.x ou superior instalado no seu sistema. Você pode baixá-los em [https://nodejs.org/](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/orange-portfolio-36/backend.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd orange-portfolio-36
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo de configuração `.env` na raiz do seu projeto e configure as variáveis necessárias. Exemplo:

    ```env
    PORT=3000
    DATABASE_URL=postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
    ```

## Rodando a Aplicação

Agora que as dependências estão instaladas e as configurações foram feitas, você pode iniciar o servidor localmente. Execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor na porta configurada no arquivo `.env`. Por padrão, será a porta 3000, mas você pode alterar isso conforme necessário.