class Local {
  id: number
  title: string
  image: string
  category?: 'cidade' | 'rural' | 'distrito'
  link?: string

  constructor(
    id: number,
    title: string,
    image: string,
    category?: 'cidade' | 'rural' | 'distrito',
    link?: string
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.category = category
    this.link = link
  }
}

export default Local
