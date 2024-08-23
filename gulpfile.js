const {src, dest,watch,parallel}= require("gulp");
//CSS
const sass =require('gulp-sass') (require('sass'));
const plumber=  require('gulp-plumber');
//Imágenes

const webp = require('gulp-webp');
function css(done) {
    src("src/scss/**/*.scss").pipe(plumber()).pipe(sass()).pipe(dest("build/css"))
    done();
}

function versionwebp(done){
    const opiciones={
        quality:50
    };
    src('src/img/**/*.{png,jpg}').pipe(webp(opiciones))
    .pipe(dest('build/img'))
    done();
}

function javascript(done){
    src('src/js/**/*.js').pipe(dest('build/js'));
    done();
}

function dev(done){
    watch("src/scss/**/*.scss",css);
    watch("src/js/**/*.js",javascript);
}

exports.css = css;
exports.js= javascript;
exports.versionwebp=versionwebp
exports.dev=parallel(versionwebp,javascript,dev);