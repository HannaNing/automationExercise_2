# Project Name: Automation Exercise

## Description

A brief description of the project.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js
- Git
- Java

## Installation

Follow these steps to pull the code from GitHub and set up the project:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository: git clone https://github.com/HannaNing/automationExercise_2/tree/main
4. Once the cloning is complete, navigate into the project directory: cd <project_directory>
5. Install the project dependencies by running the following command: npm install
6. After the installation is finished, you're ready to run Cypress!

## Running Cypress

To run Cypress and execute the tests, follow these steps:

1. Make sure you are in the project directory in your terminal or command prompt.
2. Run the Cypress test runner by executing the following command: npx cypress open

### Running Allure Report
1. Open your terminal or command prompt.
2. Navigate to the root directory of your Cypress project.
3. Install the Allure Command-Line tool globally by running the following command: npm install -g allure-commandline
4. Install the Allure Reporter package for Cypress by running the following command: npm install --save-dev @shelex/cypress-allure-plugin
5. Run your Cypress tests with the following command: npx cypress run --spec cypress/test
6. Run the following command to generate the Allure Report: allure generate
7. Run the following command to generate the Allure Report: allure open
