var app = angular.module("slated", ['ngSanitize'])

app.controller('mainController', function($scope, $http, $sce){
  app.$inject = ['$http', '$sce'];

  var term = "";

  $scope.keypress = function($event){
    if($event.keyCode === 8){
      term = term.slice(0, -1);
    } else {
      var input = String.fromCharCode($event.keyCode).toLowerCase()
      term+= input;
    }
    console.log(term)

    $http({
      method: "POST",
      url: "/search",
      data: {term: term}
    })
    .then(function(response){
      $scope.data = response.data;
    })
  }

  $scope.trustString = function(image){
    return $sce.trustAsHtml(image)
  }
})
