// Array of Ids for accordions and panels
var accordionIds = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11"];
var panelIds = ["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11"];

var leverJobsContainer = document.getElementById("lever-jobs-container");
var dropDownArray;

var observer = new MutationObserver(function (mutationRecords) {
    dropDownArray = document.querySelectorAll('.lever-team ul');
    runTestScript();
});

observer.observe(leverJobsContainer, {childList: true});



function runTestScript(){
	
    console.log('test script loaded');

    var teamTitles = document.querySelectorAll(".lever-team > li"); 
    var leverTeamTitles = document.querySelectorAll(".lever-team-title"); 
    for(var i = 0 ; i < teamTitles.length; i++){
        var arrow = document.createElement('div');
        arrow.classList.add("arrow-container");
        arrow.style.top = "0px";
        teamTitles[i].appendChild(arrow);   
        leverTeamTitles[i].setAttribute("role", "button");    
        leverTeamTitles[i].setAttribute("tabindex", "0");
        leverTeamTitles[i].setAttribute("id", accordionIds[i]);
        leverTeamTitles[i].setAttribute("aria-expanded","false");
        leverTeamTitles[i].setAttribute("aria-controls", panelIds[i]);
        dropDownArray[i].setAttribute("aria-labelledby", accordionIds[i]); 
    }


    for(var i = 0; i < dropDownArray.length; i ++){
            dropDownArray[i].style.height = "0px";
            dropDownArray[i].style.maxHeight = "0px";
            dropDownArray[i].setAttribute("id", panelIds[i]);
            dropDownArray[i].style.visibility = "hidden";
     }


    // If the accordion is clicked
    document.addEventListener('click', function(evt) {
        if (evt.target.matches('.lever-team-title')) {
        	clickedAccordion(evt);
        }
    }, false);


    // If a user hits enter on the accordion
    $(".lever-team-title").keyup(function(event) {
    if (event.keyCode === 13) {
        clickedAccordion(event);
    }
    });


    // Clicked function
    function clickedAccordion(evt){
    
		// Run your code to open a modal
		var thisTitle = evt.target;

		// grab parent element
		var parent = thisTitle.parentElement;
		// grab last sibling 
		var sib = parent.lastElementChild;
		var dropDown = thisTitle.nextSibling;
        var leverJobs = dropDown.querySelectorAll("li");


        // Accessibility snippet
        var expanded = thisTitle.getAttribute("aria-expanded");
        if(expanded === "false") {
            thisTitle.setAttribute("aria-expanded", "true");
            dropDown.style.visibility = "visible";
        }else {
            thisTitle.setAttribute("aria-expanded", "false");
        }
        console.log(expanded);





        var totalHeight = 0;
        for(var i = 0; i < leverJobs.length; i ++){
            var margins = leverJobs[i].currentStyle || window.getComputedStyle(leverJobs[i]);
            var marTop = margins.marginTop;
            marTop = parseInt(marTop.substring(0, marTop.length-1));
            totalHeight = totalHeight + leverJobs[i].offsetHeight;
            totalHeight = totalHeight + (marTop*2);
        }

        if(totalHeight < 200) {
            dropDown.classList.add("animation-fast");
        }else if(totalHeight < 667) {
            dropDown.classList.add("animation-med");
        }else {
            dropDown.classList.add("animation-slow");
        }


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
                	dropDown.style.visibility = "hidden";
                }, 800);
            }
        }else {
            dropDown.style.height = "0px";
            dropDown.style.maxHeight = (totalHeight)+"px";
            dropDown.style.height = "auto";
            sib.style.transform = "rotate(180deg)";
            setTimeout(function(){
                	dropDown.style.maxHeight = "auto";
                	dropDown.style.visibility = "hidden";
            }, 800);
        }
	}
    }
	



