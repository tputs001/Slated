var app = angular.module("slated", ['ngSanitize'])

app.controller('mainController', function($scope, $http, $location, $sce){
  app.$inject = ['$http', '$location'];

  $scope.search = function(term){
    $http({
      method: "POST",
      url: "/search",
      data: {term: term}
    })
    .then (function(response){
      $scope.data = response.data;
    })
  }

  $scope.trustString = function(image){
  
    return $sce.trustAsHtml(image)
  }
})
