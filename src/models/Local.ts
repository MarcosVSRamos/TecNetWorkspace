class Local {
  id: number
  title: string
  image: string
  category?: 'cidade' | 'rural' | 'distrito'

  constructor(
    id: number,
    title: string,
    image: string,
    category?: 'cidade' | 'rural' | 'distrito'
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.category = category
  }
}

export default Local
