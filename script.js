TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -10,
    ease: Expo.easeInOut
});


TweenMax.from(".h1", 1, {
    opacity: 0,
    delay: 0.3,
    y: -10,
    ease: Expo.easeInOut
})

TweenMax.from(".h2", 1, {
    opacity: 0,
    delay: 0.4,
    y: -10,
    ease: Expo.easeInOut
})

TweenMax.from("#Cercle", 1, {
    opacity: 0,
    delay: 0.5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from("#arrow", 1, {
    opacity: 0,
    delay: 0.6,
    y: -10,
    ease: Expo.easeInOut
})



TweenMax.from("#dark", 1, {
    opacity: 0,
    delay: 0.5,
    x: -20,
    ease: Expo.easeInOut
})

// SCROLL MAGIC

$(document).ready(function() {
    $("#fullpage").fullpage({
        anchors: ["firstPage", "secondPage", "thirdPage"],
        menu: "#menu",
        autoScrolling:false
    });
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#info"
})

    .setTween("#dark", {
        top: "0",
        left: "0",
    })
    .addTo(controller);


var scene2 = new ScrollMagic.Scene({
    triggerElement: "#siths",
})

    .setTween("#dark", {
        top: "0",
        left: "25%",
    })
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#anakin",
})

    .setTween("#dark", {
        top: "0",
        left: "55%",
    })
    .addTo(controller);



