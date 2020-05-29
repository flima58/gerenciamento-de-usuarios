
var fields = document.querySelectorAll('#form-user-create [name]')
var user = {};


function addLine(dataUser){
        console.log("addLine",dataUser);


        var tr = document.createElement("tr");
        
        tr.innerHTML = `<tr>
                            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                            <td>${dataUser.name}</td>
                            <td>${dataUser.email}</td>
                            <td>${dataUser.admin}</td>
                            <td>${dataUser.birth}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                            </td>
                        </tr>`;

                        document.getElementById("table-users").appendChild(tr);
        
}

//A função do evento, sempre vai receber como parametro o evento para SPA
document.getElementById("form-user-create").addEventListener("submit",function(event){

    event.preventDefault(); //Para tudo que esse evento disparou


    fields.forEach(function(field, index){
        if(field.name == "gender"){
            
            if(field.checked === true){
                user[field.name] = field.value;
            }
                 
            
    
        }else {
            user[field.name] = field.value;
        }
        
    
    });

    addLine(user)
});