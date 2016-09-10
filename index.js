'use strict';

module.exports = function(ipAddress, debug, level) {
    var laboxTv = require('./lib/LaboxTv')(ipAddress, debug, level);
    laboxTv.buttons = require('./lib/Constants');
    return laboxTv;
};
