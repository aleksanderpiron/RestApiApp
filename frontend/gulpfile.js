const gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
header = require('gulp-header');

const scssVariables = `
$white: #ec0000;
$blue:#ffff00;
`;

gulp.task('sass',  () => {
  return gulp.src('./src/**/*.scss')
    .pipe(header(scssVariables))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'));
});

gulp.task('minify-css', () => {
    return gulp.src('./src/**/*.css')
      .pipe(cleanCSS({compatibility: 'ie8', inline:'local'}))
      .pipe(gulp.dest('./src/'));
  });

gulp.task('prefixer', () =>
  gulp.src('./src/**/*.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('./src/'))
);

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass', 'prefixer', 'minify-css'));
});
