var vmwareapp = require('./vmwareapp');
var cmd = require('./cmd');
var vmrun = exports = module.exports = {};

exports.info = function(callback){
	vmwareapp.run(function(err,vmware){
		callback(err,vmware);	
	});
};

exports.listAll = function(callback){
	vmwareapp.run(
		function(err,vmware){
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
	  			callback(err,stdout);
			});	
		}
	);
};



