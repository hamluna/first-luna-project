
    // script/menu_ani.js
function activateMenu(){
    if (window.innerWidth > 768) {
        let timer;
        $('.navi').hover(
            function(){
                clearTimeout(timer);
                $('.submenu').stop(true,true).slideDown(500); 
            },
            function(){
                timer = setTimeout(function(){
        $('.submenu').stop(true,true).slideUp(500);
         }, 100);
       });
    }

}