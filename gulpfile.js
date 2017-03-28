const gulp = require('gulp'),
  decompress = require('gulp-decompress'),
  path = require('path'),
  zip = require('gulp-zip');
 
gulp.task('zipXml', () => {
  return gulp.src('*.{tar,tar.bz2,tar.gz,zip}')
    .pipe(decompress({
      filter: file => path.extname(file.path) === '.html'
    }))
    .pipe(zip('Metadata.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('unzipAll', () => {
  return gulp.src('*.{tar,tar.bz2,tar.gz,zip}')
    .pipe(decompress())
    .pipe(gulp.dest('unzipped-files'));
});

gulp.task('default', ['zipXml', 'unzipAll']);