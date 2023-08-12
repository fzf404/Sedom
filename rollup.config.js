import sass from 'rollup-plugin-sass'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './index.js',
  output: [
    {
      name: 'Sedom',
      format: 'iife',
      file: 'dist/sedom.js',
    },
    {
      file: 'dist/sedom.esm.js',
      format: 'esm',
    },
    {
      name: 'Sedom',
      format: 'iife',
      file: 'docs/dist/sedom.js',
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
