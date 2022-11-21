import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import sass from 'rollup-plugin-sass'

export default {
  input: 'script/sedom.js',
  output: [
    {
      file: 'dist/sedom.js',
      format: 'iife',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    sass({
      output: 'dist/sedom.css',
    }),
  ],
}
