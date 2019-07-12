const gulp = require('gulp');
const watch = require('gulp-watch');
const minihtml = require('gulp-minify-html');
const comfilesass=require('gulp-sass');
const minicss = require('gulp-minify-css');
const rename=require('gulp-rename');
const uglify=require('gulp-uglify');
const imagemin=require('gulp-imagemin');
const babel=require('gulp-babel');
const es2015=require('babel-preset-es2015');

gulp.task('uhtml', function() {
  return gulp.src('./src/*.html').pipe(minihtml()).pipe(gulp.dest('dist/src'));
});

gulp.task('ucss', () =>{
	return gulp.src('./src/css/*.css').pipe(minicss()).pipe(gulp.dest('dist/src/css'));
})

gulp.task('ujs', () => {
    return gulp.src('./src/script/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/src/script/js'));
});

gulp.task('uimg', () => {
    return gulp.src('./src/img/*.{png,jpg,gif,ico}').pipe(imagemin({
        optimizationLevel: 5,
        progressive: true, 
        interlaced: true,
        multipass: true
    })).pipe(gulp.dest('dist/src/img'));
});

gulp.task('upng', () => {
    return gulp.src('./src/img/*.{png,jpg,gif,ico}').pipe(imagemin({
        optimizationLevel: 5,
        progressive: true, 
        interlaced: true,
        multipass: true
    })).pipe(gulp.dest('dist/src/img'));
});

gulp.task('ues6', () => {
    return gulp.src('./src/script/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        })).pipe(uglify()).pipe(gulp.dest('dist/src/script/js'));
});

gulp.task('default', function () {
    watch(['src/*.html','src/css/*.css','src/script/js/*.js'], gulp.parallel('uhtml','ucss','ues6'));
});
