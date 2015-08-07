/**
 * Created by i068959 on 15/8/6.
 */
module.exports = function (grunt) {
	grunt.config('sloc', {
		options: {
			reportType: 'json',
			reportPath: 'dest/sloc-v<%= pkg.version %>.json'
		},
		all_files: {
			files: {
				'src': ['js/d3.js']
			}
		},
		main: {
			files: {
				'src': ['js/a.js']
			}
		}
	});
	grunt.registerTask('count', ['sloc']);
	return grunt;
};