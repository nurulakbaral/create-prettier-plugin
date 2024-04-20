import { test, describe, expect } from 'vitest'
import { getFormattedSourceCode } from './utils'

describe('Basic Tests', () => {
  test('javascript', async () => {
    let { actual, expected } = await getFormattedSourceCode('javascript', 'js')
    expect(actual, 'Missing actual (input) file').to.not.be.undefined
    expect(expected, 'Missing expected (output) file').to.not.be.undefined
    expect(actual).toBe(expected)
    expect(actual).toMatchSnapshot()
  })
  test('typescript', async () => {
    let { actual, expected } = await getFormattedSourceCode('typescript', 'ts')
    expect(actual, 'Missing actual (input) file').to.not.be.undefined
    expect(expected, 'Missing expected (output) file').to.not.be.undefined
    expect(actual).toBe(expected)
    expect(actual).toMatchSnapshot()
  })
  test('jsx', async () => {
    let { actual, expected } = await getFormattedSourceCode('jsx', 'jsx')
    expect(actual, 'Missing actual (input) file').to.not.be.undefined
    expect(expected, 'Missing expected (output) file').to.not.be.undefined
    expect(actual).toBe(expected)
    expect(actual).toMatchSnapshot()
  })
  test('tsx', async () => {
    let { actual, expected } = await getFormattedSourceCode('tsx', 'tsx')
    expect(actual, 'Missing actual (input) file').to.not.be.undefined
    expect(expected, 'Missing expected (output) file').to.not.be.undefined
    expect(actual).toBe(expected)
    expect(actual).toMatchSnapshot()
  })
})
