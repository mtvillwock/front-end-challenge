# Reflection

## JS Refactor

- Refactored AJAX data loading using jQuery promises instead of the `setTimeout` functions. This allowed control flow to process synchronously, e.g., the rest of the script would continue to run once the AJAX call finished retrieving the JSON data.
- Composed `ProductView` and `ProductController` objects to handle DOM manipulation and `Product` models.
- Wrapped entire application code in an immediately invoked function expression (IIFE) to keep variables inside the IIFE's closure scope.

## Styling

- Used Bootstrap columns to responsively show different number of products per row depending on user's viewport and to have products "slide" into place when the product preceding it is deleted.
- Set font-sizes as requested.
- Used Bootstrap `cards` class to display products.
- Imported Bootstrap Glyphicons for "X" to remove products.
- Imported Google Fonts for unique typography.

## Overlay

- Used jQuery `.toggle` to add/remove `hidden` class from `overlay` div.

## Bonus
- Used jQuery `.animate` to fade out deleted product before removing it from the DOM.
- Stored the product template in a variable. This improved performance by allowing reuse without making an AJAX call for each subsequent product template being rendered.
- Included jQuery, Bootstrap and Bootstrap JS libraries locally to avoid using CDNs. *Note: In production I would use the minified verision of these files, but in development I prefer the non-minified version because they are easier to navigate when debugging*
