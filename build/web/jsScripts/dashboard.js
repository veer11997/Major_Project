// default


window.onresize = function() {
       this.onloadmyfunction();
};
window.onload = function() {
    this.onloadmyfunction();
};

function onloadmyfunction()
{
    var x = window.innerWidth;
    var Links = document.querySelector(".nav");
    if (x<768)
    {        
        var navbar = document.querySelector(".navbar-nav");
        navbar.append(Links);
    }
    else{
        var side = document.querySelector(".sidebar-sticky");
        side.append(Links);
    }
}



function showContent(e)
{
   
    var id = e.getAttribute("id");
    var bodyTitle = document.querySelector("h1.h1");
    bodyTitle.innerHTML = id;

    var tabLinks = document.querySelector(".sidebar .nav-link.active");
    tabLinks.classList.remove("active");

    
    var atabLinks = document.querySelector(".sidebar #"+id);
    atabLinks.classList.add("active");    
}