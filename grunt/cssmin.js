module.exports = {

    options: {
        advanced: false,
        compatibility: 'ie8',
        keepSpecialComments: 0
    },
    target: {
        files: {
            'src/main/resources/static/digital.css': [
                'bower_components/angular-material/angular-material.css',
                'tmp/digital.css'
            ]
        }
    }

};
