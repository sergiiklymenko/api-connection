export interface CardInterface {
  body: string,
  id: string,
  title: string,
  user_id: string
}

export interface ApiResult {
  data: CardInterface[],
  meta: []
}
