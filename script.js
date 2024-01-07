


gsap.from("#hellocoins h1",{
    y: -800,
    scale: 1.8,
    duration: 1,
    delay:0.9
    
    
})
gsap.to('#note p',{
    x:-1600,
    duration:4,
    delay:1.7,
    opacity:1
    
    
})
gsap.from("#text h1",{
    opacity: 0,
    x: -700,
    duration: 1.3,
    delay: 1,
    scrollTrigger:"#page2"
    
})
gsap.from("#text2 h1",{
    opacity: 0,
    x: 900,
    duration: 1,
    delay: 1.9,
    scrollTrigger:"#page2"
    
})
gsap.from("#text2 p",{
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 2.9,
    scrollTrigger:"#page2"
    
})
gsap.to("#chamber2 img",{
    opacity: 1,
    scale: 1.3,
    duration: 1,
    delay: 3,
    scrollTrigger:"#page2"
    
})

var crsr= document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x +"px"
    crsr.style.top= dets.y +"px"
    crsr.style.scale=2
    crsr.style.opacity=0.7
})


var box= document.querySelectorAll("#box")
box.forEach(function(val){
    

    val.addEventListener("mouseenter",function(){
       val.childNodes[1].style.opacity=1
       val.childNodes[1].style.transition='all linear 0.5s'
       
    })
    val.addEventListener("mouseleave",function(){
        
        val.childNodes[1].style.opacity= 0
        
    });
    

    
})


var boxxx= document.querySelectorAll("#box2")
boxxx.forEach(function(val){
    

    val.addEventListener("mouseenter",function(){
       val.childNodes[1].style.opacity=1
       val.childNodes[1].style.transition='all linear 0.5s'
       
    })
    val.addEventListener("mouseleave",function(){
        
        val.childNodes[1].style.opacity= 0
        
    });
    

    
})

<-gsap.to("#page2real, #page2,#page3",{
    backgroundColor: "black",
    

    scrollTrigger: {
        trigger:"#page2real, #page2",
        scroller: "body",
        
        start: "top 40%",
        end: "top 30%",
        scrub: 3

    
    }

})


gsap.to("#img1 img",{
    opacity: 1,
    duration: 2.5,
    delay: 0.6,
    stagger: 0.8,
    scrollTrigger:"#page3",

    

})
gsap.to("#img2 img",{
    opacity: 1,
    duration: 2.5,
    delay: 3,
    stagger: 0.8,
    scrollTrigger:"#page3"

    

})
gsap.to("#img3 img",{
    opacity: 1,
    duration: 2.5,
    delay: 5,
    stagger: 0.8,
    scrollTrigger:"#page3"

    

})


        


