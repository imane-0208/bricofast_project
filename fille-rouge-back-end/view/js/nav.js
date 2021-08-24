var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageXOffset > 100){
        nav.classList.add('nav-bg' , 'shadow');
    }else{
        nav.classList.remove('nav-bg' , 'shadow');
    }
})