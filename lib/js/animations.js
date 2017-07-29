var button = document.getElementById('showfeed');
var newscontainer = document.getElementsByTagName('newsfeed');

button.addEventListener('click',function(){
    newscontainer.style.display = "none";
    console.log(newscontainer)
})
