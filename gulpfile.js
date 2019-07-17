/*
 * The packages needed for this gulpfile:
 *
 * npm install gulp merge-stream gulp-sass gulp-postcss autoprefixer gulp-sourcemaps gulp-csso gulp-rename
 */
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

// variables
let paths = {
    srcStyle: "src/em.scss",
    distStyle: "dist",
};

// Compile and minify style files
gulp.task('style', function () {
    let standard = gulp.src(paths.srcStyle)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'));

    let minify = gulp.src(paths.srcStyle)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(csso())
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.write('.'));

    return mergeStream(standard, minify)
        .pipe(gulp.dest(paths.distStyle));
});

// Default
gulp.task('default', ['style']);
