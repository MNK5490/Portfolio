var main_nav = document.getElementsByClassName('main-nav')[0];

document.addEventListener('scroll', function(){
	if(window.scrollY >= 58){
        console.log(window.scrollY);	
        main_nav.style.visibility = 'hidden';
} else if (window.scrollY === 0){
    	console.log(window.scrollY);	
		main_nav.style.visibility = 'visible';
	}
})