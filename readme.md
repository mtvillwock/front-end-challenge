# Reflection

## JS Refactor

- Refactored AJAX data loading using jQuery promises instead of the `setTimeout` functions. This allowed control flow to process synchronously.
- Stored the template in a variable for reuse instead of making an AJAX call for each subsequent product template being rendered.
- Composed `ProductView` and `ProductController` objects to handle DOM manipulation and `Product` models.
- Wrapped entire application code in an immediately invoked function expression (IIFE) to keep variables inside the IIFE's closure scope.

## Styling

- Set Bootstrap columns to responsively show 1, 2, or 3 products per row depending on size of user's viewport.
- Set font-sizes as requested.
- Used Bootstrap `cards` class to display products.
- Imported Bootstrap Glyphicons for "X" to remove products.
- Imported Google Fonts for unique typography.

## Overlay

- Used jQuery `.toggle` to add/remove `hidden` class from `overlay` div.