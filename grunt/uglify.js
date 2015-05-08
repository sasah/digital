module.exports = {

    target: {
        options: {
            maxLineLen: 0,
            compress: {
                "hoist_funs": false,
                loops: false,
                unused: false
            }
        },
        files: {
            'src/main/resources/static/digital.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/angular-aria/angular-aria.js',
                'bower_components/angular-material/angular-material.js',
                'tmp/digital.js'
            ]
        }
    }

};
