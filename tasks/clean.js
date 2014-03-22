module.exports = function( gulp ) {
	gulp.task( "clean", function() {
		gulp.src( config.dist, {
			read : false
		} )
			.pipe( plugins.clean() );
	} );
}
