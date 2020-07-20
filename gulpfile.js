var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function(){
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel())
        .pipe(gulp.dest("public/js/"));
});

gulp.task('js', function() {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("public/js/"));
});

gulp.task('vendor', function() {
    return gulp.src("src/vendor/*.js")
        .pipe(gulp.dest("public/vendor"));
});