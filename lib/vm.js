"use strict";

var utils = require('./utils');

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
    		callback(error, data);
    	}
    );	
}