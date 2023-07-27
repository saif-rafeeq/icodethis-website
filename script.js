var text1 = document.querySelector("#page3 #text1")
var btn = document.querySelector("#page3 #text1 button")
var h1 = document.querySelector("#page3 #text1 button h1")
var span1 = document.querySelector("#page3 #text1 button span")
var p = document.querySelector("#page3 #text1 p")
var flag = 0

btn.addEventListener("click",function(){
    if(flag === 0){
    p.style.display = "block"
    text1.style.height = "135px"
    span1.innerHTML = "-"
    span1.style.fontSize = "70px"
    span1.style.fontWeight = "100"
    flag = 1
    }
    else{
    p.style.display = "none"
    text1.style.height = "90px"
    span1.innerHTML = "+"
    span1.style.fontSize = "50px"
    span1.style.fontWeight = "400"
    flag = 0
    }
})

var text2 = document.querySelector("#page3 #text2")
var btn2 = document.querySelector("#page3 #text2 button")
var h12 = document.querySelector("#page3 #text2 button h1")
var span2 = document.querySelector("#page3 #text2 button span")
var p2 = document.querySelector("#page3 #text2 p")
var flage = 0
btn2.addEventListener("click",function(){
    if(flage === 0){
    p2.style.display = "initial"
    text2.style.height = "135px"
    span2.innerHTML = "-"
    span2.style.fontSize = "70px"
    span2.style.fontWeight = "100"
    flage = 1
    }
    else{
        p2.style.display = "none"
    text2.style.height = "90px"
    span2.innerHTML = "+"
    span2.style.fontSize = "50px"
    span2.style.fontWeight = "400"
    flage = 0
    }
})




var text3 = document.querySelector("#page3 #text3")
var btn3 = document.querySelector("#page3 #text3 button")
var h13 = document.querySelector("#page3 #text3 button h1")
var span3 = document.querySelector("#page3 #text3 button span")
var p3 = document.querySelector("#page3 #text3 p")
var flagee = 0
btn3.addEventListener("click",function(){
    if(flagee === 0){
    p3.style.display = "initial"
    text3.style.height = "135px"
    span3.innerHTML = "-"
    span3.style.fontSize = "70px"
    span3.style.fontWeight = "100"
    flagee = 1
    }
    else{
        p3.style.display = "none"
    text3.style.height = "90px"
    span3.innerHTML = "+"
    span3.style.fontSize = "50px"
    span3.style.fontWeight = "400"
    flagee = 0
    }
})

var text4 = document.querySelector("#page3 #text4")
var btn4 = document.querySelector("#page3 #text4 button")
var h14 = document.querySelector("#page3 #text4 button h1")
var span4 = document.querySelector("#page3 #text4 button span")
var p4 = document.querySelector("#page3 #text4 p")
var flageee = 0
btn4.addEventListener("click",function(){
    if(flageee === 0){
    p4.style.display = "initial"
    text4.style.height = "135px"
    span4.innerHTML = "-"
    span4.style.fontSize = "70px"
    span4.style.fontWeight = "100"
    flageee = 1
    }
    else{
        p4.style.display = "none"
    text4.style.height = "90px"
    span4.innerHTML = "+"
    span4.style.fontSize = "50px"
    span4.style.fontWeight = "400"
    flageee = 0
    }
})

var lfbtn = document.querySelector("#bottom-btn #left-btn")
var rtbtn = document.querySelector("#bottom-btn #right-btn")
var raper = document.querySelector("#page4 #page4-raper")
wall = 0
saif = 0

rtbtn.addEventListener("click",function(){
    if(wall === 0){
    raper.style.transform = "translateX(-8.7%)"
    raper.style.transition = "all ease 1s"
    wall = 1
    }
    else if(wall === 1){
        raper.style.transform = "translateX(-23.3%)"
        wall = 2
    }
    
    else if(wall === 2){
        raper.style.transform = "translateX(-37.8%)"
        wall = 3
    }
    
    else if(wall === 3){
        raper.style.transform = "translateX(-52.4%)"
        wall = 4
    }
    
    else if(wall === 4){
        raper.style.transform = "translateX(-66.6%)"
        wall = 5
    }
    
    else if(wall === 5){
        raper.style.transform = "translateX(-80.6%)"
        wall = 6
    }
    else{
        raper.style.transform = "translateX(0)"
        wall = 0
    }
})


lfbtn.addEventListener("click",function(){
   if(saif === 0){
    raper.style.transform = "translateX(-66.6%)"
    raper.style.transition = "all ease 1s"
    saif = 1
   }
   else if (saif === 1){
    raper.style.transform = "translateX(-52.4%)"
    saif = 2
   }
   
   else if (saif === 2){
    raper.style.transform = "translateX(-37.8%)"
    saif = 3
   }
   
   else if (saif === 3){
    raper.style.transform = "translateX(-23.3%)"
    saif = 4
   }
   
   else if (saif === 4){
    raper.style.transform = "translateX(-8.7%)"
    saif = 5
   }
   
   else if (saif === 5){
    raper.style.transform = "translateX(0)"
    saif = 6
   }
   else{
    raper.style.transform = "translateX(-80.6%)"
    saif = 0
   }
})




// var msg1 = document.querySelector("#page4-center #msg1")
// var msg2 = document.querySelector("#page4-center #msg2")
// var msg3 = document.querySelector("#page4-center #msg3")
// var msg4 = document.querySelector("#page4-center #msg4")
// var msg5 = document.querySelector("#page4-center #msg5")
// var msg6 = document.querySelector("#page4-center #msg6")
// var msg7 = document.querySelector("#page4-center #msg7")
// var wall = 0


// rtbtn.addEventListener("click",function(){
//     if(wall === 0){
    //     msg1.style.marginLeft = "-36%"
    //     wall = 1
    //     }
    //     else if(wall === 1){
        //         msg2.style.marginLeft = "-60%"
        //         wall =2
        //     }
    
//     else if(wall === 2){
//         msg3.style.marginLeft = "-60%"
//         wall =3
//     }
    
//     else if(wall === 3){
//         msg4.style.marginLeft = "-60%"
//         wall =4
//     }
    
//     else if(wall === 4){
//         msg5.style.marginLeft = "-58%"
//         wall =5
//     }
    
//     else if(wall === 5){
//         msg6.style.marginLeft = "-60%"
//         wall =0
//     }
// })
















