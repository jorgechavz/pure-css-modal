const sass = require('node-sass');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
  		options: {
  			implementation: sass
  		},
  		dist: {
  			files: {
  				'./css/pure-modal.css': './css/pure-modal.scss'
  			}
  		}
	 },
   autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      single_file: {
          src: 'css/pure-modal.css',
          dest: 'css/pure-modal.css'
      }
    }
  });

  grunt.registerTask('default', ['sass', 'autoprefixer']);
};
