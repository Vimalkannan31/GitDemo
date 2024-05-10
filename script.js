
function changenav(){
    var navbar = document.querySelector('nav');
    var scrolValue = window.scrollY;
    
    if(scrolValue < 600){
        navbar.classList.remove('bgColor');
    } else{
       navbar.classList.add('bgColor'); 
    }
}

window.addEventListener('scroll',changenav);

