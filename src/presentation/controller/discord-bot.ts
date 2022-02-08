import { Message } from 'discord.js'
import { makeEmbed } from '../../data/use-case/github-user'
import { internalError } from '../errors/internal-error'
import { sanitizeCommand } from '../helper/sanitize-command'

export const discordBotController = async (listener: Message): Promise<void> => {
  const githubUserName = sanitizeCommand(listener.content)

  try {
    const embededMessage = await makeEmbed(githubUserName)
    await listener.channel.send({ embeds: [embededMessage] })
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      await listener.reply(`O usuário ${githubUserName} não existe... 🙁`)
    } else {
      await listener.reply(internalError())
    }
  }
}
