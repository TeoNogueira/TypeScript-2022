const  { series, parallel, src, dest } = require('gulp')

const del = require('del');

const browserify = require('browserify');

const source = require('vinyl-source-stream');

const tsify = require('tsify');

function clearDist() {

    return del(['./dist'])

}

function copyHtml(cback) {


   return src('./public/**/*')
   .pipe(dest('./dist'))

}


function genJS(callBck) {


 return browserify({

    basedir: '.',
    entries: ['./src/main.ts']

 })
 .plugin(tsify)
 .bundle()
 .pipe(source('app.js'))
 .pipe(dest('./dist'))

}


exports.default = series(

clearDist,
parallel(genJS, copyHtml)

)