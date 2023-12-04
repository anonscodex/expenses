//import {username, userbudget} from './script.js';
//username = require('script.js')
//userbudget = require('script.js')

//console.log(username)

//console.log(userbudget)

let expcontainer = document.querySelector("#exp-container")
var balance = document.querySelector("#balance")
let addexp = document.querySelector(".roundbtn")
let form = document.querySelector("#createtask")
let form1 = document.querySelector("#addbalance")
let topup = document.querySelector("#addbtn")
let mainexp = document.querySelector('#mainexp')
let maindesc = document.querySelector('#maindesc')
let recordbtn = document.querySelector('#recordbtn')
let change = document.querySelector("#change")
let toggle = document.querySelector("#toggle")
let untoggle = document.querySelector("#untoggle")
let closebtn = document.querySelector(".closebtn")
let minusbtn = document.querySelector(".minusbtn")
let addbalance = document.querySelector("#addbalance")
let tubalance = document.querySelector("#tubalance")
let tubalancebtn = document.querySelector("#tubalancebtn")
var hide = document.querySelector('#hide')
let isHidden = true;

    
    

function createexp() {

    
        

    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    li.innerHTML =  mainexp.value;
    h3.innerHTML = maindesc.value;
    expcontainer.appendChild(li)
    li.appendChild(h3)
    saveData()
   
    var totalmoney = balance.textContent;
    var usermainexp = mainexp.value;
    var allusermoney = parseInt(totalmoney)
    var usermoney = parseInt(usermainexp)
    let newbalance = allusermoney - usermoney
    
    

    console.log(allusermoney)
    console.log(typeof(allusermoney))
    console.log(usermoney)

   if (newbalance < 1000){
       balance.style.color = 'red';
   } 
 
   
   if (newbalance < 0){
    
    alert('You have exceed your balance');
    li.style.display = 'none';
    mainexp.value = "";
    maindesc.value="";
    saveData()
    
}else{
   balance.innerHTML = newbalance;
   
   mainexp.value = "";
   maindesc.value="";
   saveData()
   
}
    
   // let sumbalance = allusermoney - usermoney
   // let userbalance = parseInt(sumbalance)
   // balance.innerHTML = userbalance.value;
    


   // let span = document.createElement('span')
      //  span.innerHTML = "&#8358"
      //  li.appendChild(span)

    form.style.display = 'none';

}


function addnewtask() {
    if(balance.textContent != 0 ) {
        form.style.display = 'block'
        form1.style.display = 'none'
    }else {
        form1.style.display = 'block'
        form.style.display = 'none'
    }
}

function closetask(){
    form.style.display = 'none'
    form1.style.display = 'none'
}

addexp.addEventListener('click', ()=> {
    addnewtask()
    addexp.style.display = 'none'
    minusbtn.style.display = 'block'
})

minusbtn.addEventListener('click', ()=> {
    closetask()
    addexp.style.display = 'block'
    minusbtn.style.display = 'none'
   
})


recordbtn.addEventListener('click', ()=> {
    if(mainexp.value === '' || maindesc.value === ''){
        alert('One or more field is empty')
        

    }else{
        createexp();
        addexp.style.display = 'block'
        minusbtn.style.display = 'none'
    }
    saveData()


})

topup.addEventListener('click', ()=> {
    form1.style.display = 'block'
        form.style.display = 'none'
})

tubalancebtn.addEventListener('click', ()=> {
    console.log(tubalance.value)
    if(tubalance.value === '' || tubalance.value === 0){
        alert('Balance cannot be zero');
        tubalance.textContent = ' '
        addexp.style.display = 'block'
        minusbtn.style.display = 'none'
        
    }else {
        balancing =  balance.textContent 
        adddingbalance = parseInt(balancing)
        tubal = parseInt(tubalance.value)

        balance.innerHTML = tubal + adddingbalance;
        form1.style.display = 'none';
        addexp.style.display = 'block'
        minusbtn.style.display = 'none'
    }

    if (tubalance.value > 0) {
        balance.style.color = 'white';
    }

    closetask()
    


    saveData()
})




toggle.addEventListener('click', ()=> {
    //alert(balance.textContent)

   // if (isHidden) {
        balance.style.display = 'none';
        hide.style.display = 'block';
        toggle.style.display = 'none' ;
        untoggle.style.display = 'block'
  //  } 
  //  isHidden = !isHidden
    saveData()
})

untoggle.addEventListener('click', ()=> {

//if (isHidden) {
    balance.style.display = 'block';
    hide.style.display = 'none';
    toggle.style.display = 'block' ;
    untoggle.style.display = 'none'
//}
//isHidden = !isHidden
saveData()
})





//untoggle.addEventListener('click', ()=> {
    //alert(balance.textContent)

   // if (isHidden) {
    //    balance.style.display = 'block';
     //   hide.style.display = 'none';
      //  toggle.style.display = 'block' ;
      //  untoggle.style.display = 'none'
  //  } //else {
        
      //  balance.style.display = 'block';
      //  hide.style.display = 'none';
        
   // }
   // isHidden = !isHidden
   // saveData()
//})

function saveData() {
    localStorage.setItem("data", expcontainer.innerHTML)
    localStorage.data2 = balance.textContent;
}

function getData(){
    expcontainer.innerHTML = localStorage.getItem("data")
    document.getElementById("balance").textContent = localStorage.data2;
}

getData()






//console.log(balance.textContent)
//console.log(change.innerHTML)



