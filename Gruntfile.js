module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      app: {
        files: {
          'assets/js/fix-ie.js': ['bower_components/html5shiv/dist/html5shiv-printshiv.js',
                                  'bower_components/respond/respond.src.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['uglify']);
};
