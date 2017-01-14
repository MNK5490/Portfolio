var resume = document.getElementsByClassName("resume")[0];
var image = document.getElementsByClassName("image-cropper")[0];
var resumeText = resume.querySelector("a");

// (1) Adding Resume Styles

// (a) On Hover

resume.addEventListener("mouseover", function(){
        console.log('resume mouse over triggered');
    	var image = document.getElementsByClassName("image-cropper")[0];
        image.style.transform = "scale(1.5) rotate(-10deg)";
        image.style.border= "6px solid #FFC107";
        image.style.transition = "border ease-in cubic-bezier(.17,.67,.83,.67), transform ease-in cubic-bezier(.17,.67,.83,.67)";
        resumeText.style.color = "#FFC107";
        resume.style.background = "white";
        resume.style.border = "3px solid #FFC107";
    });


// (b) On mouseleave

resume.addEventListener("mouseleave", function(){
        console.log('resume mouseleave triggered');
    	var image = document.getElementsByClassName("image-cropper")[0];
        image.style.transform = "scale(1) rotate(0deg)";
        image.style.border= "6px solid #B2DFDB";
        resumeText.style.color = "white";
        resume.style.border = "2px solid white";
        resume.style.background = "#00967F";
    });

    // (2) Adding Image Styles

// (a) On Mouseover

image.addEventListener("mouseover", function(){
    console.log('image mouseover triggered');
    image.style.transform = "scale(1.5) rotate(10deg)";
    image.style.border= "6px solid #FFC107";
    image.style.transition = "border ease-in cubic-bezier(.17,.67,.83,.67), transform ease-in cubic-bezier(.17,.67,.83,.67)";
    resumeText.style.color = "#FFC107";
    resume.style.background = "white";
    resume.style.border = "3px solid #FFC107";
});

// (b) On Mouseleave

image.addEventListener("mouseleave", function(){
    console.log('image mouseleave triggered');
    image.style.transform = "scale(1) rotate(0deg)";
    image.style.border= "6px solid #B2DFDB";
    resumeText.style.color = "white";
    resume.style.border = "2px solid white";
    resume.style.background = "#00967F";
});
