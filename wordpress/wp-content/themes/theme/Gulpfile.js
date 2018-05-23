const gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  merge = require('merge-stream'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer')

// Internal config, folder structure
var paths = {
  style: {
    source: 'app/sass/',
    output: 'dist/css/',
  },
  script: {
    source: 'app/js/**/*.js',
    output: 'dist/js/',
  }
};

// Starting server
gulp.task('BROWSER-SYNC', function() {
  var files = [
    './style.css',
    './*.php'
  ]

  // initialize browsersync
  browserSync.init(files, {
    proxy: "http://localhost:80",
    notify: false
  })
})

gulp.task('IMAGES', function(){
  gulp.src('public/img/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img/'))
})

gulp.task('JS', function() {
  gulp.src(paths.script.source)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.script.output))
    .pipe(reload({
      stream: true
    }))
})

try {
  gulp.task('SASS', function() {
    return gulp.src(paths.style.source + 'style.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(paths.style.output))
      .pipe(reload({
        stream: true
      }))
  })
} catch(e) {
  console.log("ERROR: ", e.stack)
}

gulp.task('default', ['SASS', 'JS', 'IMAGES', 'BROWSER-SYNC'], function(){
  gulp.watch(paths.style.source + '**/*.scss', ['SASS'])
  gulp.watch(paths.script.source, ['JS'])
  gulp.watch('**/*.php', browserSync.reload)

  console.log('######################');
  console.log('# gulp js is running #');
  console.log('######################');
})
