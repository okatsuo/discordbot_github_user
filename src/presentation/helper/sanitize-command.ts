import { appConfig } from '../../main/config'

export const sanitizeCommand = (command: string): string => command.replace(appConfig.botPrefix, '').trim()
