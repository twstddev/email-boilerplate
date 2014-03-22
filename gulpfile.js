var gulp = require( "gulp" );
GLOBAL.plugins = require( "gulp-load-plugins" )();

GLOBAL.config = {
	hostname : "localhost",
	port : 3000,
	base : "email",
	dist : "dist"
};

// load tasks from the gulp directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", [ 
	"livereload",
	"open"
] );


gulp.task( "default", [ 
	"release"
] );
