# Reflection

## JS Refactor

- refactored the AJAX data loading using jQuery promises instead of the `setTimeout` functions. This allowed control flow to process synchronously.
- stored the template in a variable for reuse instead of making an AJAX call for each subsequent product template being rendered.
- composed `ProductView` and `ProductController` objects to handle DOM manipulation and `Product` models.
- wrapped entire application code in an immediately invoked function expression (IIFE) to keep variables inside the IIFE's closure scope.

## Styling

- set Bootstrap columns to show 1, 2, or 3 products per row depending on size of user's viewport.
- set font-sizes as requested.

## Overlay

- used jQuery to add/remove `hidden` class from `overlay` div.