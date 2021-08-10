import { initDataBase, clearDataBase, isDataBase } from '../lifeCycle'

let data = []
beforeAll(() => {
  console.log('beforeAll：初始化数据')
  data = initDataBase()
})

beforeEach(() => {
  console.log('beforeEach：初始化数据')
  data = initDataBase()
})

test('aa is dataBase', () => {
  expect(isDataBase(data, 'aa')).toBeTruthy()
})

test('bb is dataBase', () => {
  expect(isDataBase(data, 'bb')).toBeTruthy()
})

afterEach(() => {
  console.log('afterEach：清除数据')
  data = initDataBase()
})

afterAll(() => {
  console.log('afterAll：清除数据')
  data = clearDataBase()
})
