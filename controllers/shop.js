const Product = require("../models/product");
const Cart = require("../models/cart");

// Fetch and render all products
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(product => {
      res.render("shop/product-list", {
        prods: product,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch(err => console.log(err));
};

// Fetch and render a single product by ID
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({ where: { id: prodId } })
    .then(product => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product[0].title,
        path: "/products",
      });
    })
    .catch(err => console.log(err));
};

// Fetch and render all products for the home page
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(product => {
      res.render("shop/index", {
        prods: product,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch(err => console.log(err));
};

// Fetch and render the shopping cart
exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (let product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id,
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

// Handle adding a product to the cart
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(([product]) => {
      Cart.addProduct(prodId, product[0].price);
      res.redirect("/cart");
    })
    .catch(err => console.log(err));
};

// Handle deleting a product from the cart
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(([product]) => {
      Cart.deleteProduct(prodId, product[0].price);
      res.redirect("/cart");
    })
    .catch(err => console.log(err));
};

// Fetch and render orders page
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

// Fetch and render checkout page
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
