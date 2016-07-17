## react + flux (alt) + react-router + gulp application skeleton

### Start hacking:

    npm install

    node_modules/.bin/gulp compile
    node_modules/.bin/gulp watch

### Demo:

simply open ```public/index.html``` in a browser (after compilation)

### What's inside:

- react
- react-router
- flux framework "alt"

gulp build configuration:
- jsx transpiler
- es6 transpiler
- browserify bundling

### Building for production:

    NODE_ENV=production node_modules/.bin/gulp compile
    NODE_ENV=production node_modules/.bin/gulp build

the result will be in ```public/js/build/main.js```

## TODO:
- [ ] separate vendor bundle
- [ ] switch to redux
