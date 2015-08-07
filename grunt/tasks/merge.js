/**
 * Created by i068959 on 15/8/6.
 */
module.exports = function (grunt) {
	grunt.config('concat', {
		options: {
			banner: '<%= banner %>',
			separator: ';',
			stripBanners: true
		},
		dist: {
			src: [
				"src/js/a.js",
				"src/js/b.js",
				"src/js/c.js"
			],
			dest: "dest/js/merge.js"
		}
	});
	grunt.registerTask('mergeJS', ['concat']);
	return grunt;
};
