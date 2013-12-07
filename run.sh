#!/usr/bin/env node

var vmrun = require('./lib/vmrun');

vmrun.info(function(err, data){
	console.log("\nvmrun.info:\n");
	console.log(data);
});

vmrun.listAll(function(err, data){
	console.log("\nvmrun.listAll:\n");
	console.log(data);
});

vmrun.showAll(function(err, data){
	console.log("\nvmrun.showAll:\n");
	console.log(data);
});

vmrun.listRunning(function(err, data){
	console.log("\nvmrun.listRunning:\n");
	console.log(data);
});

vmrun.showRunning(function(err, data){
	console.log("\nvmrun.showRunning:\n");
	console.log(data);
});

vmrun.vminfo(0, function(err, data){
	console.log("\nvmrun.vminfo:\n");
	console.log(data);
});

