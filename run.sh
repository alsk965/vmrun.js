#!/usr/bin/env node

var vmrun = require('./lib/vmrun');

vmrun.app.info(function(err, data){
	console.log("\nvmrun.info:\n");
	console.log(data);
});

vmrun.vms.all.list(function(err, data){
	console.log("\nvmrun.vms.all.list:\n");
	console.log(data);
});

vmrun.vms.all.show(function(err, data){
	console.log("\nvmrun.vms.all.show:\n");
	console.log(data);
});

vmrun.vms.running.list(function(err, data){
	console.log("\nvmrun.vms.running.list:\n");
	console.log(data);
});

vmrun.vms.running.show(function(err, data){
	console.log("\nvmrun.vms.running.show:\n");
	console.log(data);
});

vmrun.vm.info(0, function(err, data){
	console.log("\nvmrun.vm.info:\n");
	console.log(data);
});

