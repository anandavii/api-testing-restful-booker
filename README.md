# API Test Automation for Restful Booker using Playwright

[![Playwright](https://img.shields.io/badge/Playwright-JS-green?logo=playwright&logoColor=white)](https://playwright.dev/)
![Node.js version](https://img.shields.io/badge/Node.js->=18-blue)
[![Build Status](https://github.com/anandavii/api-testing-restful-booker/actions/workflows/playwright.yml/badge.svg)](https://github.com/anandavii/api-testing-restful-booker/actions/workflows/playwright.yml)
![Last commit](https://img.shields.io/github/last-commit/anandavii/api-testing-restful-booker)

## Overview

This repository contains an API Test Automation Framework built using Playwright and JavaScript to test the Restful Booker API. It includes full coverage of key REST operations such as authentication, booking creation, updates, deletions, and schema validations. The project is structured for clarity and maintainability, with reusable helpers, external JSON payloads, and integration with GitHub Actions for CI.

### Goals of this Framework

- Automate complete API workflows using Playwright’s `request` context
- Validate HTTP methods: GET, POST, PUT, PATCH, DELETE
- Support token-based authentication and protected endpoint handling
- Ensure schema, data, and type validations using `expect().toMatchObject()`
- Keep test code DRY and modular using helper functions and JSON fixtures
- Generate rich HTML and Allure reports
- Enable GitHub Actions for continuous integration

## What’s Implemented So Far

### Restful Booker API Test Coverage

- **GET Requests**
  - Fetch all booking IDs
  - Get booking by ID
  - Filter bookings by name

- **POST Requests**
  - Create a new booking (using inline and external JSON)
  - Assert structure and values in response

- **PUT Requests**
  - Update booking fully using `PUT` with auth token
  - Validations done using external JSON payload

- **PATCH Requests**
  - Partially update a booking with selective fields
  - Assert only changed fields, leave rest untouched

- **DELETE Requests**
  - Create and then delete a booking with token
  - Assert status code and empty response
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

## Project Highlights

- Framework: Playwright (JavaScript)
- Test Type: REST API Automation
- APIs Tested: [Restful Booker](https://restful-booker.herokuapp.com)
- Language: JavaScript (CommonJS / ESModule)
- Runner: Playwright Test Runner
- Reporting: Allure Reports and Playwright HTML

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
- Improve error handling and add edge cases
- Add retry strategies and trace analysis for failed tests
- Refactor all CRUD logic into reusable helper modules
