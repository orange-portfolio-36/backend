export function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Segredo não encontrado!");
  return secret;
}
