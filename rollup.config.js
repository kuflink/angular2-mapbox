import { rollup } from 'rollup';
import typescript from 'rollup-plugin-typescript';

export default {
  moduleName: "mapbox.core",
  entry: 'src/ts/index.ts',
  format: 'umd',
  dest: 'core/core.umd.js',
  sourceMap: true,
  globals: {
    '@angular/core': 'ng.core',
    'mapbox-gl': 'mapboxgl'
  },
  plugins: [
    typescript()
  ]
};