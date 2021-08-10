// toBe:严格相等 ===
test('toBe匹配器', () => {
  expect(2).toBe(2) // 成功
  //   const obj = { a: 1 }
  //   expect(obj).toBe({ a: 1 }) // 失败
})

// toEqual:内容结果相等
test('toEqual匹配器', () => {
  expect(2).toEqual(2)
  const obj = { a: 1 }
  expect(obj).toEqual({ a: 1 })
})

test('toBeNull匹配器', () => {
  expect(null).toBeNull()
})

test('toBeUndefined匹配器', () => {
  expect(undefined).toBeUndefined()
})

test('toBeDefined匹配器', () => {
  const a = 1
  expect(a).toBeDefined()
})

test('toBeTruthy匹配器', () => {
  expect(true).toBeTruthy()
  expect(1).toBeTruthy()
})

test('toBeFalsy匹配器', () => {
  expect(false).toBeFalsy()
  expect(0).toBeFalsy()
})

// expect > toBe
test('toBeGreaterThan匹配器', () => {
  // expect(9).toBeGreaterThan(10) // 失败
  // expect(10).toBeGreaterThan(10) // 失败
  expect(11).toBeGreaterThan(10)
})

// expect >= toBe
test('toBeGreaterThanOrEqual匹配器', () => {
  // expect(9).toBeGreaterThanOrEqual(10) // 失败
  expect(10).toBeGreaterThanOrEqual(10)
  expect(11).toBeGreaterThanOrEqual(10)
})

// expect < toBe
test('toBeLessThan匹配器', () => {
  expect(9).toBeLessThan(10)
  // expect(10).toBeLessThan(10) // 失败
  // expect(11).toBeLessThan(10) // 失败
})

// expect <= toBe
test('toBeLessThanOrEqual匹配器', () => {
  expect(9).toBeLessThanOrEqual(10)
  expect(10).toBeLessThanOrEqual(10)
  // expect(11).toBeLessThanOrEqual(10) // 失败
})

// 浮点数的近似相等比较
test('toBeCloseTo匹配器', () => {
  //   expect(0.1 + 0.2).toBe(0.3) // 失败 0.1 + 0.2 = 0.30000000000000004
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

// toMatch 匹配expect字符串是否存在toMatch
test('toMatch匹配器', () => {
  const str = 'aa,bb,cc'
  expect(str).toMatch('aa')
  // expect(str).toMatch("dd") // 失败
})

// toMatch(regexp | string) 检查字符串中的正则表达式匹配
test('toMatch匹配器', () => {
  const str = 'aa,bb,cc'
  expect(str).toMatch('aa')
  // expect(str).toMatch("dd") // 失败
})

// toContain(item) 检查的项目是在数组中。为了测试数组中的项目，这使用===了严格的相等性检
test('toContain匹配器', () => {
  const arr = ['aa', 'bb', 'cc']
  expect(arr).toContain('aa')
  // expect(str).toContain("dd") // 失败
  const set = new Set(arr)
  expect(set).toContain('aa') // set也可以匹配成功
})

// toContain(item) 检查的项目是在数组中。为了测试数组中的项目，这使用===了严格的相等性检
test('toContain匹配器', () => {
  const arr = ['aa', 'bb', 'cc']
  expect(arr).toContain('aa')
  // expect(str).toContain("dd") // 失败
  const set = new Set(arr)
  expect(set).toContain('aa') // set也可以匹配成功
})

const throwNewErrorFunc = () => {
  throw new Error('this is a error')
}

const newFunc = () => {
  console.log('newFunc')
}

// toThrow(error?) 测试函数抛出异常
test('toThrow匹配器', () => {
  expect(throwNewErrorFunc).toThrow()
  expect(throwNewErrorFunc).toThrow('')
  // expect(throwNewErrorFunc).toThrow('sss') // 失败
  expect(throwNewErrorFunc).toThrow('this is a error')
  expect(newFunc).not.toThrow() // 不抛出错误
})

