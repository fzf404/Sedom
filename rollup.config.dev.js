import livereload from 'rollup-plugin-livereload'
import sass from 'rollup-plugin-sass'
import serve from 'rollup-plugin-serve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

/** @type {import('rollup').RollupOptions'} */
export default {
  input: './index.js',
  output: [
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
      output: 'docs/dist/sedom.css',
    }),
    serve({
      port: '3000',
      contentBase: 'docs',
    }),
    livereload({ watch: ['docs'] }),
  ],
}
