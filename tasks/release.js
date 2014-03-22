module.exports = function( gulp ) {
	gulp.task( "release", function() {
		// just move index file as we don't want to do anything with it
		gulp.src( config.base + "/index.html" )
			.pipe( gulp.dest( config.dist ) );
		
		// archive full directory and make it ready for campaign monitor
		gulp.src( config.base + "/**/*.*" )
			.pipe( plugins.zip( "release.zip" ) )
			.pipe( gulp.dest( config.dist ) );
	} );
}
