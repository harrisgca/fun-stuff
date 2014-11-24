(function(){

  var app = angular.module("store",[]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [{
      name: 'Dodecahedron',
      price: 2.00,
      description: 'This is the bomb!',
      canPurchase: false,
      soldOut:false,
      timePurchased: 1416782886046,
      images:[{full:'ruby.jpg'},
              {thumb:'ruby_thumb.jpg'}]

    },
    {
      name: "Pentagonal Gem",
      price: 5.955,
      description: "It's a pentagon!",
      canPurchase: false,
      soldOut:false,
      timePurchased: 1416782886046,
      images:[{full:'green_gem.png'},
              {thumb:'green_gem_thumb.jpg'}]

    }
  ];

})();