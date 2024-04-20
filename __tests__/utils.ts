import * as prettier from 'prettier'
import { readFileSync } from 'node:fs'
import config from '../prettier.config'

const plugin = new URL('../dist/index.js', import.meta.url).href

export async function format(source: string, options: prettier.Options = {}): Promise<string> {
  try {
    return await prettier.format(source, {
      ...config,
      ...options,
      plugins: [plugin],
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
  let actual = await format(getSourceCode(`./fixtures/${path}/input.${type}`), {
    parser: type === 'ts' || type === 'tsx' ? 'typescript' : 'babel',
  })
  let expected = await format(getSourceCode(`./fixtures/${path}/output.${type}`), {
    parser: type === 'ts' || type === 'tsx' ? 'typescript' : 'babel',
  })

  return {
    actual,
    expected,
  }
}
