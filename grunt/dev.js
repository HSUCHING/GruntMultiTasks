/**
 * Created by i068959 on 15/8/6.
 */
module.exports = function (grunt) {

	require('./tasks/compress.js')(grunt);
	require('./tasks/count.js')(grunt);
	require('./tasks/merge.js')(grunt);


	//grunt.config('watch', {
	//	less: {
	//		files: ['src/less/**/**.less'],
	//		tasks: ['build-less']
	//	},
	//	jade: {
	//		files: ['src/jade/**/**.jade'],
	//		tasks: ['build-jade']
	//	},
	//	js: {
	//		files: ['src/js/**/**.js'],
	//		tasks: ['requirejs:dev']
	//	}
	//});

	grunt.registerTask('dev', ['compress', 'count']);
	grunt.registerTask('devRelease', ['compress', 'mergeJS']);


	return grunt;
};