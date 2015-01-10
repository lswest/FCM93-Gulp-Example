var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('app', function() {
    gulp.src('./stylus/app.styl')
    .pipe(stylus({
        use: [jeet()],
        compress: true,
        sourcemap: {
            inline: true,
            sourceRoot: '..',
            basePath: 'css'
        }
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('uglify', function() {
  gulp.src('js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['app', 'uglify']);
