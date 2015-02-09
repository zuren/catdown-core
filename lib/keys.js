var keymap = require("./keymap");

module.exports = function(opts, editor){
	// Get default keys and bind their functions
	// to Catdown instance.
	for(var key in keymap)
		keymap[key] = keymap[key].bind(this);

	// CodeMirror's "extraKeys" option replaces the old
	// keymap when it's used. This appends any new keys to the 
	// old map and uses that so you don't overwrite keys.
	this.setKeys = function(obj){
		for(var key in obj) keymap[key] = obj[key];
		editor.setOption("extraKeys", keymap);
	}

	// Set default keys on editor.
	this.setKeys(keymap);
}