# Automation with Cypress Environment Setup Documentation

Overview
========

Hotala is a vacation rental site which has been automated for test using Cypress. Visit Hotala site: https://www.hotala.com. In this documentation, the process of cypress environment setup for test automation will be discussed step by step.

Why Cypress
================

Cypress is a javascript test framework. End to end test of Web apps can be done by cypress fast & in a convenient way. We will be using Cypress for automating our testing process of VRS.

System Requirements
========

****************
Operating System 
****************

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems: 

   - macOS 10.9 and above (64-bit only) 
   - Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only) 
   - Windows 7 and above (64-bit only) 
   
*******
Node.js  
*******

If you're using npm to install Cypress then the supported versions are: 

   - Node.js 12 or 14 and above 
   
Installation
============   

***********************
Install Cypress via npm 
***********************

   - You have to run npm init or have a node_modules folder or package.json file in the root of your project first to ensure if cypress is installed in the correct directory. 	
   - After that Cypress can be installed via npm by the below command lines. 
   
``cd /your/project/path``   

``npm install cypress --save-dev`` 

This will install Cypress locally as a dev dependency for your project. 

************************
Install Cypress via yarn 
************************

   - Cypress can be installed via yarn by the below command lines. 
   
``cd /your/project/path``

``yarn add cypress –dev``

Direct Download
===============

Cypress can be downloaded directly from the cypress website (www.cypress.io) If you're not using Node or npm in your project or you want to try out Cypress quickly, you can always download Cypress directly from (https://download.cypress.io/desktop) 

Opening Cypress
===============

   - If npm was used to install Cypress, it has now been installed to your  ./node_modules directory, with its binary executable accessible from  ./node_modules/.bin. 
   
Now Cypress can be opened from your project root by one of the following ways:
 
************
By using npx 
************

``npx cypress open``    command in terminal

*************
By using yarn 
*************

``yarn run cypress open``   command in terminal

************
By full path 
************

``./node_modules/.bin/cypress open``    command in terminal

**********
By npm bin 
**********

``$(npm bin)/cypress open``    command in terminal

After a moment, the Cypress Test Runner will launch.

To know & learn more details about Cypress, you can visit Cypress official documentation through this link (https://docs.cypress.io/guides/getting-started/installing-cypress)




