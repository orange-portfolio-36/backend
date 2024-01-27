# Backend - Orange Portfolio

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker 25 ou superior instalado no seu sistema. Você pode baixá-lo em [https://www.docker.com/](https://www.docker.com/).

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

1.  Crie um arquivo de configuração `.env` na raiz do seu projeto e configure as variáveis necessárias. Exemplo:

        ```env

    POSTGRES_HOST=custom_host
    POSTGRES_PORT=3456
    POSTGRES_PASSWORD=secret
    POSTGRES_USER=some_user
    POSTGRES_DB=orange_portfolio_db

    DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
    PORT=3000
```

## Rodando a Aplicação

Agora que as dependências estão instaladas e as configurações foram feitas, você pode iniciar o servidor localmente. Execute os seguintes comandos, cada um deve ser executado em termiais diferentes:

```bash
docker compose watch
docker compose up
```

Isso iniciará o servidor na porta configurada no arquivo `.env`. Por padrão, será a porta 3000, mas você pode alterar isso conforme necessário.
