# Flood_Element

Flood_Element is a comprehensive suite of automated end-to-end test scripts designed to validate the functionality of various web applications, including Salesforce Classic, Salesforce Lightning, and the-internet.herokuapp.com demo site. The tests are implemented using a step-based approach to simulate user interactions and verify expected behaviors.

---

## Repository Structure

- **Saleforce_Classic/**
  - Contains `test.ts`, a script automating a full workflow in Salesforce Classic.
  - Covers login, navigating home, managing accounts, contacts, opportunities, and logout.
  
- **Salesforce_Light/**
  - Contains `test.ts`, a script targeting Salesforce Lightning.
  - Covers login, navigating home, creating and closing accounts, and logout.
  
- **The_Internet_Herokuapp/**
  - Contains multiple `.ts` scripts, each testing a specific feature of the-internet.herokuapp.com.
  - Features tested include:
    - AB Testing
    - Add/Remove Elements
    - Basic Auth
    - Broken Images
    - Challenging DOM
    - Checkboxes
    - Digest Auth
    - Disappearing Elements
    - Dropdowns
    - Dynamic Content
    - Dynamic Controls
    - Dynamic Loading
    - Entry Ads
    - File Download & Upload
    - Floating Menu
    - Forgot Password
    - Form Authentication
    - Frames & iFrames
    - Geolocation
    - Horizontal Slider
    - Hovers
    - Infinite Scroll
    - Inputs
    - JQueryUI interactions
    - Key Presses
    - Large DOM
    - Multiple Windows
    - Notification Messages
    - Redirect Links
    - Secure File Download
    - Shifting Content
    - Slow Resources
    - Data Tables
    - Status Codes
    - Typos
    - WYSIWYG Editor

- **The_Internet_Herokuapp+New_Relic/**
  - Contains an extended test script `test.ts`.
  - Combines multiple Herokuapp feature tests, potentially integrated with New Relic monitoring.
  - Includes detailed sub-steps for Challenging DOM, Dynamic Content, and Status Codes.

---

## Test Script Structure

Each test script typically exports a default function containing a sequence of `step` calls. Each `step` represents a user action or verification, such as:

```typescript
export default () => {
  step('Test: 01 - Homepage', async browser => {
    // Actions and assertions for homepage
  });

  step('Test: 02 - Login', async browser => {
    // Actions and assertions for login
  });

  // Additional steps...
};
```

This modular approach allows for clear, maintainable, and reusable test cases.

---

## Usage

To execute these tests, use your preferred test runner compatible with the framework used (e.g., Flood Element CLI). Typical steps might include:

1. **Install dependencies** (if applicable).
2. **Run individual scripts** or **batch suites** targeting specific platforms or features.
3. **Review test results** and logs for validation.

*Note: Specific setup and execution instructions depend on your environment and are not included here.*

---

## Summary

Flood_Element provides a robust framework for automated UI testing across multiple platforms, helping ensure application quality through repeatable, automated checks.
