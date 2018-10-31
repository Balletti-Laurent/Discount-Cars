angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {
  $scope.master = {};
  $scope.regex = '\\d+';
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };
  $scope.message = ' ';
  $scope.soumission = function (valid) {
    if(valid) {
      $scope.messageClass='alert-success';
      $scope.message = 'Merci ' + $scope.user.prenom + ' votre inscription est validée !';
    }
    else {
      $scope.messageClass='alert-danger';
      $scope.message = 'Désolé mais il y a des données non valides !';
    }
  };
  /*appPanier*/
  $scope.inventory = [
    { id :  1, imageUrl: 'assets/img/A3.jpg', description : "AUDI A3 sportback", price : 12000, qty : 1},
    { id :  2, imageUrl: 'assets/img/2cv.jpg', description : "Citroen 2cv", price : 1200.00, qty : 1},
    { id :  3, imageUrl: 'assets/img/cactus.jpg', description : "C4 Cactus", price : 8000.00, qty : 1 },
    { id :  4, imageUrl: 'assets/img/205.jpg', description : "Peugeot 205 GTI", price : 2500.00, qty : 1 },
    { id :  5, imageUrl: 'assets/img/pce.jpg', description : "Peugeot 309 GT", price : 2000.00, qty : 1 },
    { id :  6, imageUrl: 'assets/img/r5.jpg', description : "Renault Super 5", price : 500.00, qty : 1 },
    { id :  7, imageUrl: 'assets/img/clio.jpg', description : "Renault Clio GT", price : 4500.00, qty : 1 },
    { id :  8, imageUrl: 'assets/img/scenic.jpg', description : "Renault Scenic", price : 11500.00, qty : 1 },
    { id :  9, imageUrl: 'assets/img/bv.jpg', description : "Bugattos Vrillon V6 Bi-turbo", price : 120000.00, qty : 1 },
  ];

  $scope.cart = [];

  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };

  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };

  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };

  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

});
