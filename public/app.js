var app = angular.module("slated", ['ngSanitize'])

app.controller('mainController', function($scope, $http, $sce){
  app.$inject = ['$http', '$sce'];

  var term = "";

  $scope.keypress = function($event){
    var keyCode = $event.keyCode
    if(keyCode === 8){
      term = term.slice(0, -1);
    } else if(keyCode >= 65 && keyCode <= 90 || keyCode === 32){
      var input = String.fromCharCode(keyCode).toLowerCase()
      term+= input;
    }
    $http({
      method: "POST",
      url: "/search",
      data: {term: term}
    })
    .then(function(response){
      console.log(response)
      if(response.config.data.term === term){
        $scope.data = response.data;
      }
    })
  }

  $scope.trustString = function(image){
    return $sce.trustAsHtml(image)
  }
})
