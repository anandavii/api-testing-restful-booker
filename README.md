# API Test Automation for Restful Booker using Playwright

[![Playwright](https://img.shields.io/badge/Playwright-JS-green?logo=playwright&logoColor=white)](https://playwright.dev/)
![Node.js version](https://img.shields.io/badge/Node.js->=18-blue)
[![Build Status](https://github.com/anandavii/api-testing-restful-booker/actions/workflows/playwright.yml/badge.svg)](https://github.com/anandavii/api-testing-restful-booker/actions/workflows/playwright.yml)
![Last commit](https://img.shields.io/github/last-commit/anandavii/api-testing-restful-booker)

## Overview

This is a Playwright-based API Test Automation Framework built using JavaScript. It is designed to validate REST API endpoints from the [Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html) APIs. The framework covers authentication, data creation, updates, deletion, and schema validation. The project is ideal for learning, practicing, and showcasing clean API testing practices.

### Goals of this Framework

- Automate REST API workflows using Playwright’s `request` context
- Validate HTTP methods: GET, POST, PUT, PATCH, DELETE
- Cover both positive and negative test scenarios
- Ensure readable, reusable, and scalable test structure
- Make the project CI-ready and easy to extend
- Demonstrate best practices like token handling, external test data, and modular helpers

## What’s Implemented So Far

### Reqres API Test Coverage

- **GET Requests**
  - Get user details and assert fields

- **POST Requests**
  - Create new user
  - Successful login
  - Failed login (missing password)
  - Successful registration

- **PUT Requests**
  - Update user name and job, assert updates and timestamp

- **DELETE Requests**
  - Delete user by ID and assert status code 204

### Restful Booker API Test Coverage

- **GET Requests**
  - Get all booking IDs
  - Get booking by ID
  - Filter bookings by name

- **POST Requests**
  - Create a booking (using inline and external JSON)
  - Validate returned booking data

- **PUT Requests**
  - Update full booking record using token-based authorization

- **PATCH Requests**
  - Partially update a booking with selective fields

- **DELETE Requests**
  - Delete a booking using a dynamically created booking and token

- **Token Handling**
  - Request and reuse authorization tokens from `/auth` for protected endpoints

- **Data Reuse**
  - Use external `.json` files for payloads
  - Use utility functions to reduce duplication across tests

## Usage

1. Install dependencies  
   `npm install`

2. Run all tests  
   `npx playwright test`

3. View the HTML report  
   `npx playwright show-report`

## Project Details

- Framework: Playwright (JavaScript)
- Test Type: API Testing using `request` context
- APIs Tested: [Restful Booker](https://restful-booker.herokuapp.com)
- Language: JavaScript (CommonJS / ESModule)
- Runner: Playwright Test
- Reporting: Allure Reports

<h2> Allure Reports <img src="https://avatars.githubusercontent.com/u/5879127?s=200&v=4" alt="Allure" height="20"/></h2>

### Step 1: Use the following command to generate the Allure report:
``` bash
    allure generate target/allure-results --clean -o allure-report
```

- This command will create a detailed HTML report in the `allure-report` directory.

### Step 2: To view the report in your browser, use:

``` bash
    allure serve target/allure-results
```

- This will start a local server and open the Allure report in your default browser.

> To clear previous results:

``` bash
    rm -rf target/allure-results
```

## GitHub Actions CI
This project uses GitHub Actions for **automated test execution** and **manual workflow triggering**.

- The GitHub Actions workflow (`.github/workflows/playwright.yml`) is configured with `workflow_dispatch` to support **manual test runs**.
- Supports manual trigger of workflow from the GitHub Actions tab by clicking the “Run workflow” button.
- Automatic triggers on `push` and `pull_request` is added for automatic workflow runs.

## Next Steps

- Add `.env` support for base URLs and secrets
- Integrate GitHub Actions for CI-based test execution
- Improve error handling and add edge cases
- Add data-driven tests using loops or parameterization
- Explore Allure reporting for detailed analytics
- Add retry strategies and trace analysis for failed tests
- Refactor all CRUD logic into reusable helper modules
