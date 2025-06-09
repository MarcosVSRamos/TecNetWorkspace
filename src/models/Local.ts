class Local {
  id: number
  title: string
  image: string
  category?: 'cidade' | 'rural' | 'destrito'

  constructor(
    id: number,
    title: string,
    image: string,
    category?: 'cidade' | 'rural' | 'destrito'
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.category = category
  }
}

export default Local
