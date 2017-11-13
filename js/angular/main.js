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
  .when('/thanks', {
      templateUrl: 'partials/thanks.html'
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
    document.addEventListener('scroll', scroll.hideScroll);
  }]);

max.controller('portfolioController', ['$scope', function($scope){
    $scope.portfolioArray = [
      {
              title: 'Book Explorer',
              url: 'https://maxwellkendall.github.io/Book-Explorer/',
              description: 'React, Redux Project integrated with the Google Books API',
              img: 'images/Book-Explorer.jpg'
      },
      {
            title: 'Web Dashboard',
            url: 'https://maxwellkendall.github.io/Web-Dashboard/',
            description: 'Chart.js library integration with client side local-storage and form-validation',
            img: 'images/webdashboard.jpg'
        },
        {
            title: 'Artist Portfolio',
            url: 'https://ckendallart.com',
            description: 'Shopify store customized according to Artist\'s requests',
            img: 'images/ckendallart.jpg'
        },
        {
            title: '508 Compliant Front End Refactor',
            url: 'https://maxwellkendall.github.io/Accessibility/',
            description: 'Refactored 508 Compliant Front End: includes tables, forms, and static pages',
            img: 'images/accessible.jpg'
        },
        {
            title: 'Custom Made Video Player',
            url: 'https://maxwellkendall.github.io/VideoPlayer/',
            description: 'Plain JavaScript with control panel, captions, and transcript made from scratch',
            img: 'images/videoplayer.jpg'
        },
        {
            title: 'Photo Gallery and Lightbox',
            url: 'https://maxwellkendall.github.io/Photo-Gallery',
            description: 'Photo gallery lightbox made from jQuery with search functionality',
            img: 'images/Photo-Gallery.jpg'
        },
        {
            title: 'SVG Design',
            url: 'https://maxwellkendall.github.io/SVG-Project',
            description: 'Responsive SVG\'s customized with customized colors',
            img: 'images/SVGs.jpg'
        },
        {
            title: 'Online Form',
            url: 'https://maxwellkendall.github.io/Online-Form',
            description: 'Online Form with custom styles',
            img: 'images/Online-Form.jpg'
        },
    ];
    console.log($scope.portfolioArray);
}]);

max.controller('experienceController', ['$scope', function($scope){
    $scope.experienceArray = [
      {
        company: 'Charleston Digital Hub of Booz Allen Hamilton',
        position: 'UI Engineer',
        duration: 'Since April 2017',
        description: 'test',
        img: 'images/BoozLogo.png'
        },
        {
        company: 'Charleston Digital Hub of Booz Allen Hamilton',
        position: 'Production Opertaions Analyst',
        duration: 'June 2015 - March 2017',
        description: 'test',
        img: 'images/BoozLogo.png'
      },
      {
        company: 'BenefitFocus',
        position: 'Application Anaylst',
        duration: 'June 2014 - May 2015',
        description: 'test',
        img: 'images/benefitfocus-logo.jpg'
      },
    ];
    console.log('hello?', $scope.experienceArray.map(el => el.img));
}]);

max.controller('contactController', ['$scope', function($scope){
    var self = this;
    $scope.variables = {
        email : document.getElementsByClassName("email")[0],
        yourName : document.getElementsByClassName("your-name")[0],
        message : document.getElementsByClassName("textarea")[0],
        subject : document.getElementsByClassName("textarea")[0],
        required : [self.email, self.yourName, self.subject, self.message],
        form : document.getElementsByClassName("form")[0]
    }
    $scope.validate = function(){
        if($scope.variables.email.validity.typeMismatch){
            $scope.variables.email.setCustomValidity("Please provide your real email. Thank you!");
        } else {
            $scope.variables.email.setCustomValidity("");
        }
    }
    // $scope.variables.yourName.setCustomValidity('Please provide your name in the message!');
    // $scope.variables.subject.setCustomValidity('Please provide a subject in the message!');
    // $scope.variables.message.setCustomValidity('Please include a message prior to sending!');

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

max.directive('portfolioItem', function(){
    return {
        restrict: 'AECM',
        replace: true,
        templateUrl: "js/directives/portfolioItem.html",
        scope: {
            portfolioArray : "="
        }
    }
});

max.directive('experienceItem', function(){
    return {
        restrict: 'AECM',
        replace: true,
        templateUrl: "js/directives/experienceItem.html",
        scope: {
            portfolioArray : "="
        }
    }
});
