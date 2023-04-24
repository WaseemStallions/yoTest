'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the perfect ${chalk.red('generator-grosvenor')} generator!`
      )
    );

    const prompts = [
	  {
		  true : 'text',
		  name : 'ProjectName',
		  message : 'Choose name of the project?',
		  default : 'Grosvenor'
	  }
    ];
	
	

    return this.prompt(prompts).then(props => {
      this.props = props; 
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath(`./${this.props.ProjectName}/`)
    );
  }

  install() {
    this.installDependencies();
  }
};
