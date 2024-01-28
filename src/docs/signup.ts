// docs/signup.ts
const signupDefinition = {
  post: {
    summary: "Registrar um novo usuário (público)",
    description:
      "Cria um novo usuário com as informações fornecidas no corpo da solicitação.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                format: "email",
                description:
                  "Endereço de e-mail do usuário (deve ser exclusivo).",
              },
              password: {
                type: "string",
                format: "password",
                description: "Senha do usuário.",
              },
              firstName: {
                type: "string",
                description: "Primeiro nome do usuário.",
              },
              lastName: {
                type: "string",
                description: "Sobrenome do usuário.",
              },
            },
          },
        },
      },
    },
    responses: {
      "201": {
        description: "Usuário registrado com sucesso.",
        content: {
          "application/json": {
            example: {
              id: 1,
              email: "user@example.com",
              firstName: "John",
              lastName: "Doe",
            },
          },
        },
      },
      "400": {
        description:
          "Erro de solicitação inválida. Verifique os parâmetros da solicitação.",
        content: {
          "application/json": {
            example: {
              error: "Parâmetros de solicitação inválidos.",
            },
          },
        },
      },
      "409": {
        description: "O endereço de e-mail já está em uso por outro usuário.",
        content: {
          "application/json": {
            example: {
              error: "E-mail já registrado.",
            },
          },
        },
      },
    },
  },
};

export default signupDefinition;
