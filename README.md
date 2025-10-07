# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

<img width="1918" height="999" alt="image" src="https://github.com/user-attachments/assets/7324f328-aed1-4c20-9db4-2a2f7c56e002" />

### Links

- **Solution URL:** https://github.com/alifaryaputraaswanggax/frontend-mentor-multistep-form/edit/main/README.md
- **Live Site URL:** https://multistepsformm.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first responsive workflow
- Vanilla JavaScript

### What I learned

This project was an excellent exercise in transitioning from static pages to a dynamic, interactive web application. I learned a great deal about how HTML, CSS, and JavaScript work in concert to create a seamless user experience.

Some of the key concepts I solidified during this project include:

-   **Advanced Layout with Flexbox:** I became much more comfortable using Flexbox for major layout structures, such as creating a two-column layout that refactors into a single column on mobile. Tricks like `justify-content: space-between` and `margin-left: auto` were particularly useful for precise alignment.

-   **Custom Form Element Styling:** I learned the standard technique for creating custom form elements. The main takeaway was to visually hide the native `<input type="checkbox">` while keeping it accessible for screen readers, and then styling other elements like a `<label>` or `<span>` to create a beautiful, custom UI for the toggle switch and add-on checkboxes.

-   **DOM Manipulation with JavaScript:** This was the most challenging yet rewarding part. I learned the fundamentals of making a page interactive with JavaScript by:
    -   Selecting DOM elements using `document.querySelector` and `querySelectorAll`.
    -   Responding to user actions by listening for events with `addEventListener`.
    -   Dynamically changing the UI by adding and removing CSS classes (`.classList.add()` and `.classList.remove()`), which formed the core of the step-by-step navigation logic.

```js
// Example of the core UI update logic
function updateActiveStep(stepIndex) {
  // First, remove the 'active' class from all steps
  steps.forEach(step => step.classList.remove('active'));
  // Then, add the 'active' class only to the current step
  steps[stepIndex].classList.add('active');
}

