# API Test Automation for Restful Booker using Playwright

[![Playwright](https://img.shields.io/badge/Playwright-JS-green?logo=playwright&logoColor=white)](https://playwright.dev/)
![Node.js version](https://img.shields.io/badge/Node.js->=18-blue)
[![Build Status](https://github.com/anandavii/employeeMgmtAutoamtion/actions/workflows/playwright.yml/badge.svg)](https://github.com/anandavii/employeeMgmtAutoamtion/actions/workflows/playwright.yml)
![Last commit](https://img.shields.io/github/last-commit/anandavii/api-testing-restful-booker)

## Overview

This is a Playwright-based API Test Automation Framework built using JavaScript. It is designed to validate the [Restful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html), covering core endpoints and schema validations. The framework uses Playwright’s request context to simulate and assert real API behavior.

### Goals of this Framework

- Automate RESTful API workflows using Playwright's `request` fixture
- Validate all major HTTP methods: GET, POST
- Perform schema and type-level validations
- Ensure scalable and readable test structure
- Build a CI-ready, portfolio-quality testing project

## What’s Implemented So Far

- **GET Requests**  
  - Retrieve all booking IDs  
  - Fetch booking by booking ID  
  - Filter bookings by first name

- **POST Requests**  
  - Create a new booking  
  - Validate the created response structure and payload matching

## Usage

1. Install dependencies  
   `npm install`

2. Install Playwright browsers  
   `npx playwright install`

3. Run all tests  
   `npx playwright test`

4. View the HTML report  
   `npx playwright show-report`

## Project Details

- Framework: Playwright (JavaScript)
- Test Type: API Testing (using `request` context)
- Base API: https://restful-booker.herokuapp.com
- Language: JavaScript (CommonJS)
- Runner: Playwright Test
- Reporting: HTML Reporter (default)

## Next Steps

- Add PUT and PATCH tests for updating bookings
- Add DELETE test to validate booking deletion
- Introduce token-based authentication for protected routes
- Add reusable utility for booking creation and token generation
- Add `.env` support for configurable environments
- Improve schema validation coverage
- Integrate GitHub Actions for CI-based test execution