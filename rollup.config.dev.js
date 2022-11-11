import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import sass from 'rollup-plugin-sass'
import serve from 'rollup-plugin-serve'

export default {
  input: 'js/index.js',
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
    serve({
      open: true,
      port: '3000',
      openPage: '/docs/index.html',
    }),
    livereload({ watch: ['dist', 'docs'] }),
  ],
}
