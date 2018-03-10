'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `${chalk.red(
          'generator-daburupy'
        )} will help you get this python project started!`
      )
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
    // Create supplemental properties.
    const otherProps = {
      year: new Date().getFullYear(),
      uleq: '='.repeat(this.props.projectName.length),
      uldash: '-'.repeat(this.props.projectName.length)
    };
    // Create the files at the root of the project.
    [
      'Makefile',
      'requirements.txt',
      'README',
      'README.md',
      'setup.cfg',
      'setup.py',
      'package.json',
      '.coveragerc',
      '.readthedocs.yml',
      'environment.yml',
      '.gitignore'
    ].forEach(
      function(f) {
        this.fs.copyTpl(this.templatePath(f), this.destinationPath(f), this.props);
      }.bind(this)
    );
    // Copy the project directory templates.
    ['__init__.py'].forEach(
      function(f) {
        const src = path.join('_project', f);
        const dest = path.join(this.props.projectName, f);
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.props);
      }.bind(this)
    );
    // Copy the unit test files.
    ['test_example.py'].forEach(
      function(f) {
        const src = path.join('tests', f);
        const dest = path.join('tests', f);
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.props);
      }.bind(this)
    );
    // Copy the root doc files.
    ['Makefile', 'make.bat'].forEach(
      function(f) {
        const src = path.join('docs', f);
        const dest = path.join('docs', f);
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.props);
      }.bind(this)
    );
    // Copy the doc source files.
    ['api.rst', 'conf.py', 'index.rst', 'requirements.rst'].forEach(
      function(f) {
        const src = path.join('docs', 'source', f);
        const dest = path.join('docs', 'source', f);
        this.fs.copyTpl(
          this.templatePath(src),
          this.destinationPath(dest),
          Object.assign({}, this.props, otherProps)
        );
      }.bind(this)
    );
    // Copy the doc static image files.
    ['logo.svg'].forEach(
      function(f) {
        const src = path.join('docs', 'source', '_static', 'images', f);
        const dest = path.join('docs', 'source', '_static', 'images', f);
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), this.props);
      }.bind(this)
    );
  }

  install() {
    this.installDependencies();
  }
};
