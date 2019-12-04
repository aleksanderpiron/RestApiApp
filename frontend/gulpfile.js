const gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
header = require('gulp-header');

const scssVariables = `
$color1:#3ce2b7;
$color2:#23395B;
$color3:#a08dd3;
$color4:#edea50;
$error:#ce0101;
$correct:#26ac21;
$btn1:#3ce2b7;
$btn1_hover:#29cea2;
$btn2:#23395B;
$btn2_hover:#192942;
$btn_danger:#ce0101;
$btn_danger_hover:#9e0000;
$noti_info:#224a9e;
$noti_info_icon:#23395B;
$noti_error:#ce0101;
$noti_error_icon:#9e0000;
$noti_success:#26ac21;
$noti_success_icon:#1a7916;
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
