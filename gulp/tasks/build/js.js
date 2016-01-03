// gulp/tasks/build/js.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp build:js' : main js task
// ----------------------------------
// config:
//     config.task.build : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

	// copy js files task
    gulp.task(config.task.build + ':js', function() {

        return gulp.src(path.to.js.dist.dev + '/*.{js,map}')
            .pipe(gulp.dest(path.to.js.dist.prod));

    });

};