var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync').create();

var src = {
	scripts: {
		app: './source/app.js',
		all: './source/**/*.js'
	},
	core: './source/core-combined.js',
	styles: []
}
var dest = {
	scripts: 'snapterest.js'
}

gulp.task('default', function() {
	buildJS();
	gulp.watch(src.scripts.all, buildJS);
	// gulp.watch(src.core, buildCoreJS);
	gulp.watch(dest.scripts).on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
	browserSync.init({
		// server: './build',
		port: 3010,
		proxy: 'http://localhost:5000',
		files: [
			'./build/snapterest.js'
		]
	});
});


gulp.task('build', buildJS);


function buildJS() {
	console.log('building . . . .')
	return browserify(src.scripts.app)
		.transform(babelify, {
			presets: ["es2015", "react"]
		})
		.bundle()
		.pipe(source('snapterest.js'))
		.pipe(gulp.dest('./build/'))
		.on('error', function(err){
			console.error('err', error)
		});
}


gulp.task('build-core', buildCoreJS)

function buildCoreJS(done, srcFile = './source/core-combined.js', destDir = './build/lib/', destFile = 'core-combined.js') {

	return browserify(src.core)
		.transform(babelify, {
			presets: ["es2015", "react"]
		})
		.bundle()
		.pipe(source(destFile))
		.pipe(gulp.dest(destDir))
		//.on('end', done);
};