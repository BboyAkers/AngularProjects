module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        devserver: {
            server : {},
            options : {
                type : 'http',
                port : 3000,
                async : true
            }
        },
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/app.css": "less/app.less",
                },
                cleancss: true
            },

        },
        csssplit: {
            your_target: {
                src: ['css/app.css'],
                dest: 'css/app.min.css',
                options: {
                    maxSelectors: 4095,
                    suffix: '.'
                }
            },
        },
        watch: {
            //styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less', 'csssplit'],
                options: {
                    livereload: {
                        host: 'localhost',
                        port: 35729
                    }
                } 
            //}
        }
    });
  
    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csssplit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['less']);
    
};