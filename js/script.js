const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    //variavel que recebe o valor do scroll vertical do site
    const windowTop = window.pageYOffset + (window.innerHeight * 0.65);

    //verifica distancia entre cada elemento data-anime e o topo do site
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
        console.log('teste');
    });
}