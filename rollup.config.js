import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

/** @type {import('rollup').RollupOptions'} */
export default {
  input: 'index.js',
  output: [
    {
      name: 'Sedom',
      format: 'iife',
      file: 'dist/sedom.js',
    },
    {
      name: 'Sedom',
      format: 'esm',
      file: 'dist/sedom.esm.js',
    },
  ],
  plugins: [
    json(),
    terser(),
    resolve(),
    commonjs(),
    scss({
      fileName: 'sedom.css',
      outputStyle: 'compressed',
    }),
    copy({
      targets: [
        { src: 'dist/sedom.css', dest: 'docs/dist' },
        { src: 'dist/sedom.js', dest: 'docs/dist' },
      ],
    }),
  ],
}
