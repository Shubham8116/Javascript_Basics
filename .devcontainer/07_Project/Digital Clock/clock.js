const clock=document.querySelector('#clock');
const day=document.querySelector('#day')


setInterval(function(){
const date=new Date();
clock.innerHTML=date.toLocaleTimeString();
day.innerHTML=date.toDateString();
},1000);