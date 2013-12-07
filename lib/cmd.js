"use strict";

var exec = require('child_process').exec;
var utils = require('./utils');

exports.list = function(vmware, callback){
	var cmd = utils.cleanPath(vmware.vmrun, vmware.os) + ' -T '+vmware.type+' list';
	exec(cmd, callback);	
};
