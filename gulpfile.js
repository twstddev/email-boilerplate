var gulp = require( "gulp" );
var plugins = require( "gulp-load-plugins" )();

var config = {
	hostname : "localhost",
	port : 3000
};

// load tasks from the gulp directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", [ 
	"livereload"
] );

gulp.task( "default", function() {
} );
