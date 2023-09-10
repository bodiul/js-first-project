let number = document.getElementById('number-section');
for(let i=1; i<=99;i++){
        let btn = document.createElement('button');
        btn.innerHTML = i;
        number.appendChild(btn)
}


let addnumber = document.getElementById('oddnumber');
let i=99
for(let i=99; i<=299;i++){
    if(i%2==1){
        let btn = document.createElement('button');
        btn.innerHTML = i;
        addnumber.appendChild(btn)
    }
}


let number3 = document.getElementById('number3');
for(let i=16; i<=400;i++){
    if(i%3==0){
        let btn = document.createElement('button');
        btn.innerHTML = i;
        number3.appendChild(btn)
    }
}

function handlechage(){
    let input = document.getElementById('input1').value;
    if(input%2==0){
        greeting = 'ODD NUMBER OR ENEN NUMBER :'+' ENEN NUMBER';
    }
    else if(input%2==1){
        greeting ='ODD NUMBER OR ENEN NUMBER :'+ ' ODD NUMBER';
    }
    else{
        greeting ='ODD NUMBER OR ENEN NUMBER :'+ ' SYSTEM ERROR';
    }
    document.getElementById('output').innerHTML = greeting;
}


function handlechage1(){
    let input = document.getElementById('input-val').value;
    if((input >= 80) && (input <= 100)){
        greeting ='Student marks grid :' + " A+ "
    }
    else if((input >= 70) && (input <= 79)){
        greeting ='Student marks grid :' + " A "
    }
    else if((input >= 60) && (input <= 69)){
        greeting ='Student marks grid :' + " A- "
    }
    else if((input >= 50) && (input <= 59)){
        greeting ='Student marks grid :' + " B "
    }
    else if((input >= 40) && (input <= 49)){
        greeting ='Student marks grid :' + " C "
    }
    else if((input >= 33) && (input <= 39)){
        greeting ='Student marks grid :' + " D "
    }
    else if((input >= 0) && (input <= 32)){
        greeting ='Student marks grid :' + " F "
    }
    else{
        greeting ='Student marks grid :' + " SYSTEM ERROR"
    }
   
    document.getElementById("demo").innerHTML = greeting;
}

let react = document.getElementById('react-print');
for(let i=1; i<=100;i++){
        let btn = document.createElement('button');
        btn.innerHTML = 'reactjs '+ i;
        react.appendChild(btn);
        
}

let num6 = document.getElementById('number6');
for(let i=1; i<=55; i++){
    let btn = document.createElement('button');
    btn.innerHTML =  i;
    num6.appendChild(btn);
}

function handlechage2(){
    let ponumber = document.getElementById('inputnumber').value;
        if(ponumber%2==0){
            greeting ='Number Print : '+ "POSITIVE NUMBER"
        }
        else if(ponumber%2==1){
            greeting= 'Number Print : '+  "NEGATIVE NUMBER"
        }
        else{
            greeting='Number Print : '+  'SYSTEM ERROR'
        }
    document.getElementById('numberprint').innerHTML = greeting;
}

let myname = document.getElementById('myname');
for(let i=1; i<=12;i++){
    let btn = document.createElement('button');
    btn.innerHTML =i+ ' . Polash islam';
    myname.appendChild(btn);  
}
let x=9;
for(j=1;j<=10;j++){
	document.write(`${j}x${x} = ${j*x} <br>`);
}