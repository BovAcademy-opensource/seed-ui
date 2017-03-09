module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['components/*/*.js'],
        dest: 'dist/main.js'
      }
    },
    sass: {
      dist: {
        options: {
          update: true
        },
        files: [{
          src: 'components/main.scss',
          dest: 'dist/main.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: ['components/*/*.js'],
          dest: 'dist/main.min.js'
        }]
      }
    },
    watch: {
      css: {
        files: ['components/*/*.scss'],
        tasks: ['sass', 'copy'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['components/*/*.js'],
        tasks: ['concat', 'copy'],
        options: {
          livereload: true
        }
      }
    },
    copy: {
      css: {
        files: [{
          src: 'dist/main.css',
          dest: 'prod/main.css'
        }]
      },
      js: {
        files: [{
          src: 'dist/main.js',
          dest: 'prod/main.js',
        }]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('build', ['uglify', 'sass']); // 'grunt build' to run this
  grunt.registerTask('default', ['concat', 'sass', 'copy', 'watch']); // 'grunt' to run this

}
