# grunt-editor

> Open an editor as a grunt task

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-editor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-editor');
```

## The "editor" task

### Overview
In your project's Gruntfile, add a section named `editor` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'editor': {
    options: {
      // Task-specific options go here.
    },
    src: []
  },
});
```

### Options

#### options.editor
Type: `String`
Default value: `process.env.VISUAL || process.env.EDITOR`

A command to invoke an editor of your choice.

### Usage Examples

#### Default Options
In this example, the default options are used to open an editor.

```js
grunt.initConfig({
  'editor': {
    all: {
      options: {},
      src: ['files/*']
    }
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 0.1.0 - initial functionality


## License

([The MIT License](LICENSE))

Copyright 2014 Cameron Lakenen
