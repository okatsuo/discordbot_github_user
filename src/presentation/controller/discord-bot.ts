import { Message } from 'discord.js'
import { makeEmbed } from '../../data/use-case/github-user'
import { getGithubUser } from '../../infra/getGithubUser'
import { sanitizeCommand } from '../helper/sanitize-command'

export const discordBotController = async (listener: Message): Promise<void> => {
  const githubUserName = sanitizeCommand(listener.content)
  const githubUser = await getGithubUser(githubUserName)

  if (githubUser) {
    const embededMessage = makeEmbed(githubUser)
    await listener.channel.send({ embeds: [embededMessage] })
  } else {
    await listener.reply(`O usuário ${githubUserName} não existe... 🙁`)
  }
}
