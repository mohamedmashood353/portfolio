/*function attachNavBar(){
        fetch('../html/nav.html')
    .then( res => res.text())
    .then( text => {
        let navMenu = document.querySelector("#navmenu");
        navMenu.innerHTML = text;
    });
}*/

function attachEventListener(){
    console.log('function called');
    let navBarEle = document.querySelector('.h-line-wrapper');
    navBarEle.addEventListener('click',showHideNavBar);
}

function showHideNavBar(){
    let navBarEle = document.querySelector('.nav-menu');
    console.log('navBarEle.classList',navBarEle.classList);
    if(navBarEle.classList.contains('show')){
        navBarEle.classList.remove('show');
    }else{
        navBarEle.classList.add('show');
    }
}

