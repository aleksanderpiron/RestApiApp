var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',  () => {
  return gulp.src('./src/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('minify-css', () => {
    return gulp.src('./src/styles/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8', inline:'local'}))
      .pipe(gulp.dest('./src/styles/css'));
  });

gulp.task('prefixer', () =>
  gulp.src('./src/styles/css/*.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('./src/styles/css'))
);

gulp.task('watch', function () {
  gulp.watch('./src/styles/scss/*.scss', gulp.series('sass', 'prefixer', 'minify-css'));
});
