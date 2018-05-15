/**
 * REQUIREMENTS
 */
var gulp = require('gulp'),
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync'),
merge = require('merge-stream'),
cssmin = require('gulp-cssmin'),
uglify = require('gulp-uglifyjs'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
cache = require('gulp-cache');

// Internal config, folder structure
var paths = {
  style: {
    source: 'app/sass/',
    destination: 'dist/css/',
  },
  script: {
    source: 'app/js/**/*.js',
    destination: 'dist/js/',
  }
};

// Starting server
gulp.task('browser-sync', function() {
  var files = [
    './style.css',
    './*.php'
  ];

  // initialize browsersync
  browserSync.init(files, {
    proxy: "http://localhost/",
    notify: false
  });
});

gulp.task('images', function(){
  gulp.src('app/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('js', function() {
  gulp.src(paths.script.source)
    .pipe(uglify('wp.min.js'))
    .pipe(gulp.dest(paths.script.destination))
    .pipe(browserSync.reload({
      stream: true
    }));
});

try {
  gulp.task('sass', function() {
      return gulp
        .src(paths.style.source + 'style.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(cssmin().on('error', function(err) {
          console.log(err);
        }))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(paths.style.destination))
        .pipe(browserSync.reload({
            stream: true
        }));
  });
} catch(e) {
  console.log("Error: ", e.stack);
}

gulp.task('default', ['browser-sync', 'sass', 'js', 'images'], function(){
  gulp.watch(paths.style.source + '**/*.scss', ['sass']);
  gulp.watch(paths.script.source, ['js']);
  gulp.watch('**/*.php', browserSync.reload);
});
