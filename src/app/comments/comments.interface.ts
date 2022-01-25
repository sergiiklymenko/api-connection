export interface CommentsInterface {
  body: string
  email: string
  id: string
  name: string
  post_id: string
}

export interface ApiData {
  data: CommentsInterface[]
  meta: []
}
