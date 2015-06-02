/**
 * @author Markus J Doetsch mdular.com
 * TODO: minify / uglify
 * TODO: also handle compass
 * TODO: source maps
 */
"use strict";

var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var babelify = require("babelify");

var paths = {
    main: ['./js/main.js'],
    js:  ['./js/**/*.js*'],
    target: '../public/js/',
    output: 'main.js'
};

gulp.task('js', function () {
    browserify(paths.main)
        .transform(babelify)
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

gulp.task('watch', function () {
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'js']);
