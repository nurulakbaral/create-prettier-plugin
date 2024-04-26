import type { SupportLanguage, Parser, Printer, SupportOption, Options } from 'prettier'
import type { AstPath, ParserOptions } from 'prettier'
import type { JSXElement } from 'babel-types'
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
      let node = path.getNode() // AST Node.
      /**
       * @Notes
       * This recursive print `prettierPluginEstree.printers.estree.print()` must be called first before Doc manipulation.
       * If not, will break the print chain (e.g leading/trailing comments).
       */
      let printed = prettierPluginEstree.printers.estree.print(path, options, print)

      /** @Notes Example doc manipulation */
      function printJSXElement(path: AstPath, options: ParserOptions, print: Printer['print'], node: JSXElement) {
        return printed
      }

      if (node.type === 'JSXElement') {
        let customPrinted = printJSXElement(path, options, print, node)
        return printed // Change this return value to `customPrinted` to apply the custom print
      }

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
