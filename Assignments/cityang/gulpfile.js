// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = 'www/public/';
gulp.src(plugins.mainBowerFiles())
	.pipe(plugins.filter('*.js'))
	.pipe(/* doing something with the JS scripts */)
	.pipe(gulp.dest(dest + 'js'));

gulp.task('js', function() {
	var jsFiles = ['src/js/*'];

	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'js'));

});
