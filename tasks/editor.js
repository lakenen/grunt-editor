/*
 * grunt-editor
 * https://github.com/lakenen/grunt-editor
 *
 * Copyright (c) 2014 Cameron Lakenen
 * Licensed under the MIT license.
 */

'use strict';

var editor = require('editor'),
  async = require('async');

module.exports = function(grunt) {

  grunt.registerMultiTask('editor', 'Open an editor', function() {

    var options = this.options(),
      done = this.async();

    function editFile(file, callback) {
      editor(file, options, function () {
        callback();
      });
    }

    async.mapSeries(this.filesSrc, editFile, done);
  });

};
