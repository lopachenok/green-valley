var gulp = require('gulp'),    
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    wiredep = require('gulp-wiredep');

gulp.task('css', function() {
    gulp.src('app/scss/style.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 5 version', 'IE 9'], cascade: false }))
        /*.pipe(uncss({
            html: ['app/index.html']
        }))*/
        .pipe(gulp.dest('app/css'))        
});

gulp.task('bower', function () {
  gulp.src('app/index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./app/'));
});

gulp.task('html', function () {
    return gulp.src('app/**//*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
	return gulp.src('app/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**//*.scss', ['css'])
});