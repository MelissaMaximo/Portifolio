import { KnowTech } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: string
  }
  technologies: KnowTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knowTechs: KnowTech[]
}

export type HomePageData = {
  page: HomePageInfo
}
