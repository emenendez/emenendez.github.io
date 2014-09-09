// Generated on 2014-08-04 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    watch: {
      jekyll: {
        files: [
          '**/*.{html,yml,md,mkd,markdown,js,css,sass,scss}',
          '!node_modules/**/*',
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.{html,css,js}',
          '!.jekyll/node_modules/**/*',
          'img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.jekyll',
            '.'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.jekyll',
            'test',
            '.'
          ]
        }
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.dev.yml',
        src: '.'
      },
      server: {
        options: {
          config: '_config.yml,_config.dev.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          'css/**/*.{css,sass,scss}'
        ]
      }
    },
    concurrent: {
      server: [
        'jekyll:server'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'jekyll:check',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
  ]);
};
