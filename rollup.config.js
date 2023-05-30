import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import sass from 'rollup-plugin-sass'

export default {
  input: './index.js',
  output: [
    {
      file: 'dist/sedom.js',
      format: 'iife',
      name: 'Sedom',
    },
    {
      file: 'dist/sedom.esm.js',
      format: 'esm',
    },
    {
      file: 'docs/dist/sedom.js',
      format: 'iife',
      name: 'Sedom',
    },
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    sass({
      output: 'dist/sedom.css',
    }),
    sass({
      output: 'docs/dist/sedom.css',
    }),
  ],
}
