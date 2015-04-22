var gulp          = require('gulp');
var rename        = require('gulp-rename');
var browserify    = require('browserify');
var uglifyjs      = require('gulp-uglifyjs');
var less          = require('gulp-less');
var prefix        = require('gulp-autoprefixer');
var minifyCSS     = require('gulp-minify-css');
var plumber       = require('gulp-plumber');
var sourcemaps    = require('gulp-sourcemaps');
var html          = require('html-browserify');
var babelify      = require('babelify');
var gutil         = require('gulp-util');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var browserifyCss = require('browserify-css');
var base64        = require('gulp-base64');
var changed       = require('gulp-changed');
var ractify       = require('ractify')

gulp.task('watch', function() {
  gulp.watch('scripts/advarics/**/*.js', ['js']);
});

gulp.task('watch', function() {
  gulp.watch(['scripts/advarics/**/*.js',
              'styles/advarics/**/*.css'], ['js', 'test']);
});

gulp.task('images', function() {
  return gulp.src('styles/advarics/images/**/*')
    .pipe(changed('public/images'))
    .pipe(gulp.dest('public/images'));
});

gulp.task('styles', ['images'], function() {
  return gulp.src('styles/advarics/adv-styles.less')
    .pipe(less())
    .pipe(base64())
    .pipe(prefix({ cascade: true }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('minify', ['styles'], function() {
  return gulp.src('build/bundle.css')
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('js', function () {
  var b = browserify({
    entries: './scripts/advarics/app.js',
    debug: true,
    transform: [
                ractify,
                browserifyCss,
                html,
                babelify
                ]
  });
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglifyjs('bundle.min.js',
        {
          mangle: false,
          output: {
            beautify: true
          }
        }))
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', ['js','minify']);
gulp.task('default', ['build']);
