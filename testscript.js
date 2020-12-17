
var leverJobsContainer = document.getElementById("lever-jobs-container");

var observer = new MutationObserver(function (mutationRecords) {
    console.log("change detected");
});

observer.observe(leverJobsContainer, {childList: true});


/*

setTimeout(function(){
	
console.log('test script loaded');

var teamTitles = document.querySelectorAll(".lever-team > li"); 
var leverTeamTitles = document.querySelectorAll(".lever-team-title"); 
for(var i = 0 ; i < teamTitles.length; i++){
var arrow = document.createElement('div');
arrow.classList.add("arrow-container");
arrow.style.top = "0px";
teamTitles[i].appendChild(arrow);             
}

var dropDownArray = document.querySelectorAll('.lever-team ul');
for(var i = 0; i < dropDownArray.length; i ++){
            dropDownArray[i].style.height = "0px";
            dropDownArray[i].style.maxHeight = "0px";
        }

document.addEventListener('click', function(evt) {
	if (evt.target.matches('.lever-team-title')) {
		// Run your code to open a modal
		var thisTitle = evt.target;
		// grab parent element
		var parent = thisTitle.parentElement;
		// grab last sibling 
		var sib = parent.lastElementChild;
		var dropDown = thisTitle.nextSibling;
        var leverJobs = dropDown.querySelectorAll("li");

        var totalHeight = 0;
        for(var i = 0; i < leverJobs.length; i ++){
            var margins = leverJobs[i].currentStyle || window.getComputedStyle(leverJobs[i]);
            var marTop = margins.marginTop;
            marTop = parseInt(marTop.substring(0, marTop.length-1));
            totalHeight = totalHeight + leverJobs[i].offsetHeight;
            totalHeight = totalHeight + (marTop*2);
            console.log(marTop);
        }

        if(totalHeight < 333) {
            dropDown.classList.add("animation-fast");
        }else if(totalHeight < 667) {
            dropDown.classList.add("animation-med");
        }else {
            dropDown.classList.add("animation-slow");
        }

        console.log(totalHeight);

        if(dropDown.style.height){
            if(dropDown.style.height === "0px"){	   
                dropDown.style.maxHeight = (totalHeight)+"px";
                dropDown.style.height = "auto";
                sib.style.transform = "rotate(180deg)";
                setTimeout(function(){
                	dropDown.style.maxHeight = "auto";
                }, 800);
            }else {
                sib.style.transform = "rotate(0deg)";
                dropDown.style.maxHeight = "0px";
                setTimeout(function(){
                	dropDown.style.height = "0px";
                }, 800);
            }
        }else {
            dropDown.style.height = "0px";
            dropDown.style.maxHeight = (totalHeight)+"px";
            dropDown.style.height = "auto";
            sib.style.transform = "rotate(180deg)";
            setTimeout(function(){
                	dropDown.style.maxHeight = "auto";
            }, 800);
        }
	}
}, false);
	
},200);

*/

