var vmwareapp = require('./vmwareapp');
var cmd = require('./cmd');
var vm = require('./vm');
var vmrun = exports = module.exports = {};

exports.info = function(callback){
	vmwareapp.run(function(err,vmware){
		callback(err,vmware);	
	});
};

exports.listAll = function(callback){
	vmwareapp.run(
		function(err,vmware){
			if (err) {
				return console.log(err);
	  		}			
			var out = [];
			for(var i in vmware.machines){
				out.push(vmware.machines[i].config);
			}
			callback(err,out);
		}
	);
};

exports.showAll = function(callback){
	vmwareapp.run(
		function(err,vmware){
			if (err) {
				return console.log(err);
	  		}
			var out = "Total VMs: "+vmware.vmcount+"\n";
			for(var i in vmware.machines){
				out += vmware.machines[i].config+"\n";
			}
			callback(err,out);
		}
	);
};

exports.listRunning = function(callback){
	vmwareapp.run(
		function(err,vmware){
			if (err) {
				return console.log(err);
	  		}			
			cmd.list(vmware, function(err, stdout, stderr){
				if (err) {
					return console.log(err);
	  			}
	  			var lines = stdout.split("\n");
	  			lines.shift();
	  			lines.pop();
	  			callback(err,lines);
			});	
		}
	);
};

exports.showRunning = function(callback){
	vmwareapp.run(
		function(err,vmware){
			if (err) {
				return console.log(err);
	  		}			
			cmd.list(vmware, function(err, stdout, stderr){
				if (err) {
					return console.log(err);
	  			}
	  			callback(err,stdout);
			});	
		}
	);
};

exports.vminfo = function(vmid, callback){
	vmwareapp.run(
		function(err, vmware){
			if (err) {
				return console.log(err);
		  	}
		  	vm.info(vmware, vmware.machines[vmid], callback);	
		}
	);
};



