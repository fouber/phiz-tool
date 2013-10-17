var fis = module.exports = require('fis');

fis.cli.name = "phiz";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.config.merge({
    roadmap : {
        //specifications
        path : [
            {
                reg : /^\/(widget|layout|block)\/.*\.js$/i,
                isMod : true,
                release : '/static/${namespace}/$&'
            },
            {
                reg : /^\/(.*\.class\.php)$/i,
                url : '${namespace}/$1',
                release : '/template/${namespace}/$1',
                isClass : true,
                useMap : true
            },
            {
                reg : /^\/(.*\.php)$/i,
                url : '${namespace}/$1',
                release : '/template/${namespace}/$1',
                isMod : true,
                useMap : true
            },
            {
                reg : '${namespace}-map.json',
                release : '/map/$&'
            },
            {
                reg : /^\/(static\/)?(.*)$/,
                release : '/static/${namespace}/$2'
            }
        ]
    },
    modules : {
        postprocessor : {
            php : 'phiz-wrapper'
        }
    },
    settings : {
        optimizer : {
            'png-compressor' : {
                type : 'pngquant'
            }
        },
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        }
    }
});