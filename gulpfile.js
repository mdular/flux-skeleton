/**
 * @author Markus J Doetsch mdular.com
 * TODO: minify / uglify
 * TODO: also handle scss
 * TODO: source maps
 */
"use strict";

var gulp = require('gulp'),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    uglify = require('gulp-uglify');

var paths = {
    main: ['./app/main.js'],
    js:  ['./app/**/*.js*'],
    target: './public/js/',
    output: 'main.js'
};

gulp.task('vendor', function () {
    // TODO: separate vendor / app compile output
});

gulp.task('compile', function () {
    browserify(paths.main)
        .transform("babelify", {presets: ["es2015", "react"]})
        // .external('react')
        .bundle()
        .on('error', function (err) {
            // skip the deletes for more verbosity
            delete err.stream;
            delete err.pos;
            delete err.loc;
            delete err.raisedAt;
            delete err.filename;
            console.log(err);
        })
        .pipe(source(paths.output))
        .pipe(gulp.dest(paths.target));
});

gulp.task('build', function () {
    gulp.src(['./public/js/main.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/build'));
});

gulp.task('watch', function () {
    gulp.watch(paths.js, ['compile']);
});

gulp.task('default', ['watch']);
