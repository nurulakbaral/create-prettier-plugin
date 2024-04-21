import type { Printer } from 'prettier'

declare module 'prettier/plugins/estree' {
  const printers: {
    estree: Printer
  }
}
