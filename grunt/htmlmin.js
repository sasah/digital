module.exports = {

    htmlmin: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
            'src/main/resources/static/index.html': 'static/index.html'
        }
    }

};
