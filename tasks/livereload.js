module.exports = function( gulp ) {
	/**
	 * @brief A simple singleton implementation of 
	 * a livereload server. 
	 */
	var Server = ( function() {
		// private scope
		var m_livereload = null;
		var m_base = "";

		/**
		 * @brief Start a very simple server for the 
		 * development. 
		 */
		var startServer = function( config ) {
			var express = require( "express" );
			var server = express();

			server.use( require( "connect-livereload" )() );
			server.use( express.static( config.server.base_dir ) );
			server.listen( config.server.port, config.server.host );
		};

		/**
		 * @brief Starts a tiny livereload server.
		 */
		var startLivereload = function( config ) {
			m_livereload = require( "tiny-lr" )();
			m_livereload.listen( config.port );
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param[in] Object config is the list of 
			 * configurations properties.
			 */
			init : function( config ) {
				m_base = config.server.base_dir;

				startServer( config );
				startLivereload( config.livereload );
			},

			/**
			 * @brief Notifies livereload about any changes.
			 */
			updateLivereload : function( event ) {
				// get the relative path to file to make livereload work nicely
				var file_name = require( "path" ).relative( m_base, event.path );

				m_livereload.changed( {
					body : {
						files : [ file_name ]
					}
				} );
			}
		}
	} )();

	gulp.task( "livereload", function() {
		Server.init( {
			server : {
				host : config.hostname,
				port : config.port,
				base_dir : config.base + "/"
			},
			livereload : {
				host : config.hostname,
				port : 35729
			}
		} );

		gulp.watch( config.base + "/**/*.*", function( event ) {
			Server.updateLivereload( event );
		} );
	} );
}
