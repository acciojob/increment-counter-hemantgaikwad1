//your JS code here. If required.
let btn=document.getElementById('incrementBtn');
let counter=document.getElementById('counter');

btn.onclick=()=>{
	
	counter.innerText=Number(counter.innerText)+1;
	alert(counter.innerText);
}



