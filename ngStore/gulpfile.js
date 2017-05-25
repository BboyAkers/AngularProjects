'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('concatScripts', function(){
    //folder path
    gulp.src([
        'app/app.js',
        'app/services/templateService.js',
        'app/views/templates/templatesController.js',
        'app/views/templateDetails/templateDetailsController.js'
               
    
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