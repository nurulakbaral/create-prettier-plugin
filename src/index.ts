import type { SupportLanguage, Parser, Printer, SupportOption, Options } from 'prettier'
import * as prettierPluginBabel from 'prettier/plugins/babel'
import * as prettierPluginTypeScript from 'prettier/plugins/typescript'
import * as prettierPluginEstree from 'prettier/plugins/estree'

// https://prettier.io/docs/en/plugins#languages
export const languages: Partial<SupportLanguage>[] = [
  {
    name: 'JavaScript/TypeScript/JSX',
    parsers: ['babel', 'typescript'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    vscodeLanguageIds: ['javascript'],
  },
]

// https://prettier.io/docs/en/plugins#parsers
export const parsers: Record<'babel' | 'typescript', Parser> = {
  babel: {
    ...prettierPluginBabel.parsers.babel,
  },
  typescript: {
    ...prettierPluginTypeScript.parsers.typescript,
  },
}

// https://prettier.io/docs/en/plugins#printers
export const printers: Record<'estree', Printer> = {
  estree: {
    ...prettierPluginEstree.printers.estree,
    print: (path, options, print) => {
      let printed = prettierPluginEstree.printers.estree.print(path, options, print)

      return printed
    },
  },
}

// https://prettier.io/docs/en/plugins.html#options
export const options: Record<'optionName', SupportOption> = {
  optionName: {
    type: 'boolean',
    category: 'Global',
    default: true,
    description: 'Extend the option to include the default prettier plugin options',
  },
}

// https://prettier.io/docs/en/plugins#defaultoptions
export const defaultOptions: Options = {
  tabWidth: 4,
}
