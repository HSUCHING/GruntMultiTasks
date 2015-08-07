/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	var dev_Property=["dependencies","devDependencies"];
	var npmTaskNames=[];
	for(var index in dev_Property){
		var temp=JSON.stringify(grunt.file.readJSON('package.json').dependencies).match(/grunt\-[^"^']+/g);
		npmTaskNames=npmTaskNames.concat(temp);
	}
	var i=npmTaskNames.length;

	while (i--) {
		grunt.loadNpmTasks(npmTaskNames[i]);
	}

	// 引入配置 与 任务
	require('./grunt/config.js')(grunt);

	return grunt;

};
