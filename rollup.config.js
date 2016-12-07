export default {
  moduleName: "mapbox.core",
  entry: 'src/js/mapbox.module.js',
  format: 'umd',
  dest: 'dist/core.umd.js',
  sourceMap: true,
  globals: {
    '@angular/core': 'ng.core',
    'mapbox-gl': 'mapbox.gl'
  }
};