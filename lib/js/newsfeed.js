var application = angular.module('newsfeed',[]);

application.controller('newscontroller',function($scope,$http){
  $http.get('https://newsapi.org/v1/articles?source=cnn&apiKey=cd321ab074014e0c8f0aebc6fe91d255').then(function(response){
    $scope.news = response.data.articles;
  })
    setInterval(function(){
    $http.get('https://newsapi.org/v1/articles?source=cnn&apiKey=cd321ab074014e0c8f0aebc6fe91d255').then(function(response){
      $scope.news = response.data.articles;
    })
  },5000);
});

application.directive('newsfeed',function(){
  return{
      restrict: 'E',
      template:
      `<div class="element-heading">Latest news Update</div>
      <div class="news-container">
      <div ng-repeat="res in news">
        <a href="{{res.url}}" target="_blank">
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
