



var names = document.querySelector('#name')
var budget = document.querySelector('#budget')
var save = document.querySelector('#savebtn')
var dashbtn = document.querySelector('#dashbtn')
var dashboard = document.querySelector('.dashboard')

var username = names.value;
 var userbudget = budget.value;

save.addEventListener('click', () => {
     username = names.value;
     userbudget = budget.value;

    

 if(names.value === '' || budget.value === ''){
     
    alert('One or two field is empty')
 }else{   
    
    console.log(username)

    console.log(userbudget)

    save.style.marginRight = "10px";
    dashboard.style.display = 'block';
    save.innerText = 'Saved';
    save.style.cursor = 'not-allowed';

 };

})

//export {username, userbudget};