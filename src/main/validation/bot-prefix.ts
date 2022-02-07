import { appConfig } from '../config'

export const isCommandToDiscordBot = (msg: string): boolean => msg.trimStart().startsWith(appConfig.botPrefix)
