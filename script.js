// IIFE to avoid polluting global space
(function app() {

    function ProductView() {
        var view = {};

        view.showLoadingGif = function() {
            $("#loadingGifContainer").removeClass('hidden');
        }

        view.hideLoadingGif = function() {
            $("#loadingGifContainer").addClass('hidden');
        }

        view.updateDOM = function(products) {
            var i = 0
            thishtml = '';
            for (i = 0; i < products.length; i++) {
                thishtml += products[i].htmlview;
            }
            $('#content').append(thishtml);
        }

        view.handleDelete = function() {
            $('.delete-product').on('click', function() {
                var product = $(this).closest('.card-container');
                product.animate({
                    opacity: 0.50
                }, "slow", function() {
                    product.remove();
                });
            })
        }

        view.handleMouseOver = function() {
            $('.image-container img').on('mouseenter', function() {
                $(this).siblings('.overlay').toggleClass('hidden');
            })

            $('.image-container').on('mouseleave', function() {
                $(this).children('.overlay').addClass('hidden');
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

        controller.getProducts = function() {
            return $.getJSON('data.json')
        }

        controller.getTemplate = function() {
            return $.get('product-template.html')
        }

        controller.addProduct = function(productData, index) {
            var product = new productObj(productData, index);
            controller.products.push(product);
        }

        controller.init = function() {
            productView.showLoadingGif();
            controller.getProducts()
                .then(function(response) {
                    controller.getTemplate()
                        .then(function(template) {

                            var products = response.sales;
                            var template = template;

                            products.forEach(function(productData, index) {
                                controller.addProduct(productData, index)
                            })

                            productCtrl.products.forEach(function(product) {
                                product.updatehtml(template);
                            })

                            productView.updateDOM(productCtrl.products);
                            productView.handleDelete();
                            productView.handleMouseOver();
                            productView.hideLoadingGif();
                        }, function(err) {
                            console.log("error fetching products")
                        })
                }, function(err) {
                    console.log("error fetching products")
                })
        }
        return controller;
    }
    // immediately create controller
    var productCtrl = new ProductController();

    // MODEL
    function productObj(productData, i) {
        var product = {};
        product.photo = productData.photos.medium_half;
        product.title = productData.name;
        product.description = productData.description;
        product.tagline = productData.tagline;
        product.url = productData.url;
        product.htmlview = "";
        product.index = i;
        product.custom_class = "col" + ((i % 3) + 1);

        product.updatehtml = function(template) {
            product.htmlview = template.replace('{image}', product.photo)
                .replace('{title}', product.title)
                .replace('{description}', product.description)
                .replace('{tagline}', product.tagline)
                .replace('{url}', product.url)
                .replace('{custom_class}', product.custom_class);
        }

        return product;
    }

    productCtrl.init();

}());