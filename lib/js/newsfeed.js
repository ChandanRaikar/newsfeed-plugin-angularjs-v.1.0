var application = angular.module('newsfeed',[]);

application.controller('newscontroller',function($scope,$http){

  $http.get('articles.json').then(function(response){
    $scope.news =response.data.articles;
  })
});

application.directive('newsfeed',function(){
  return{
      restrict: 'E',
      template:
      `<div class="element-heading">Latest news Update</div>
      <div class="news-container">
      <div ng-repeat="res in news">
        <a href="{{res.url}}">
        <div class="report">
          <span class="news-title">{{res.title}}</span>
          <span class="news-description">{{res.description}}</span>
        </div>
      </a>
      </div>
      </div>`,
      controller: 'newscontroller'
  }
})
