/**
 * @jest-environment node
 */
//  在JavaScript中执行异步代码是很常见的，当你有异步方式运行的代码时，Jest需要知道当前它测试的代码是否已完成，然后它可以转移到另一个测试。Jest有若干方法处理这种情况。
//  回调函数
//  如下fetchData(callback)函数，获取一些数据，并在完成时调用callback(data)，期望返回的数据是一个"[]"
import { fetchData, fetchPromise, fetchError } from '../fetchData'

// 默认情况下，一旦达到运行上下文底部Jest测试立即结束，这意味着这个测试将不能按预期工作
// 问题在于一旦fetchData执行结束，此测试就在调用回调函数前结束了(因为同步代码结束后，才是异步拿到的数据)

// 错误写法
// test('fetchData', () => {
//   fetchData((data) => {
//     expect(data).toEqual([])
//   })
// })

// 解决方案：
// 使用单个参数调用done，而不是将测试放在一个空参数的函数。Jest会等done回调函数执行结束后，结束测试
// 若 done() 函数从未被调用，测试用例会正如你预期的那样执行失败（显示超时错误)
// 若 expect 执行失败，它会抛出一个错误，后面的 done() 不再执行。
// 若我们想知道测试用例为何失败，我们必须将 expect 放入 try 中，将 error 传递给 catch 中的 done函数。
// 否则，最后控制台将显示一个超时错误失败，不能显示我们在 expect(data) 中接收的值。
test('fetchData', (done) => {
  function callback(data) {
    try {
      expect(data).toEqual([])
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchData(callback)
})

test('fetchPromise', () => {
  // 错误写法
  // fetchPromise().then((response) => {
  //   expect(response.data).toEqual([])
  // })

  // 为你的测试返回一个promise，则Jest会等待Promise的resove状态，如果promise拒绝，则测试将自动失败
  return fetchPromise().then((response) => {
    expect(response.data).toEqual([])
  })
})

// 错误写法：测试能通过，其实不应该通过
// test('fetchPromise error', () => {
//   return fetchPromise().catch(e => {
//     expect(e.toString()).toMatch('Error')
//   })
// })

// 正确写法：测试不能通过
// test('fetchPromise error', () => {
//   expect.assertions(1) // 断言，必须执行一次expect
//   return fetchPromise().catch(e => {
//     expect(e.toString()).toMatch('Error')
//   })
// })

// 如果使用promise，则测试异步代码有一种更简单的方案，为你的测试返回一个promise，则Jest会等待Promise的resove状态，如果promise拒绝，则测试将自动失败。
// 一定要返回promise，如果省略return。测试将会在fetchPromise返回的promise被resolves、then执行之前，测试就已经被视为已经完成了
// 如果期望promise被reject，则需要使用.catch方法，确保添加expect.assertions来验证一定数量的断言被调用，否则一个fulfilled状态的promise不会让测试用例失败
test('fetchError', () => {
  expect.assertions(1) // 断言，必须执行一次expect
  return fetchError().catch((e) => {
    expect(e.toString()).toMatch('Error')
  })
})

// 正确写法：测试通过
test('fetchPromise resolves匹配器', () => {
  // resolves返回的是response对象
  // toMatchObject去匹配真正返回的data
  return expect(fetchPromise()).resolves.toMatchObject({
    data: [],
  })
})

// 更优雅、直观的写法 async、await
test('fetchPromise async', async () => {
  const response = await fetchPromise()
  expect(response.data).toEqual([])
})

test('fetchError async', async () => {
  expect.assertions(1);
  try {
    await fetchError();
  } catch (e) {
    expect(e.toString()).toMatch('Error');
  }
});