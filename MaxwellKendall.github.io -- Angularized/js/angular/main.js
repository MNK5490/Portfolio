var max = angular.module('max', [
    'ngRoute'
]);

max.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'mainController'
  })
  .when('/portfolio', {
    templateUrl: 'partials/portfolio.html',
    controller: 'portfolioController'
})
  .when('/experience', {
      templateUrl: 'partials/experience.html',
      controller: 'experienceController'
  })
  .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'contactController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

max.controller('mainController', ['$scope', '$log', 'scroll', function($scope, $log, scroll){
    $scope.pageVariables = {
      resume : document.getElementsByClassName("resume")[0],
      image : document.getElementsByClassName("image-cropper")[0],
      resumeText : document.getElementsByClassName("resume")[0].querySelector("a")
    };
    $scope.mouseOver = function(x){
      $log.log($scope.pageVariables);
      $scope.pageVariables.image.style.transform = x;
      $scope.pageVariables.image.style.border= "6px solid #FFC107";
      $scope.pageVariables.image.style.transition = "border ease-in cubic-bezier(.17,.67,.83,.67), transform ease-in cubic-bezier(.17,.67,.83,.67)";
      $scope.pageVariables.resumeText.style.color = "#FFC107";
      $scope.pageVariables.resume.style.background = "white";
      $scope.pageVariables.resume.style.border = "3px solid #FFC107";
    };
    $scope.mouseLeave = function(){
      $scope.pageVariables.image.style.transform = "scale(1) rotate(0deg)";
      $scope.pageVariables.image.style.border= "6px solid #B2DFDB";
      $scope.pageVariables.resumeText.style.color = "white";
      $scope.pageVariables.resume.style.border = "2px solid white";
      $scope.pageVariables.resume.style.background = "#009688";
    };
    $scope.x = document;
    $scope.$watch($scope.x, 'scroll');
  }]);

max.controller('portfolioController', ['$scope', function($scope){
    $scope.test = [
        {test: 'abc'},
        { test: 'xyz'}
    ];
}]);

max.controller('experienceController', ['$scope', function($scope){
    $scope.test = [
        {test: 'abc'},
        { test: 'xyz'}
    ];
}]);

max.controller('contactController', ['$scope', function($scope){
    $scope.test = [
        {test: 'abc'},
        { test: 'xyz'}
    ];
}]);

max.service('scroll', function() {
  var self = this;
  self.main_nav = document.getElementsByClassName('main-nav')[0];
  self.hideScroll = function(){
  	if(window.scrollY >= 58){
          console.log(window.scrollY);
          self.main_nav.style.visibility = 'hidden';
  } else if (window.scrollY === 0){
      	  console.log(window.scrollY);
  		    self.main_nav.style.visibility = 'visible';
  	}
  };
});
