// var btn = document.getElementsByClassName("contact-section1__block19 layout");
var whatwedo = document.getElementsByClassName("project-air-section1__block21 layout");
var toshow1 = document.getElementsByClassName("home-section1__block53 layout");
var products = document.getElementById("products");
var toshow2 = document.getElementsByClassName("home-section1__block51 layout");
var overview = document.getElementById("overview");
var services = document.getElementById("services");

var btn = document.getElementsByClassName("project-air-section1__block19 layout");
var connect = document.getElementsByClassName("connect");
var closekey = document.getElementsByClassName("closekey");

//dropdown
// project-air-section3__content-box2 layout

var one = document.getElementsByClassName("project-air-section3__content-box2 layout")
var oneeffect = document.getElementsByClassName("project-air-section3__box7 layout")

var two = document.getElementsByClassName("project-air-section3__content-box1 layout")
var twoeffect = document.getElementsByClassName("project-air-section3__box7 layout1")

var three = document.getElementsByClassName("project-air-section3__cover-block4 layout")
var threeeffect = document.getElementsByClassName("project-air-section3__box7 layout2")

var four = document.getElementsByClassName("project-air-section5__cover-block5 layout")
var foureffect = document.getElementsByClassName("project-air-section5__box10 layout")

console.log(four);

one[0].addEventListener("mouseenter",()=>{
    // console.log("sdkfh");
    oneeffect[0].style.height = "100%"
    oneeffect[0].style.margin = "0px"
})
one[0].addEventListener("mouseleave",()=>{
    // console.log("sdkfh");
    oneeffect[0].style.height = "16px"
    oneeffect[0].style.margin = "106px 0px 0px"
})
for (let i = 0; i < four.length; i++) {
    four[i].addEventListener("mouseenter",()=>{
        // console.log("sdkfh");
        foureffect[i].style.height = "100%"
        // foureffect[0].style.margin = "0px"
    })
    four[i].addEventListener("mouseleave",()=>{
        console.log("sdkfh");
        foureffect[i].style.height = "16px"
        // foureffect[0].style.margin = "106px 0px 0px"
    })
}
four[0].addEventListener("mouseenter",()=>{
    console.log("sdkfh");
    foureffect[0].style.height = "100%"
    // foureffect[0].style.margin = "0px"
})
four[0].addEventListener("mouseleave",()=>{
    // console.log("sdkfh");
    foureffect[0].style.height = "16px"
    // foureffect[0].style.margin = "106px 0px 0px"
})

three[0].addEventListener("mouseenter",()=>{
    // console.log("sdkfh");
    threeeffect[0].style.height = "100%"
    threeeffect[0].style.margin = "0px"
})
three[0].addEventListener("mouseleave",()=>{
    // console.log("sdkfh");
    threeeffect[0].style.height = "16px"
    threeeffect[0].style.margin = "106px 0px 0px"
})



two[0].addEventListener("mouseenter",()=>{
    // console.log("sdkfh");
    twoeffect[0].style.height = "100%"
    twoeffect[0].style.margin = "0px"
})
two[0].addEventListener("mouseleave",()=>{
    // console.log("sdkfh");
    twoeffect[0].style.height = "16px"
    twoeffect[0].style.margin = "106px 0px 0px"
})

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