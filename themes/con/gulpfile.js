var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs');
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
 gulp.src('sass/**/*.scss')
   .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
       .pipe(autoprefixer('last 2 version'))
   .pipe(sourcemaps.write('./'))
   .pipe(gulp.dest('css'));
});

gulp.task('uglify', function() {
 gulp.src('./themes/con/libs/*.js')
   .pipe(uglify('main.js'))
   .pipe(gulp.dest('./themes/con/js'))
});



gulp.task('watch', function(){
   gulp.watch('sass/**/*.scss', ['sass']);
   gulp.watch('./themes/con/libs/*.js', ['uglify']);
});