import { expect, test } from '@jest/globals'
import { funcA } from '../a'

test('funcA', () => {
  expect(funcA(1, 1)).toBe(2)
})
