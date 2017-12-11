/**
 * Created by 90001054 on 21/05/2017.
 */
'use strict';

const gulp        = require('gulp');
const spritesmith = require('gulp.spritesmith');
const runSequence = require("run-sequence");
const del         = require("del");
const replace     = require('gulp-replace');
const insert      = require('gulp-insert');


/**
 * Convert icons to sprite + scss
 */
gulp.task('sprite-icon-generation', function () {
    return gulp.src('./src/assets/img/tmp/**.png')
        .pipe(spritesmith({
            imgName: 'icon_sprite.png',
            cssName: 'icon_sprite.scss'
        }))
        .pipe(gulp.dest('./src/assets/img/dist/'));
});
/**
 * then move scss to dev folder
 */
gulp.task('sprite-icon-move-scss', function () {
    return gulp.src('./src/assets/img/dist/icon_sprite.scss')
        .pipe(replace('icon_sprite.png', '/assets/img/dist/icon_sprite.png'))
        .pipe(replace('.#{$sprite-name} {', '&-#{$sprite-name} {\n      vertical-align: middle; display: inline-block;'))
        .pipe(insert.append('.icon {\n  @include sprites($spritesheet-sprites);\n}'))
        .pipe(insert.append('\n \n@mixin sprite-image-important($sprite) {\n    $sprite-image: nth($sprite, 9);\n    @media print {\n      background-image: url(#{$sprite-image})!important;\n    }\n}\n \n@mixin sprite-position-important($sprite) {\n    $sprite-offset-x: nth($sprite, 3);\n    $sprite-offset-y: nth($sprite, 4);\n    @media print {\n      background-position: $sprite-offset-x  $sprite-offset-y !important;\n    }\n}\n \n@mixin sprites-important($sprites) {\n    @each $sprite in $sprites {\n      $sprite-name: nth($sprite, 10);\n      &-#{$sprite-name} {\n        @include sprite-image-important($sprite);\n        @include sprite-position-important($sprite);\n        @include sprite-width($sprite);\n        @include sprite-height($sprite);\n      }\n    }\n}\n \n.icon-important {\n    @include sprites-important($spritesheet-sprites);\n}'))
        .pipe(gulp.dest('./src/app/common/helpers/'));
});

/**
 * delete the file tmp generate for the function sprite-icon-generation
 */
gulp.task('sprite-clean-tmp-file', function(callback) {
    del('./src/assets/img/**/**.scss', { force:false }, function (error, pathsReturned) {
        if (error) {
            console.log("error: " + error);
        } else {
            console.log("----- deleted -----\n" + pathsReturned.join("\n"));
        }
        callback();
    });
});

/**
 * launch all tasks for generate icon
 */
gulp.task('sprite', null, function(callback){
    runSequence(
        'sprite-icon-generation',
        'sprite-icon-move-scss',
        'sprite-clean-tmp-file',
        callback
    );
});
