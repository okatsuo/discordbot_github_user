import { setDiscordToken } from './set-discord-token'

export const appConfig = {
  botPrefix: '!gu',
  token: setDiscordToken(process.env.DISCORD_TOKEN)
}
