import type { RollupOptions } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  external: ['prettier', 'prettier/plugins/babel', 'prettier/plugins/typescript', 'prettier/plugins/estree'],
  plugins: [commonjs(), typescript()],
}

export default config
