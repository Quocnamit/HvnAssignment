module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
 		plugins:[
             'karma-jasmine',
             'karma-phantomjs-launcher',
             'karma-chrome-launcher',
             ],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};