class Missao {
  constructor (numero) {
    this.numero = numero
  }

  obterNumero () {
    return this.numero
  }
}

describe('obter numero missao', () => {
  test('deveria retornar o numero da missao', () => {
    const sut = new Missao('100')
    const numero = sut.obterNumero()
    expect(numero).toBe('100')
  })
})
