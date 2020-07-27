class Militar {
  constructor (trigrama = 'LAL') {
    this.trigrama = trigrama
  }

  obterTrigrama () {
    return this.trigrama
  }
}

describe('obter trigrama do militar', () => {
  test('deveria retornar o trigrama do militar', () => {
    const sut = new Militar('LAL')
    const trigrama = sut.obterTrigrama()
    expect(trigrama).toBe('LAL')
  })
})
