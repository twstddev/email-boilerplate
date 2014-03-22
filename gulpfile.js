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


gulp.task( "default", function() {
	// just move index file as we don't want to do anything with it
	gulp.src( config.base + "/index.html" )
		.pipe( gulp.dest( config.dist ) );
	
	// archive full directory and make it ready for campaign monitor
	gulp.src( config.base + "/**/*.*" )
		.pipe( plugins.zip( "release.zip" ) )
		.pipe( gulp.dest( config.dist ) );
} );
