var gulp = require('gulp');
var babel = require('gulp-babel');
const minify = require('gulp-minify');

/**
 * Convert jsx to js
 */
gulp.task('babel', function() {
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("src/react-js/"));
});

/**
 * Move vendor js scripts
 */
gulp.task('vendor', function() {
    return gulp.src("src/vendor/*.js")
        .pipe(gulp.dest("public/vendor/"));
});

/**
 * Minify react js files
 */
gulp.task('minify-react', function() {
    return gulp.src("src/react-js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("public/js/"))
});

/**
 * Minify js files
 */
gulp.task('minify-js', function() {
    return gulp.src("src/js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("public/js/"))
});

/**
 * Minify all js and react-js
 */
gulp.task("minify-all", gulp.series('minify-react', 'minify-js'));

/**
 * Copy regular js to public
 */
gulp.task('copy-js', function() {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("public/js/"));
});

/**
 * Build with all src unminified
 */
gulp.task('build-debug', gulp.series('babel', 'copy-js', 'vendor'));

/**
 * Build with all src minified
 */
gulp.task('build-release', gulp.series('babel', 'minify-all', 'vendor'));