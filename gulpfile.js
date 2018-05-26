const gulp = require('gulp'),
  connect = require('gulp-connect');

const files = ['./src/**/*.html', './src/**/*.css'];

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('assets', function () {
  gulp.src([...files])
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([...files], ['assets']);
});

gulp.task('default', ['connect', 'watch']);
