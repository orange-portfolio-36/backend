import { signinDefinition } from "./signin";
import signupDefinition from "./signup";


// docs/swagger.ts
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Nome do Seu Projeto',
    version: '1.0.0',
    description: 'Descrição do Seu Projeto',
  },
  paths: {
    '/user/signup': signupDefinition,
    '/user/signin': signinDefinition
  },
  // Adicione outras definições conforme necessário
}

export default swaggerDocument;
