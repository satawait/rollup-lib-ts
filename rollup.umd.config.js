import babel from '@rollup/plugin-babel';
import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild'

const isProduction = process.env.NODE_ENV === 'production'
const pluginsWithEnv = isProduction ? [] : [serve({
  open: true,
  openPage: '/',
  port: 10001,
  contentBase: ['dist', 'examples']
}), livereload('dist/umd')]

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/umd/index.js'),
      format: 'umd',
      name: 'rain'
    }
  ],
  plugins: [
    esbuild({
      target: 'es2015',
      minify: true,
      drop: ['console', 'debugger']
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    json(),
    commonjs(),
    ...pluginsWithEnv
  ],
};