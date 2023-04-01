import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import sass from 'rollup-plugin-sass'

export default {
  input: './build.js',
  output: [
    {
      file: 'dist/sedom.js',
      format: 'iife'
    }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    sass({
      output: 'dist/sedom.css'
    })
  ]
}
