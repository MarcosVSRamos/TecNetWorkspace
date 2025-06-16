export type Equipamento = {
  titulo: string
  link: string
}

export type Torre = {
  id: string
  nome: string
  location: 'cidade' | 'rural' | 'distrito'
  equipamentos: Equipamento[]
}
