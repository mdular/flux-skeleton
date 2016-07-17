## react + flux (alt) + react-router + gulp application skeleton

### start hacking:

´´´npm install´´´

´´´node_modules/.bin/gulp compile´´´
´´´node_modules/.bin/gulp watch´´´

### demo:

simply open public/index.html in a browser (after compilation)

### building for production:

´´´node_modules/.bin/gulp compile´´´
´´´node_modules/.bin/gulp build´´´

the result will be in ´´´public/js/build/main.js´´´

### inside:

react
react-router
flux framework "alt"
gulp build configuration:
- jsx transpiler
- es6 transpiler
- browserify bundling

## TODO:
[] separate vendor bundle
[] switch to redux
