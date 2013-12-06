#!/usr/bin/env node

var vmrum = require('./lib/vmrun');

vmrum.info(function(err, data){
	console.log(data);
});

vmrum.listAll(function(err, data){
	console.log(data);
});

vmrum.listRunning(function(err, data){
	console.log(data);
});
