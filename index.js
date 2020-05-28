
var fields = document.querySelectorAll('#form-user-create [name]')
var user = {};




console.log(user)


document.getElementById("form-user-create").addEventListener("submit",function(){
    fields.forEach(function(field, index){


        if(field.name == "gender"){
            
            if(field.checked === true){
                user[field.name] = field.value;
            }
                 
            
  