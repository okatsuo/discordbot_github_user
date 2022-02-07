import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { appConfig } from './config'
import { isCommandToDiscordBot } from './validation/bot-prefix'
import { discordBotController } from '../presentation/controller/discord-bot'

void (async () => {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  })

  client.on('messageCreate', async (event) => {
    const { content } = event
    if (isCommandToDiscordBot(content)) await discordBotController(event)
  })

  client.login(appConfig.token)
    .then(() => console.log('[BOT] Running in DEV Mode'))
    .catch((error) => console.error('[BOT] Error:', error))
})()
