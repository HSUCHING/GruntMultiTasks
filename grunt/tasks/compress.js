/**
 * Created by i068959 on 15/8/6.
 */
module.exports = function (grunt) {
	grunt.config('uglify', {
		options: {
			banner: 'd3<%= banner %>'
		},
		build: {
			src: 'src/js/d3.js',
			dest: 'dest/js/d3_<%= pkg.version %>.min.js'
		}
	});
	grunt.registerTask('compress', ['uglify']);
	return grunt;
};