'use strict';

/* Controllers */

function PhoneListCtrl($rootScope, $scope, Phone) {
  $scope.phones = Phone.query(function() {
    $scope.categories = [];
    for (var i=0; i<$scope.phones.length; i++) {
        var phone = $scope.phones[i];
        if(!phone.id) phone.id = i;
        if($scope.categories.indexOf(phone.category) == -1) $scope.categories.push(phone.category);
    }
    $rootScope.phones = $scope.phones;
  });
  $scope.category = '';
  $scope.setCategory = function(ev) {
      var category = angular.element(ev.srcElement).attr("value");
      if(category == 'All') category = '';
      $scope.category = category;
  }
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($rootScope, $scope, $routeParams, Phone) {
  $scope.phone = $rootScope.phones[$routeParams.productId];
  $scope.mainImageUrl = $scope.phone.images[0];
  /*
  $scope.phone = Phone.query(function(phones) {
    $scope.phone = phones[$routeParams.productId];
    $scope.mainImageUrl = $scope.phone.images[0];
  });
  */

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
