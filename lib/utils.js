exports.cleanPath = function(cmd, os){
	switch(os){
		case 'darwin':
			return cmd.replace(' ', '\\ ');
		break;
	}
}

exports.cleanString = function(str){
	// add check for " at start and end of string.
	return str.replace("\"","").replace("\"","");
} 
