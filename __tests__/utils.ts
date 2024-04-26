import * as prettier from 'prettier'
import { readFileSync, readdirSync } from 'node:fs'
import config from '../prettier.config'

const plugin = new URL('../dist/index.js', import.meta.url).href

export async function format(
  source: string,
  options: prettier.Options = {},
  type: 'input' | 'output',
): Promise<string> {
  try {
    return await prettier.format(source, {
      ...config,
      ...options,
      plugins: type === 'input' ? [plugin] : [],
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    if (typeof e === 'string') {
      throw new Error(e)
    }
  }
  return ''
}

export function getSourceCode(path: string) {
  try {
    let content = readFileSync(path, 'utf-8')
    return content
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    if (typeof e === 'string') {
      throw new Error(e)
    }
  }
  return ''
}

export async function getFormattedSourceCode(path: string, type: 'js' | 'ts' | 'jsx' | 'tsx') {
  let actual = await format(
    getSourceCode(`./fixtures/${path}/input.${type}`),
    {
      parser: type === 'ts' || type === 'tsx' ? 'typescript' : 'babel',
    },
    'input',
  )
  let expected = await format(
    getSourceCode(`./fixtures/${path}/output.${type}`),
    {
      parser: type === 'ts' || type === 'tsx' ? 'typescript' : 'babel',
    },
    'output',
  )

  return {
    actual,
    expected,
  }
}

export function getFixturesFolderName(path: string): Array<string> {
  try {
    let files = readdirSync(path)
    return files
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    if (typeof e === 'string') {
      throw new Error(e)
    }
  }

  return []
}
