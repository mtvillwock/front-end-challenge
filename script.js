// IIFE to avoid polluting global space
(function app() {

    function ProductView() {
        var view = {};

        view.updateDOM = function(products) {
            var i = 0
            thishtml = '';
            for (i = 0; i < products.length; i++) {
                if (i % 3 == 0) {
                    thishtml += "<div class='row'>";
                    console.log("START")
                }
                thishtml += products[i].htmlview;
                if ((i % 3 == 2) || i == (products.length - 1)) {
                    thishtml += "</div>";
                    console.log("FINISH")
                }
            }
            console.log("html to append is:", thishtml);
            $("#content").append(thishtml)
        }

        view.handleDelete = function() {
            $('.delete-product').on('click', function() {
                $(this).parent().remove();
            })
        }

        return view;
    }

    // immediately create view
    var productView = new ProductView();

    // Controller to handle products
    function ProductController() {
        var controller = {};
        controller.products = [];
        return controller;
    }
    // immediately create controller
    var productCtrl = new ProductController();

    // MODEL
    function productObj(productData, i) {
        var product = {};
        product.photo = productData.photos.medium_half;
        product.title = productData.name;
        product.tagline = productData.tagline;
        product.url = productData.url;
        product.htmlview = "";
        product.index = i;
        product.custom_class = "col" + ((i % 3) + 1);

        product.updatehtml = function(template) {
            product.htmlview = template.replace('{image}', product.photo)
                .replace('{title}', product.title)
                .replace('{tagline}', product.tagline)
                .replace('{url}', product.url)
                .replace('{custom_class}', product.custom_class);
        }

        return product;
    }

    $.getJSON('data.json')
        .then(function(response) {
            $.get('product-template.html')
                .then(function(template) {

                    var products = response.sales;
                    var template = template;

                    products.forEach(function(productData, index) {
                        var product = new productObj(response.sales[index], index);
                        productCtrl.products.push(product);
                    })

                    productCtrl.products.forEach(function(product) {
                        product.updatehtml(template);
                    })

                    productView.updateDOM(productCtrl.products);
                    productView.handleDelete();
                }, function(err) {
                    console.log("error fetching products")
                })
        }, function(err) {
            console.log("error fetching products")
        })

}());