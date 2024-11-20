function btn() {
   
    let menu=document.querySelector('header');
    if (menu.style.display !='block') {
        menu.style.display='block';    
    } else {
        menu.style.display='none';    
    }
}
let number1=document.getElementById("number1");
let counter1=0;
setInterval(()=>{
    if (counter1 == 80) {
        clearInterval();        
    } else {
        counter1 +=1;
        number1.innerHTML = counter1 + "%";
    }
},30);

let number2=document.getElementById("number2");
let counter2=0;
setInterval(()=>{
    if (counter2 == 75) {
        clearInterval();        
    } else {
        counter2 +=1;
        number2.innerHTML = counter2 + "%";
    }
},30);  

let number3=document.getElementById("number3");
let counter3=0;
setInterval(()=>{
    if (counter3 == 80) {
        clearInterval();        
    } else {
        counter3 +=1;
        number3.innerHTML = counter3 + "%";
    }
},30);
