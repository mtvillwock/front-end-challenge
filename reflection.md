# Reflection

## JS Refactor

- refactored the AJAX data loading using jQuery promises instead of the `setTimeout` functions. This allowed control flow to process synchronously.
- stored the template in a variable for reuse instead of making an AJAX call for each subsequent product template being rendered.
- composed `ProductView` and `ProductController` objects to handle DOM manipulation and `Product` models.
- wrapped entire application code in an immediately invoked function expression (IIFE) to keep variables inside the IIFE's closure scope.

## Styling

-

## Overlay

-