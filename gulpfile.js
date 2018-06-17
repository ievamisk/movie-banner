const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const gulpUtil = require("gulp-util");

gulp.task('serve', ['css'], function() {
    browserSync.init({
        server: "./",
    });

    gulp.watch("assets/scss/*.scss", ['css']).on('change', browserSync.reload);
    gulp.watch("assets/js/*.js", ['webpack']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('webpack', function () {
    webpack(require('./webpack.config.js'), function (err, stats) {
        if (err) throw new gulpUtil.PluginError("webpack", err);
        gulpUtil.log("[webpack]", stats.toString({}));
    });
});

gulp.task('css', function(){
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

gulp.task('default', [ 'css' ]);