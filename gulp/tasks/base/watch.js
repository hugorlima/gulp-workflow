// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    bower
//    sass
//    nunjucks
//    js
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', 'watch files when changes', function() {
    	// gulp.watch(config.mainYarnFiles.watch, [config.task.vendor]);
        gulp.watch(path.to.sass.src, [config.task.sass]);
        gulp.watch(path.to.nunjucks.watch, [config.task.nunjucks]);
    });

};