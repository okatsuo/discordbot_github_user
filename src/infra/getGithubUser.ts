import axios from 'axios'
import { GithubUser } from '../data/protocols'

export const getGithubUser = async (name: string): Promise<GithubUser | null> => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${name}`)
    return data
  } catch (error) {
    return null
  }
}
