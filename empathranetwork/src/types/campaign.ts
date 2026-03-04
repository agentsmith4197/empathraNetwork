export interface Campaign {
  $id?: string
  title: string
  description: string
  goalAmount: number
  raisedAmount: number
  status: string
  createdAt: string
  image: string
}