import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import sass from 'rollup-plugin-sass'
import serve from 'rollup-plugin-serve'

export default {
  input: './build.js',
  output: [
    {
      file: 'docs/dist/sedom.js',
      format: 'iife',
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
