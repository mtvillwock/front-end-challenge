# Reflection

## JS Refactor

- Refactored AJAX data loading using jQuery promises instead of the `setTimeout` functions. This allowed control flow to process synchronously, e.g., the rest of the script would continue to run once the AJAX call finished retrieving the JSON data.
- Composed `ProductView` and `ProductController` objects to handle DOM manipulation and `Product` models.
- Wrapped entire application code in an immediately invoked function expression (IIFE) to keep variables inside the IIFE's closure scope.

## Styling

- Set Bootstrap columns to responsively show 1, 2, or 3 products per row depending on size of user's viewport and to have products "slide" into place when the product preceding it is deleted.
- Set font-sizes as requested.
- Used Bootstrap `cards` class to display products.
- Imported Bootstrap Glyphicons for "X" to remove products.
- Imported Google Fonts for unique typography.

## Overlay

- Used jQuery `.toggle` to add/remove `hidden` class from `overlay` div.

## Bonus
- Used jQuery `.animate` to fade out deleted product before removing it from the DOM.
- Stored the product template in a variable. This improved performance by allowing reuse without making an AJAX call for each subsequent product template being rendered.
