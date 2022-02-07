import { Message } from 'discord.js'
import { sanitizeCommand } from '../helper/sanitize-command'

export const discordBotController = async (listener: Message): Promise<void> => {
  const sanitizedCommand = sanitizeCommand(listener.content)
  await listener.reply('the true command is: ' + sanitizedCommand)
}
