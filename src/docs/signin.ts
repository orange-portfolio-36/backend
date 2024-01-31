export const signinDefinition = {
  post: {
    summary: "Autenticação do usuário",
    description: "Rota para autenticar um usuário e obter um token de acesso.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          example: {
            email: "usuario@exemplo.com",
            password: "exeplo_senha",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Autenticação bem-sucedida. Retorna o token de acesso.",
        content: {
          "application/json": {
            example: {
              accessToken: "token",
              refreshToken: "token",
            },
          },
        },
      },
      401: {
        description: "Acesso negado",
      },
    },
  },
};
