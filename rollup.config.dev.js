import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass'

export default {
  input: './build.js',
  output: [
    {
      file: 'dist/sedom.js',
      format: 'iife',
    },
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
      output: 'dist/sedom.css',
    }),
    sass({
      output: 'docs/dist/sedom.css',
    }),
    serve({
      open: true,
      port: '3000',
      openPage: '/docs/index.html',
    }),
    livereload({ watch: ['dist', 'docs'] }),
  ],
}
