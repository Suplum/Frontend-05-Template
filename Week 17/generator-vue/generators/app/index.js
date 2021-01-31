var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  
  async initPackage() {
    let answer = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]);

    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "eslint": '^3.15.0'
      },
      "depandencies": {
        
      }
    };
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall(["vue"], {'save-dev': false})
    this.npmInstall(["webpack", "vue-loader", "vue-template-compiler", 'vue-style-loader',
      'css-loader', "copy-webpack-plugin"], {'save-dev': true})

    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue'),
      { }
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('src/webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      { title: answer.name }
    );
  }
  // async step1() {
  //   this.fs.copyTpl(
  //     this.templatePath('t.html'),
  //     this.destinationPath('public/index.html'),
  //     { title: 'Templating with Yeoman' }
  //   )
  // }
  // async method1() {
  //   const answers = await this.prompt([
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'Your project name',
  //       default: this.appname
  //     },
  //     {
  //       type: 'confirm',
  //       name: 'cool',
  //       message: 'Would you like to enable the cool feature?'
  //     }
  //   ]);
  //   this.log('app name', answers.name);
  //   this.log('cool feature', answers.cool);
  // }
};