const gulp = require('gulp')
const webserver = require('gulp-webserver')
const wathc =require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    wathc('src/paginas/inicio.html', ()=> gulp.series('appHTML')())
    wathc('src/**/*.scss', ()=> gulp.series('appCSS')())
    wathc('src/**/*.js', ()=> gulp.series('appJS')())
    wathc('src/asstes/imgs/**/*.*', ()=> gulp.series('appIMG')())
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}