# WithSecure REST API - Assignment
This project is developed as an assignment of WITHSECURE interview.


# Overview

This repository contains a test harness implemented using JavaScript and leveraging the following frameworks:

* Mocha: A JavaScript test framework for running tests.
* Chai: An assertion library for writing expressive tests.
* SuperTest: A library for testing HTTP servers.
The test harness verifies the functionality of the API and ensures accurate triangle type calculations.

## Prerequisites

Node.js and npm (Node Package Manager) installed on your system.
Installation

1. Clone the Repository:

Bash

git clone https://github.com/your-username/triangle-calculator-test-harness.git

2. Install Dependencies:

* Navigate to the project directory and run:

Bash

npm install

### Running Tests
1. Navigate to the Project Directory:

Bash

cd triangle-calculator-test-harness

Run Tests:

Bash

npm test
This command will execute the test suite and report the results.

## Test Structure

The test suite is organized into distinct sections that focus on specific API functionalities:

1. GET /version:
Validates that the endpoint returns the current version of the application.

2. POST /:
Tests the triangle type calculation for various scenarios, including:
Valid triangle types (equilateral, isosceles, scalene)
Invalid triangle types (violating triangle inequality)
Error handling for invalid input data
Additional Considerations

3. Test Data: 
For efficient management of test data, consider using test data files or libraries.
Asynchronous Testing: Utilize async/await or promises to handle asynchronous tasks within your tests.
Error Handling: Implement robust error handling mechanisms to catch and report exceptions.
Test Coverage: Leverage tools like Istanbul to measure test coverage and identify areas requiring improvement.
Continuous Integration: Set up a CI/CD pipeline to automate testing and deployment processes.

By following these instructions and exploring the test cases, you can effectively test and maintain the Triangle Calculator API.

