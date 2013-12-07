"use strict";

var utils = require('./utils');

exports.info = function(vmware, vm, callback){
	var properties = require ("properties");
	if(!vm.config){
		return;
	}
	var options = {
	  path: true,
	  namespaces: false,
	  sections: false,
	  variables: false,
	  include: false
	};
	properties.parse (vm.config, options,
		
    	function (error, data){
    		for(var i in data){
    			data[i]= utils.cleanString(data[i]);		
    		}
    		callback(error, data);
    	}
    );	
}