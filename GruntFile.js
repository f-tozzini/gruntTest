module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'), //read all the packages inside the jason folder

    //write the concat task
    concat : {
      dist: {
        src: [ //take all these files
          'js/modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js' //compile all the info in here
      }
    },

    uglify : {
      build : {
        src: 'prod/production.js',
        dest: 'prod/production.min.js'
      }
    },

    watch : {
      scripts : {
        files : ['js/main.js', 'js/modules/*.js'],
        tasks : ['concat', 'uglify'],
        options : {
          spawn : false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify']);
  grunt.registerTask('watchFiles', ['watch']);
};
