module.exports = function (grunt) {

  grunt.initConfig({
//  Improve for automatic phantom start
//    phantom: {
//    },
    cucumberjs: {
      files: 'features',
      options: {
        steps: 'features/step_definitions',
        format: 'pretty'
      }
    }
  });

  grunt.loadNpmTasks('grunt-cucumber');
//  grunt.loadNpmTasks('grunt-phantom');

  grunt.registerTask('default', ['cucumberjs']);
};