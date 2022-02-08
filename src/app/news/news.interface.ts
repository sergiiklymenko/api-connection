export interface NewsInterface {
  author: string
  content: string
  description: string
  polishedAt: string
  source: SourceInterface
  title: string
  url:string
  urlToImage: string
}

export interface ApiDataInterface {
  articles: NewsInterface[]
  status: string
  totalResults: number
}

export interface SourceInterface {
  id: string
  name: string
}
