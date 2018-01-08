/**
 * Created by grizzly on 05/03/2017.
 */

const spawn = require( 'child_process' ).spawn;
const exec = require( 'child_process' ).exec;
const params = require('../gulp_extend/param');

class initialisationProject {
  constructor(){
    this.yarnInstall = process.argv
      .filter( v => new RegExp('--yarn=install').test(v) )
      .filter( v => v != null )[0];

    this.globalInstall = process.argv
      .filter( v => new RegExp('--global=true').test(v) )
      .filter( v => v != null )[0];


    this.nodeClean = process.argv
      .filter( v => new RegExp('--clean').test(v) )
      .filter( v => v != null )[0];

    this.appTarget = process.argv
      .filter( v => new RegExp('--app=').test(v) )
      .filter( v => v != null )[0];

    this.appParams = this.appTarget?this.appTarget.split('=')[1]:null;
    this.callBackTab=[];
    this.callBackIndex=0;
    console.log('yarnInstall :: ', this.yarnInstall );
    console.log('globalInstall :: ', this.globalInstall );
    console.log('appTarget :: ', this.appTarget );
    console.log('appParams :: ', this.appParams );
    console.log('nodeClean :: ', this.nodeClean );
    console.log('params :: ', params );

    if (this.nodeClean) this.callBackTab.push('cleanNode');
    if (this.globalInstall) this.callBackTab.push('installDependenciesNpm');
    if (this.yarnInstall) {
      this.callBackTab.push('clearYarn');
      this.callBackTab.push('installDependenciesByYarn');
    } else {
      this.callBackTab.push('clearYarn');
      this.callBackTab.push('installDependenciesByNpm');
    }

    if(this.appParams === 'build'){
      this.callBackTab.push('appBuild');
    } else if(this.appParams === 'serve'){
      this.callBackTab.push('appServe');
    }
    console.log('callBackTab',this.callBackTab);
    let cmd = this.managerCallback();
    console.log(cmd);
    if(cmd) return this[cmd]();
  }
  managerCallback(){
    if (this.callBackIndex === this.callBackTab.length) return null;
    return this.callBackTab[this.callBackIndex++];
  }
  clearYarn(){
    let cleanY = exec( 'rm -rf ./yarn.lock'  );

    cleanY.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    cleanY.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    cleanY.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });

  };
  cleanNode(){
    let cleanN = exec( 'rm -rf ./node_modules'  );

    cleanN.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    cleanN.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    cleanN.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });

  };
  installDependenciesByYarn(){

    let yarn = exec( 'yarn  install');

    yarn.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    yarn.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    yarn.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });

  };
  installDependenciesByNpm(){

    let npmInstall = exec( 'npm install' );

    npmInstall.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    npmInstall.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    npmInstall.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });

  };
  installDependenciesNpm(){

    let npmYarn = exec( 'sudo npm install yarn -g' );
    let npmGulp = exec( 'sudo npm install gulp -g' );

    npmYarn.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    npmYarn.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    npmYarn.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
    });

    npmGulp.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    npmGulp.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    npmGulp.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });

  };


  appBuild(){

    let gulpD = exec( `node_modules/.bin/ng build --env=${params.environment} ${params.aot}` );

    gulpD.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    gulpD.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    gulpD.on( 'close', code => {
      console.log( `child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });
  }

  appServe(){

    let gulpS = exec( `node_modules/.bin/ng serve --env=${params.environment} ${params.aot}` );

    gulpS.stdout.on( 'data', data => {
      console.log( `stdout: ${data}` );
    });
    gulpS.stderr.on( 'data', data => {
      console.log( `stderr: ${data}` );
    });
    gulpS.on( 'close', code => {
      console.log( `node init exec:: child process exited with code ${code}` );
      let cmd = this.managerCallback();
      console.log(cmd);
      if(cmd) return this[cmd]();
    });
  }

}

module.exports = new initialisationProject();
