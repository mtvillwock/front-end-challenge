// IIFE to avoid polluting global space
(function app() {
    // Controller to handle products
    function ProductController() {
        var controller = {};
        controller.products = [];

        controller.updateDOM = function() {
            var i = 0
            thishtml = '';
            for (i = 0; i < controller.products.length; i++) {
                if (i % 3 == 0) {
                    thishtml += "<div class='row'>";
                    console.log("START")
                }
                thishtml += controller.products[i].htmlview;
                if ((i % 3 == 2) || i == (controller.products.length - 1)) {
                    thishtml += "</div>";
                    console.log("FINISH")
                }
            }
            console.log("html to append is:", thishtml);
            $("#content").append(thishtml)
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

                    productCtrl.updateDOM();
                }, function(err) {
                    console.log("error fetching products")
                })
        }, function(err) {
            console.log("error fetching products")
        })

}());

// function domobj() {
//     var self = this;
//     self.products = [];

//     self.getproducts = function(url) {
//         $.getJSON(url, function(response) {
//             for (i = 0; i < response.sales.length; i++) {
//                 self.products.push(new productobj(response.sales[i], i));
//             }
//             console.log(self.products[1])
//         });
//     }

//     self.updateproducthtml = function() {
//         for (i = 0; i < self.products.length; i++) {
//             self.products[i].updatehtml();
//         }
//     }

//     self.updatedom = function() {
//         var i = 0
//         thishtml = '';
//         for (i = 0; i < self.products.length; i++) {
//             if (i % 3 == 0) {
//                 thishtml += "<div class='row'>";
//                 console.log("START")
//             }
//             thishtml += self.products[i].htmlview;
//             if ((i % 3 == 2) || i == (self.products.length - 1)) {
//                 thishtml += "</div>";
//                 console.log("FINISH")
//             }
//         }
//         $("#content").append(thishtml)
//     }

// }

// function productobj(product, i) {
//     var self = this;
//     self.photo = product.photos.medium_half
//     self.title = product.name
//     self.tagline = product.tagline
//     self.url = product.url
//     self.htmlview = ""
//     self.index = i
//     self.custom_class = "col" + ((i % 3) + 1)

//     self.updatehtml = function() {
//         $.get('product-template.html', function(template) {
//             console.log("template is:", template)
//             self.htmlview = template.replace('{image}', self.photo).replace('{title}', self.title).replace('{tagline}', self.tagline).replace('{url}', self.url).replace('{custom_class}', self.custom_class);
//         });
//     }
// }


// var page = new domobj();
// page.getproducts('data.json');
// setTimeout("console.log('building html');page.updateproducthtml();", 20);
// setTimeout("page.updatedom()", 1000)