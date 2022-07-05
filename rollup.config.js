import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.main,
      format: 'cjs'
    }
  ],
  external: ['the-answer'],
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ]
}
