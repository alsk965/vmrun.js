"use strict";

var utils = require('./utils');
var type, version, path, os, arch, vmrun, vmcount;
var env = process.env;
var checking = true;

detectSystemDarwin = function() {
	type = 'fusion';
	path = '/Applications/VMware Fusion.app';
	vmrun = '/Applications/VMware Fusion.app/Contents/Library/vmrun';
	var plist = require('plist');
	var obj = plist.parseFileSync(path+'/Contents/Info.plist');
	version = obj['CFBundleShortVersionString'];
	arch = obj['LSArchitecturePriority'];
};

collectMachinesDarwin = function(callback) {
	var properties = require ("properties");
	var user = env.USER;
	var path = '/Users/'+user+'/Library/Application Support/VMware Fusion/vmInventory';
	var options = {
	  path: true,
	  namespaces: true,
	  sections: false,
	  variables: false,
	  include: false,
	  reviver: function (key, value, section){
	  	if (this.isProperty && value) return utils.cleanString(value);
	  	return this.assert ();
	  }	  
	};
	properties.parse (path, options,
    	function (error, data){
    		var vmcount = 0;
    		var machines = [];
    		for(var i in data){
    			var vm = data[i];
    			if(vm.config && vm.config.length > 2){
    				machines.push(vm);
    				vmcount++;
    			}			
    		}
    		callback(machines);
    	}
    );
};

exports.run = function(callback){
	os = process.platform;
	switch(process.platform){
		case 'darwin':
			var detectSystem = detectSystemDarwin;
			var collectMachines = collectMachinesDarwin;
		break;
		default:
			return console.log("sorry, other platforms are not supported at the moment");
	}
	detectSystem();
	collectMachines(function(machines){
		callback(null,{
			"os":os,
			"arch":arch,
			"version":version,
			"type":type,
			"path":path,
			"vmcount":vmcount,
			"vmrun":vmrun,
			"machines":machines
		});	
	});
};
