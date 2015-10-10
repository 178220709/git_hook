#!/usr/bin/env node
'use strict';
/*global , require, process, module*/

var program = require('commander');

var _ = require('lodash');
var cmd = require('./cmdList');
var cmdKeys = _.mapKeys(cmd, function (value, key) {
    return key;
});


program
    .version('0.0.1')
    .usage('[options] <keywords>')
    .parse(process.argv);


//��Ӷ�����ĵ�����
program.on('help', function () {
    _.each(cmdKeys, function (key) {
        console.log(key)
    });
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