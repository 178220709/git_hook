#!/usr/bin/env node
'use strict';
/*global , require, process, module*/

var program = require('commander');

var _ = require('lodash');
var cmd = require('./cmdList');
var cmdKeys = Object.keys(cmd);
let setOption   = require("./option").setOption;




    setOption(program)
    .version('0.0.1')
    .usage('[options] <keywords>')
    .parse(process.argv);


//添加额外的文档描述
program.on('--help', function () {
    console.log("my defined keyword :" +  cmdKeys.join("  ")   );
});

var keywords = program.args;
if (!program.args.length) {
    program.help();
} else {
    var key = keywords[0];
    if (_.has(cmd, key) && _.isFunction(cmd[key])) {
        cmd[key]();
    } else {
        console.log('unknown keyword , suggestion: '+ cmdKeys.join("  ") )
    }


}