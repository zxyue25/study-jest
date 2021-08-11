import {
  initDataBase,
  clearDataBase,
  isDataBase,
  initFoodDataBase,
  isFoodDataBase,
} from '../lifeCycle'

describe('DataBase', () => {
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
})

describe('FoodDataBase', () => {
  beforeAll(() => {
    initFoodDataBase()
  })
  test('牛奶 is FoodDataBase', () => {
    expect(isFoodDataBase('牛奶')).toBeTruthy()
  })
})
