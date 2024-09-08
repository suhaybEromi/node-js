const Product = require("../models/product");

<<<<<<< HEAD
=======
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

>>>>>>> e4b7ca16957bdcd12a52ba8b07f37c2933b99edd
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

<<<<<<< HEAD
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/products-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
=======
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
>>>>>>> e4b7ca16957bdcd12a52ba8b07f37c2933b99edd
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
<<<<<<< HEAD
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
=======
  res.render("/shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
>>>>>>> e4b7ca16957bdcd12a52ba8b07f37c2933b99edd
  });
};
