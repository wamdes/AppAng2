/**
 * Created by grizzly on 09/03/2017.
 */

const gulp = require('gulp');
const webserver = require('gulp-webserver');

let generateDocumentation = () => {
  return Promise((resolve, reject){
    let genDoc = exec( './node_modules/.bin/compodoc -p src/tsconfig.json'  );

    genDoc.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });
    genDoc.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
        reject('error');
    });
    genDoc.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
        resolve('true');
    });
  });
};

gulp.task('documentation-run', function(){
  return generateDocumentation.then(success => {
    let stream = gulp.src('documentation')
      .pipe(webserver({
        port:'4300',
        fallback: 'index.html',
        livereload: true,
        open: '/'
      }));
    stream.emit('kill');
  }).catch(e => { console.log(e)});

});
