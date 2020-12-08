$(document).ready(function() {
     $('.menu-toggle').click(function(){
         $('.menu-toggle').toggleClass('active')
         $('nav').toggleClass('active')
     })
})



// about page sliders
/*const controls=document.querySelector(".controls")
const container=document.querySelector(".thumbnail-container")
  const   allBox=container.children;
const containerWidth=container.offsetWidth;

const margin=30;
var items=0;
var totslItems=0;
var jumpSlideWidth=0;


//item setup per slide

responsive=[
    {breakPoint:{width:0,item: 2}} , // if width greater then 0 (1 will item show)
    {breakPoint:{width:768,item:3}},// if width greater then 600 (2  will item show)
    {breakPoint:{width:1000,item: 4}},// if width greater then 1000 (4  will item show)
]

function load(){
    for(let i =0; i<responsive.length; i++){
        if(window.innerWidth>responsive[i].breakPoint.width){
            items=responsive[i].breakPoint.item
        }
       
    }
    start()
   
}
function start(){
    var totalItemsWidth=0;
    for(let i=0;i<allBox.length; i++){
        
        allBox[i].style.width=(containerWidth/items)-margin + "px";
        allBox[i].style.margin=(margin/2 )+ "px";
        totalItemsWidth+=containerWidth/items;
        totslItems++;
        
    }
   // thumbnail-container width set up
    container.style.width=totalItemsWidth + "px"; 
    
    //slides controls set up
     const allSlides=Math.ceil(totslItems/items);
     const ul=document.createElement("ul");
     for(let i=1; i<=allSlides; i++){
     const li=document.createElement("li");
     li.id=i;
     li.innerHTML=i;
     li.setAttribute("onclick","controlSlides(this)");
     ul.appendChild(li);
     if(i==1){
         li.className="active"
     }
    }
    controls.appendChild(ul);

}
//when click on number slide to next slide
function controlSlides(ele){
  //select controls childern ul element
  const ul=controls.children;
  //slect ul cohildren li element
  const li=ul[0].children
 
  var active;
  for(let i=0; i<li.length; i++){
      if(li[i].className=="active"){
           //find who is now active
          active=i;
          // remove active class from al li elements
          li[i].className="";
      }
  
    
  }
        // add active class to current slide
        ele.className="active";
        var numb=(ele.id-1) -active;
        jumpSlideWidth= jumpSlideWidth+(containerWidth*numb)
        container.style.marginLeft= -jumpSlideWidth +  "px";


}

window.onload=load();*/



$(function() {   
 $('.slide').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
  });
});




