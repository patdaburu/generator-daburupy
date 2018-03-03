'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the awesome ${chalk.red('generator-daburupy')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: this.appname // Default to the project's folder name if the input is skipped.
      },
      {
        type: 'input',
        name: 'projectVersion',
        message: 'What is starting version of the project?',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Briefly describe the project.'
      },
      {
        type: 'list',
        name: 'pythonVersion',
        message: "What is the Python version you're targeting?",
        choices: ['2.7', '3.5', '3.6'],
        default: '3.6'
      },
      {
        type: 'input',
        name: 'authorName',
        message: "What is the author's name?"
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: "What is the author's email address?"
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'What is the name of your github user?',
        default: null
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    ['Makefile', 'README', 'README.md', 'setup.cfg', 'setup.py'].forEach(
      function(f) {
        this.fs.copyTpl(this.templatePath(f), this.destinationPath(f), this.props);
      }.bind(this)
    );
    // Create the project directory.
    //this.fs.makeDir(this.props.projectName);
    // Copy the project directory templates.
    ['__init__.py'].forEach(
      function(f) {
        var src = path.join('_project', f);
        var dest = path.join(this.props.projectName, f)
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.props);
      }.bind(this)
    );
  }

  install() {
    this.installDependencies();
  }
};
