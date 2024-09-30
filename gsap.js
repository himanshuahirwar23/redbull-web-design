gsap.to("#page-1 #img", {
    scale: "0",
    rotate: "360",
    // x: "300",
    opacity: "0",
    scrollTrigger: {
        trigger: "#page-1 ",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: true,
        pin: true,

    }

})
var tl = gsap.timeline({})
gsap.from("#para h3 ", {
    duration: "10",
    delay: "3",
    onstart: function() {
        $('#para  h3').textillate({ in: { effect: 'wobble' } });

    }
})
var tl = gsap.timeline({})
tl.to("#elem h1  ", {
    duration: "10",
    delay: "4",
    onstart: function() {
        $('#elem h1 ').textillate({ in: { effect: 'bounce' },

        });


    },

})
gsap.from(" #page-2 ", {
    opacity: "0",
    backgroundColor: "#EF7B18",
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
    }

})


gsap.from(" #page-3 ", {
    opacity: "0",
    duration: "5",
    backgroundColor: "#385093",
    scrollTrigger: {
        trigger: "#page-3",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // pin: true,

    }
})


gsap.to(" #page-2 img ", {
    // opacity: "0",
    x: "-200",
    duration: "1",
    left: "15%",
    scrollTrigger: {
        trigger: "#page-2 img",
        scroller: "#main",
        // markers: true,
        start: "top 40%",
        end: "top 50%",
        scrub: 2,
        // pin: true,


    }
})
gsap.from(" #elem", {
    opacity: "0",
    y: "200",
    duration: "2",
    // right: "10%",
    scrollTrigger: {
        trigger: "#elem",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 5,
        // pin: true,


    }
})
gsap.from(" #elem-3", {
    opacity: "0",
    // x: "-100",
    duration: "1",
    // left: "-30%",
    scrollTrigger: {
        trigger: "#elem-3",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 5,
        // pin: true,


    }
})
gsap.to(" #page-3 img", {
    // opacity: "0",
    x: "-200",
    duration: "1",
    right: "15%",
    scrollTrigger: {
        trigger: "#page-3 img",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 6,
        // pin: true,


    }
})
gsap.to(" #page-4 img", {
    // opacity: "0",
    x: "-200",
    duration: "1",
    left: "20%",
    scrollTrigger: {
        trigger: "#page-4 img",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 6,
        // pin: true,


    }
})
gsap.from(" #elem-4", {
    opacity: "0",
    // x: "-100",
    duration: "1",
    // left: "-30%",
    scrollTrigger: {
        trigger: "#elem-4",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
        // pin: true,


    }
})
var page5TL = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-",
        scroller: "#main",
        // markers: true,
        scrub: 10,
        pin: true
    }
})
page5TL.to("#para", {
        scale: 30,
        // filter: "blur(20px)",
        opacity: 0,
    })
    // page5TL.to("#page5 #para", {
    //     opacity: 1,
    // })