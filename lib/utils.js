exports.cleanPath = function(cmd, os){
	switch(os){
		case 'darwin':
			return cmd.replace(' ', '\\ ');
		break;
	}
}

exports.cleanString = function(str){
	if(str) {
		return str.replace("\"","").replace("\"","");	
	}
	return str;
}