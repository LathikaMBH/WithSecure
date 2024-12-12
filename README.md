# WithSecure QA - Assignment
This project is developed as an assignment of WITHSECURE interview.


# Overview

This repository contains a test harness implemented using JavaScript and leveraging the following frameworks:

* Mocha: A JavaScript test framework for running tests.
* Mochawsome(For Reporting)
* Chai: An assertion library for writing expressive tests.
* SuperTest: A library for testing HTTP servers.
The test harness verifies the functionality of the API and ensures accurate triangle type calculations.

[scope](https://drive.google.com/file/d/1m7pf0cIBIMhSqsLMWm_cGQkCPwvIdLPR/view)

## Prerequisites

Node.js and npm (Node Package Manager) installed on your system.
Installation

1. Clone the Repository:

Bash

git clone https://github.com/LathikaMBH/WithSecure.git

2. Install Dependencies:

* Navigate to the project directory and run:

Bash

npm install

## Running Tests

1. Navigate to the Project Directory:

    Bash

cd WithSecure

2. Run Tests:
    
    Bash

npm test

This command will execute the test suite and report the results.

## Test Results

Navigate to mochawesome-reports and double click and open the mochawesome.html test results file


## Test Structure

The test suite is organized into distinct sections that focus on specific API functionalities:

1. GET /version:

Validates that the endpoint returns the current version of the application.

2. POST /:

Tests the triangle type calculation for various scenarios, including:
Valid triangle types (equilateral, isosceles, scalene)
Invalid triangle types (violating triangle inequality)
Error handling for invalid input data

3. Test Data: 
For efficient management of test data, consider using test data files.

4. Test Coverage: 
These testcases are covered happy scenarios and criticle test scenarios(edge cases)

5. Continuous Integration: 
Set up a CI/CD pipeline to automate testing and deployment processes.

By following these instructions and exploring the test cases, you can effectively test and maintain the Triangle Calculator API.

