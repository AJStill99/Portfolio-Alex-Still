# Test Strategy – Sauce Demo

## 1. Overview
Sauce Demo is a demo e-commerce web application designed for automation practice.  
This project uses Sauce Demo to showcase automated end-to-end UI testing using Playwright.

The automated tests focus on authentication, product and cart management, checkout validation, and general error handling.  
This test strategy defines the scope, approach, and limitations of testing for this application.

---

## 2. Objectives
The primary objectives of this testing effort are to:

- Create a small but meaningful suite of automated tests (approximately 5–10)
- Cover core user journeys that would realistically be automated in a real-world project
- Demonstrate a risk-based approach to UI test automation

---

## 3. Assumptions and Constraints
- Tests use static data and predefined users provided by the application
- No real payment processing is performed
- No backend or API access is available
- Testing is limited to front-end behaviour only

---

## 4. Key Risk Areas
The following areas are considered high risk due to their impact on user experience:

- Users are unable to authenticate
- Products cannot be added to or removed from the cart
- Cart contents become inconsistent or incorrect
- Checkout allows submission with missing or invalid information
- Error handling is unclear or misleading to the user

---

## 5. Test Scope

### 5.1 In Scope
- Login and logout flows
- Product listing and sorting
- Cart behaviour (add, remove, empty vs populated states)
- Checkout validation
- Successful order completion
- User-facing error handling

### 5.2 Out of Scope
- Visual layout and styling validation
- Performance or load testing
- Security testing
- Mobile or responsive testing
- API testing

These areas are excluded due to limited return on investment for a demo application.

---

## 6. Test Data
Static test data is used for the following areas:
- Checkout scenarios
- Error handling
- Product data
- Valid and invalid users
- Site navigation paths

---

## 7. Test Focus
The test suite focuses primarily on end-to-end UI testing using Playwright.  
Integration and API testing are not applicable due to application constraints.

A small amount of manual exploratory testing is also performed to supplement automated coverage.

---

## 8. Test Data Strategy
- Static test data is injected into tests
- No dynamic test data creation is performed
- Each test runs in isolation using a fresh browser context
- Cross-browser execution is configured via the Playwright configuration file

---

## 9. Test Environment
- Tests are executed locally and via CI
- Headless execution is used by default
- Screenshots are captured on test failure

---

## 10. Limitations
- Backend behaviour cannot be validated
- Checkout success does not represent real payment processing
- Results should not be interpreted as production-level assurance

---

## 11. Success Criteria
Testing is considered successful when:

- Critical user journeys execute reliably
- Validation errors are handled clearly and correctly
- Tests run consistently in both local and CI environments
- Failures provide sufficient information to diagnose issues
