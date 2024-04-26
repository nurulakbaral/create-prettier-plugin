import { test, describe, expect } from 'vitest'
import { getFormattedSourceCode, getFixturesFolderName } from './utils'

const fixturesFolderName = getFixturesFolderName('./fixtures')
describe('JavaScript', () => {
  for (let folderName of fixturesFolderName) {
    if (folderName?.startsWith('javascript')) {
      test(folderName, async () => {
        let { actual, expected } = await getFormattedSourceCode(folderName, 'js')
        expect(actual, 'Missing actual (input) file').to.not.be.undefined
        expect(expected, 'Missing expected (output) file').to.not.be.undefined
        expect(actual).toBe(expected)
        expect(actual).toMatchSnapshot()
      })
    }
  }
})
describe('JSX', () => {
  for (let folderName of fixturesFolderName) {
    if (folderName?.startsWith('jsx')) {
      test(folderName, async () => {
        let { actual, expected } = await getFormattedSourceCode(folderName, 'jsx')
        expect(actual, 'Missing actual (input) file').to.not.be.undefined
        expect(expected, 'Missing expected (output) file').to.not.be.undefined
        expect(actual).toBe(expected)
        expect(actual).toMatchSnapshot()
      })
    }
  }
})
describe('TypeScript', () => {
  for (let folderName of fixturesFolderName) {
    if (folderName?.startsWith('typescript')) {
      test(folderName, async () => {
        let { actual, expected } = await getFormattedSourceCode(folderName, 'ts')
        expect(actual, 'Missing actual (input) file').to.not.be.undefined
        expect(expected, 'Missing expected (output) file').to.not.be.undefined
        expect(actual).toBe(expected)
        expect(actual).toMatchSnapshot()
      })
    }
  }
})
describe('TSX', () => {
  for (let folderName of fixturesFolderName) {
    if (folderName?.startsWith('tsx')) {
      test(folderName, async () => {
        let { actual, expected } = await getFormattedSourceCode(folderName, 'tsx')
        expect(actual, 'Missing actual (input) file').to.not.be.undefined
        expect(expected, 'Missing expected (output) file').to.not.be.undefined
        expect(actual).toBe(expected)
        expect(actual).toMatchSnapshot()
      })
    }
  }
})
