'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate');




gulp.task('concatScripts', function () {
    gulp.src([
        'app/app.js',
        'app/services/githubService.js',
        'app/services/weatherService.js',
        'app/views/home/homeController.js',
        'app/views/email/emailController.js',
        'app/views/invoicing/invoicingController.js',
        'app/views/news/newsController.js',
        'app/views/portfolio/portfolioController.js'
    ])
        .pipe(concat('appDist.js'))
        // .pipe(ngAnnotate())
        .pipe(gulp.dest('app'));
});


gulp.task('minifyScripts', function () {
    gulp.src('app/appDist.js')
        .pipe(uglify())
        .pipe(gulp.dest('app'));
});

gulp.task('build', ['concatScripts', 'minifyScripts']);


gulp.task("default", ["hello"], function () {
    console.log('This is the default task!');
});