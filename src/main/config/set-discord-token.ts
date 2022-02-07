export const setDiscordToken = (token?: string): string => {
  if (!token) throw new Error('É necessário usar <DISCORD TOKEN>')
  return token
}
