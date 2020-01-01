import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/js/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'static/js/main.js'
  },
  plugins: [
    postcss({
      extract: 'static/css/main.css'
    }),
    resolve({ browser: true }),
    commonjs(),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
