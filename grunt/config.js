/**
 * Created by i068959 on 15/8/6.
 */
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json') //
		, banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		, version: '<%= pkg.version %>' //
		, dist: 'dist'  //
		, build: 'build'  //
	});

	require('../grunt/dev.js')(grunt);

	grunt.registerTask('default', ['dev']);
	//grunt.registerTask('default', ['devRelease']);

	return grunt;
};

