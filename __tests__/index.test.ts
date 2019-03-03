import HelloWorld from '../src/index'

describe('Hello world', () => {
  describe('When greet() is called', () => {
    test('Should return \'Hello World\'', () => {
      const instance = new HelloWorld()
      expect(instance.greet()).toBe('Hello World!')
    })
  })
})