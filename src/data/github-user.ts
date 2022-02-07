import { EmbedFieldData, MessageEmbed } from 'discord.js'
import { GithubUser } from './protocols'

const githubIcon = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
const embedColor = '#FFC75F'

const buildField = (user: GithubUser): EmbedFieldData[] => {
  const fields: EmbedFieldData[] = [
    {
      name: 'Usuário desde:',
      value: Intl.DateTimeFormat('pt-br', {
        dateStyle: 'long'
      }).format(new Date(user.created_at))
    },
    { name: 'Empresa:', value: user.company ?? 'Não informado' },
    { name: 'Repositórios públicos:', value: user.public_repos.toString(), inline: true },
    { name: 'Seguindo:', value: user.following.toString(), inline: true },
    { name: 'Seguidores:', value: user.followers.toString(), inline: true }
  ]

  return fields
}

export const makeEmbed = (user: GithubUser): MessageEmbed => {
  const embedMessage = new MessageEmbed()
    .setColor(embedColor)
    .setTitle(user.name ?? user.login)
    .setURL(user.html_url)
    .setAuthor({ name: user.login, iconURL: githubIcon, url: user.html_url })
    .setDescription(user.bio ?? `${user.name ?? user.login} ainda está pensando em uma frase de efeito para o seu perfil`)
    .setThumbnail(user.avatar_url)
    .addFields(buildField(user))
    .setTimestamp()

  return embedMessage
}
