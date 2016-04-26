module.exports = function(grunt) {

	/* Load Plugins */

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		pkg: '<json:package.json>',
		compress: {
			main: {
				options: {
					archive: 'theme-extension.zip',
					mode: 'zip'
				},
				files: [
					{
						cwd: 'theme-extension/',
						src: '**/*',
						expand: true
					}
				]
			}
		},
		less: {
			generate: {
				files: {
					'theme-extension/stable.css': 'less/build-stable.less',
					'theme-extension/canary.css': 'less/build-canary.less',
				}
			},
			build: {
				options: {
					compress: true
				},
				files: {
					'theme-extension/stable.css': 'less/build-stable.less',
					'theme-extension/canary.css': 'less/build-canary.less',
				}
			}
		},
		watch: {
			canary: {
				files: ['less/*.less','themes/*.less'],
				tasks: ['less:generate']
			},

		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      src: ['./google-css/inspectorCommon.css', './theme-extension/stable.css', './theme-extension/inspector.css'],
		      dest: './release/stable.css',
		      ext: '.css'
		    }]
		  }
		}

	});

	grunt.registerTask('default', ['less:generate']);
	grunt.registerTask('package', ['less:build', 'compress']);
	grunt.registerTask('css',['cssmin']);
};
