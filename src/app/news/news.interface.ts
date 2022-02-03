export interface NewsInterface {
  author: string
  content: string
  description: string
  polishedAt: string
  source: string
  title: string
  url:string
  urlToImage: string
}

export interface ApiData {
  articles: NewsInterface[]
  status: string
  totalResults: number
}
