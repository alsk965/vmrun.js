"use strict";

var utils = require('./utils');
var cmd = require('./cmd');

exports.info = function(vmware, vm, callback){
	var properties = require ("properties");
	if(!vm || !vm.config){
		return;
	}
	var options = {
	  path: true,
	  separators: "=",
	  strict: true,
	  namespaces: true,
	  sections: false,
	  variables: false,
	  include: false,
	  reviver: function (key, value, section){
	  	if (this.isProperty && value) return utils.cleanString(value);
	  	return this.assert ();
	  }
	};
	properties.parse (vm.config, options,
		function (error, data){
  			if (error) return console.error (error);
  				callback(error, data);
		}
    );	
};

exports.start = function(vmware, vm, options, callback){
	var options = options || {};
	cmd.start(vmware, vm, options, callback);
};

exports.stop = function(vmware, vm, options, callback){
	var options = options || {};
	cmd.stop(vmware, vm, options, callback);
};
