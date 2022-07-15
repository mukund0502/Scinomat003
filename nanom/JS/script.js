// var btn = document.getElementsByClassName("contact-section1__block19 layout");
var whatwedo = document.getElementsByClassName("nanom-section1__group4 layout");
var toshow1 = document.getElementsByClassName("home-section1__block53 layout");
var products = document.getElementById("products");
var toshow2 = document.getElementsByClassName("home-section1__block51 layout");
var overview = document.getElementById("overview");
var services = document.getElementById("services");

var btn = document.getElementsByClassName("nanom-section1__group10 layout");
var connect = document.getElementsByClassName("connect");
var closekey = document.getElementsByClassName("closekey");

btn[0].addEventListener("click",()=>{
    connect[0].style.right = "0px";
    connect[0].style.display = "block";


})
closekey[0].addEventListener("click",()=>{
    connect[0].style.right = "-504px";
    connect[0].style.display = "none";
    
})

whatwedo[0].addEventListener("mouseenter", ()=>{
    toshow1[0].style.visibility = "visible";
});
toshow1[0].addEventListener("mouseenter", ()=>{
    toshow1[0].style.visibility = "visible";
});
toshow1[0].addEventListener("mouseleave", ()=>{
    toshow1[0].style.visibility = "hidden";
});
whatwedo[0].addEventListener("mouseleave", ()=>{
    toshow1[0].style.visibility = "hidden";
});

products.addEventListener("mouseenter",()=>{
    toshow2[0].style.visibility = "visible";
});

overview.addEventListener("mouseenter",()=>{
    toshow2[0].style.visibility = "hidden";
});
services.addEventListener("mouseenter",()=>{
    toshow2[0].style.visibility = "hidden";
});

products.addEventListener("mouseenter",()=>{
    toshow2[0].style.visibility = "visible";
})
toshow2[0].addEventListener("mouseenter",()=>{
    toshow1[0].style.visibility = "visible";

})
toshow2[0].addEventListener("mouseleave",()=>{
    toshow1[0].style.visibility = "hidden";
    toshow2[0].style.visibility = "hidden";

})