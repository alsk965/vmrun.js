"use strict";

var exec = require('child_process').exec;
var utils = require('./utils');

exports.list = function(vmware, callback){
	var cmd = utils.cleanPath(vmware.vmrun, vmware.os) + ' -T '+vmware.type+' list';
	exec(cmd, callback);	
};

exports.start = function(vmware, vm, options, callback){
	if(!vm || !vm.config) {
		callback("no VM selected", null);
	}
	var cmd = utils.cleanPath(vmware.vmrun, vmware.os) + ' -T '+vmware.type+' start ';
		cmd += utils.cleanPath(vm.config)+' ';
	if(options.nogui){
		cmd += 'nogui ';
	} else {
		cmd += 'gui ';		
	}
	exec(cmd, callback);
};

exports.stop = function(vmware, vm, options, callback){
	if(!vm || !vm.config) {
		callback("no VM selected", null);
	}
	var cmd = utils.cleanPath(vmware.vmrun, vmware.os) + ' -T '+vmware.type+' stop ';
		cmd += utils.cleanPath(vm.config)+' ';
	if(options.soft){
		cmd += 'soft ';
	}
	exec(cmd, callback);
};
