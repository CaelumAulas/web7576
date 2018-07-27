const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const cssComb = require('gulp-csscomb');
const cmq = require('gulp-merge-media-queries');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minifyHtml = require('gulp-minify-html');
const babel = require('gulp-babel');

gulp.task('css',function(){
    gulp.src(['src/css/**/*.css'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(concat('ceep.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js',function(){
    
    gulp.src(['src/js/**/*.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('ceep.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('html',function(){
    gulp.src(['src/**/*.html'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['html', 'css', 'js'], function(){

    gulp.watch('dist/js/**/*.js',['js']);
    gulp.watch('src/css/**/*.css',['css']);
    gulp.watch('src/**/*.html',['html']);

});