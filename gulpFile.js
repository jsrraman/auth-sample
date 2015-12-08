// The setup is based on http://jpsierens.com/tutorial-livereload-nodemon-gulp/

'use strict';

const gulp = require('gulp');

// Nodemon is a tool that automatically runs and restarts your app
// when there are changes in specific files then restart it anymore.
const nodemon = require('gulp-nodemon');
const notify = require('gulp-notify');

// Livereload is a tool that automatically reloads the browser when there
// are changes in specific files
const livereload = require('gulp-livereload');

// Note the difference between nodemon and livereload.
// nodemon will restart the app, not reload the browser. This means you
// dont have to go to the terminal and stop your node app with CTRL+C and

gulp.task('default', ()=> {
    // Listen for changes
    livereload.listen();

    // Configure nodemon
    nodemon({
        // Script to run the app
        script: 'app.js',
        ext: 'js'
    }).on('restart', ()=> {
        // When the app is restarted, run livereload
        gulp.src('app.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait ...'));
    })
});