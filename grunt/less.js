module.exports = {

    prod: {
        options: {
            strictMath: true,
            strictUnits: true,
            plugins: [
                new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
            ]
        },
        files: {
            "tmp/digital.css": "static/digital.less"
        }
    }


};
