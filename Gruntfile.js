/*
 * grunt-editor
 * https://github.com/lakenen/grunt-editor
 *
 * Copyright (c) 2014 Cameron Lakenen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/_*']
    },

    // Configuration to be run (and then tested).
    editor: {
      test: {
        options: {
          editor: 'test/fake-editor'
        },
        src: ['test/fixtures/_test.txt']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    },

    setup: {
      test: {
        src: 'test/fixtures/test.txt',
        dest: 'test/fixtures/_test.txt'
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'setup', 'editor:test', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerMultiTask('setup', 'Setup test fixtures', function(){
    this.files.forEach(function(f){
      grunt.file.copy(f.src, f.dest);
    });
  });

};
