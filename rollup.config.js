export default {
  moduleName: "mapbox.core",
  entry: 'src/js/index.js',
  format: 'umd',
  dest: 'core/core.umd.js',
  sourceMap: true,
  globals: {
    '@angular/core': 'ng.core',
    'mapbox-gl': 'mapboxgl'
  }
};