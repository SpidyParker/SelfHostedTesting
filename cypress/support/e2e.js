//***********************************************************
//This example support/index.js is processed and
//loaded automatically before your test files.
//
//This is a great place to put global configuration and
//behavior that modifies Cypress.
//
//You can change the location of this file or turn off
//automatically serving support files with the
//'supportFile' configuration option.
//
//You can read more here:
//https://on.cypress.io/configuration
//***********************************************************

//Import commands.js using ES2015 syntax:
import './commands';

require('cypress-xpath');
//require('cypress-plugin-tab')
//Alternatively you can use CommonJS syntax:
//require('./commands')

//cypress/support/index.js
//load and register the grep feature using "require" function
//https://github.com/cypress-io/cypress-grep
const registerCypressGrep = require('cypress-grep');
registerCypressGrep();

//// if you want to use the "import" keyword
//import registerCypressGrep from 'cypress-grep'
//registerCypressGrep()