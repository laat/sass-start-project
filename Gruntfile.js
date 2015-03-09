module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
	    dist: {
		files: {
		    'dist/grid.css' : 'src/grid.scss'
		}
	    }
	},
	watch: {
	    css: {
		files: '**/*.scss',
		tasks: ['sass'],
                options: {
                    livereload: true
                },
	    },
	    html: {
		files: 'docs/**/*.html',
                options: {
                    livereload: true
                },
	    }
	},
        connect: {
            server: {
                options:{
                    port: 8000,
                    hostname: "0.0.0.0",
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect:server', 'watch']);
};
