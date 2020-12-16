console.log('test script loaded');

var teamTitles = document.querySelectorAll(".lever-team > li"); 
var leverTeamTitles = document.querySelectorAll(".lever-team-title"); 
for(var i = 0 ; i < teamTitles.length; i++){
var arrow = document.createElement('div');
arrow.classList.add("arrow-container");
arrow.style.top = "0px";
teamTitles[i].appendChild(arrow);             
}