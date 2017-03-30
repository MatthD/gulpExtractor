const gulp = require('gulp'),
  decompress = require('gulp-decompress'),
  path = require('path'),
  unzip = require('gulp-unzip'),
  zip = require('gulp-zip');
 
gulp.task('zipXml', () => {
  return gulp.src('*.{tar,tar.bz2,tar.gz,zip}')
    .pipe(unzip({
      makefolder : true, 
      filter: file => path.extname(file.path) === '.xml'
    }))
    .pipe(zip('Metadatas.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('unzipAll', () => {
  return gulp.src('*.{tar,tar.bz2,tar.gz,zip}')
    .pipe(unzip({makefolder : true, keeptempty: false}))
    .pipe(gulp.dest('unzipped-files'));
});

gulp.task('default', ['unzipAll', 'zipXml']);