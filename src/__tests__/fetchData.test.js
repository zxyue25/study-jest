/**
 * @jest-environment node
 */

import { fetchData } from '../fetchData'

test('fetchData', (done) => {
  fetchData((data) => {
    expect(data).toEqual([])
    done()
  })
})
