import { Message } from 'discord.js'
import { makeEmbed } from '../../data/github-user'
import { getGithubUser } from '../../infra/getGithubUser'
import { sanitizeCommand } from '../helper/sanitize-command'

export const discordBotController = async (listener: Message): Promise<void> => {
  const sanitizedCommand = sanitizeCommand(listener.content)
  const githubUser = await getGithubUser(sanitizedCommand)
  const embededMessage = makeEmbed(githubUser)

  await listener.channel.send({ embeds: [embededMessage] })
}
