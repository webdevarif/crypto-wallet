// gulpfile.js
'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cssminify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');

/* *** PATHS
*****************************************/ 
const paths = {
  // FRONTEND PATHS
  Frontend: {
      sass: {
        root: './src/sass',
        src: './src/sass/frontend/**/*.scss',
        compile: './src/frontend/assets/css/',
        dest: './src/frontend/dist/assets/css/',
      },
      js: {
        src: './src/frontend/assets/js/*.js',
        dest: './src/frontend/dist/assets/js',
      },
      html: {
        root: './src/frontend/html/',
        src: './src/frontend/html/*.html',
        dest: './src/frontend/dist/html',
      },
      img: {
          src: './src/frontend/assets/images/*.{png,jpg,svg}',
          image_dest: './src/frontend/dist/assets/images',
          webp_dest: './src/frontend/dist/assets/webp',
      },
  },

  // DASHBOARD PATHS
  Dashboard: {
      sass: {
        root: './src/sass',
        src: './src/sass/dashboard/**/*.scss',
        compile: './src/dashboard/assets/css/',
        dest: './src/dashboard/dist/assets/css/',
      },
      js: {
        src: './src/dashboard/assets/js/*.js',
        dest: './src/dashboard/dist/assets/js',
      },
      html: {
        root : './src/dashboard/html/',
        src : './src/dashboard/html/*.html',
        dest : './src/dashboard/dist/html',
      },
      img: {
          src: './src/dashboard/assets/images/*.{png,jpg,svg}',
          image_dest: './src/dashboard/dist/assets/images',
          webp_dest: './src/dashboard/dist/assets/webp',
      },
  }
}

/* *** FRONTEND : STYLE FILES
*****************************************/ 
function FrontendStyleFiles() {
  return gulp.src(paths.Frontend.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(cssminify())
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.Frontend.sass.compile))
    .pipe(browserSync.stream()); // Ensure this line is here
}

/* *** FRONTEND : HTML FILES
*****************************************/ 
function FrontendHtmlFiles(){
  return gulp.src(paths.Frontend.html.src)
  .pipe(browserSync.stream())
}


// /* *** FRONTEND : IMAGES FILES
// *****************************************/ 
// function FrontendImagesFiles(){
//   return gulp.src(paths.Frontend.img.src)
//   .pipe(imagemin())
//   .pipe(gulp.dest(paths.Frontend.img.image_dest))
//   .pipe(browserSync.stream())
// }

// /* *** FRONTEND : WEB FILES
// *****************************************/ 
// function FrontendWebpFiles(){
//   return gulp.src(paths.Frontend.img.image_dest)
//   .pipe(imagewebp())
//   .pipe(gulp.dest(paths.Frontend.img.webp_dest))
//   .pipe(browserSync.stream())
// }

/* *** DASHBOARD : STYLE FILES
*****************************************/ 
function DashboardStyleFiles() {
  return gulp.src(paths.Dashboard.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(cssminify())
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.Dashboard.sass.compile))
    .pipe(browserSync.stream());
}

/* *** DASHBOARD : HTML FILES
*****************************************/ 
function DashboardHtmlFiles(){
  return gulp.src(paths.Dashboard.html.src)
  .pipe(browserSync.stream())
}

// /* *** DASHBOARD : IMAGES FILES
// *****************************************/ 
// function DashboardImagesFiles(){
//   return gulp.src(paths.Dashboard.img.src)
//   .pipe(imagemin())
//   .pipe(gulp.dest(paths.Dashboard.img.image_dest))
//   .pipe(browserSync.stream())
// }

// /* *** DASHBOARD : IMAGES FILES
// *****************************************/ 
// function DashboardImagesFiles(){
//   return gulp.src(paths.Dashboard.img.src)
//   .pipe(imagemin())
//   .pipe(gulp.dest(paths.Dashboard.img.image_dest))
//   .pipe(browserSync.stream())
// }


// /* *** DASHBOARD : WEB FILES
// *****************************************/ 
// function DashboardWebpFiles(){
//   return gulp.src(paths.Dashboard.img.image_dest)
//   .pipe(imagewebp())
//   .pipe(gulp.dest(paths.Dashboard.img.webp_dest))
//   .pipe(browserSync.stream())
// }

/* *** FRONTEND GULP
*****************************************/ 
function frontend() {
  browserSync.init({
    server: {
      baseDir: './src/frontend/',
    },
  });

  gulp.watch('./src/sass/frontend/**/*.scss', FrontendStyleFiles);
  gulp.watch(paths.Frontend.html.root, FrontendHtmlFiles);
  // Add other frontend file watchers as needed
}

gulp.task('frontend', frontend);

/* *** DASHBOARD GULP
*****************************************/ 
function dashboard() {
  browserSync.init({
    server: {
      baseDir: './src/dashboard',
    },
  });

  gulp.watch('./src/sass/dashboard/**/*.scss', DashboardStyleFiles);
  gulp.watch(paths.Dashboard.html.root, DashboardHtmlFiles);
  // Add other dashboard file watchers as needed
}

gulp.task('dashboard', dashboard);

/* *** WATCH GULP
*****************************************/
function watch() {
  gulp.watch('./src/sass/frontend/**/*.scss', frontend);

  gulp.watch('./src/sass/dashboard/**/*.scss', dashboard);
}

/* *** DEFAULT GULP
*****************************************/ 
exports.default = gulp.series(
  FrontendStyleFiles,
  FrontendHtmlFiles,
  // FrontendImagesFiles,
  // FrontendWebpFiles,

  DashboardStyleFiles,
  DashboardHtmlFiles,
  // DashboardImagesFiles,
  // DashboardWebpFiles,

  watch,
)

exports.watch = watch;
