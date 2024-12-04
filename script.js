let t1=document.querySelector("#t1");
let t2=document.querySelector("#t2");
let t3=document.querySelector("#t3");
let t4=document.querySelector("#t4");
let t5=document.querySelector("#t5");
let btn=document.querySelector("#btn");
let more=document.querySelector(".more");
let lightBox=document.querySelector("#lightBox");
let a1=document.querySelector("#a1");
let a2=document.querySelector("#a2");
let a3=document.querySelector("#a3");
let a4=document.querySelector("#a4");
let yes=document.querySelector("#yes");
let no=document.querySelector("#no");
 let linkArr=["https://subashdevv.github.io/scl/","https://subashdevv.github.io/count/","https://subashdevv.github.io/myGame/","https://subashdevv.github.io/cool/"]
let anArr=[a1,a2,a3,a4]
let clicked;
 let c_count=1;
console.log("t1");
btn.addEventListener("click",()=>{

    if(c_count%2!=0)
    {
more.style.transform="translateX(25vw)";
btn.style.backgroundColor="white";
    }
    else{
        more.removeAttribute("style");
        btn.removeAttribute("style");
    }
c_count+=1;
console.log(c_count);

})
yes.addEventListener("click",()=>{
window.location.href=linkArr[clicked];
console.log(clicked)
})
no.addEventListener("click",()=>{
 lightBox.style.display="none";
  })
for(i=0;i < 4;i++)
{
anArr[i].addEventListener("click",()=>{
    lightBox.style.display="flex";
})
}
a1.addEventListener("click",()=>{
    clicked=0;
})
a2.addEventListener("click",()=>{
    clicked=1;
})
a3.addEventListener("click",()=>{
    clicked=2;
})
a4.addEventListener("click",()=>{
    clicked=3;
})