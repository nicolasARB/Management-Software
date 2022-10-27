window.addEventListener('load', ()=>{



    var nombreenelsobre = document.querySelector("#nombresobre");
    var mailenelsobre = document.querySelector("#mailsobre");
    var telefonoenelsobre = document.querySelector("#telefonosobre");
    var domicilioenelsobre = document.querySelector("#domiciliosobre");
    var documentoenelsobre = document.querySelector("#documentosobre");
    var nombre = document.querySelector("#nombre");
    var domicilio = document.querySelector("#domicilio");
    var dni = document.querySelector("#dni");
    var celular = document.querySelector("#celular");
    var mail = document.querySelector("#mail");
    var username
    var usermail
    var userphone
    var userhome
    var userdocument
        var fs = require('fs');
        fs.readFile('C:/Users/Public/senddatasobre.json', function (err, data) {
            var json = JSON.parse(data)
            console.log(json)
            username = json.nombre;
            usermail = json.mail;
            userphone = json.telefono;
            userhome = json.domicilio;
            userdocument = json.documento;

            nombre.innerHTML = "Nombre y apellido: " + username;
            domicilio.innerHTML = "Domicilio " + userhome;
            dni.innerHTML = "Documento: " + userdocument;
            celular.innerHTML = "Celular: " + userphone;
            mail.innerHTML = "Email: " + usermail;
          /*  nombreenelsobre.innerHTML = "Cliente: " +  username;
            mailenelsobre.innerHTML = "Mail: " + usermail;
            telefonoenelsobre.innerHTML = "Telefono: " + userphone;
            domicilioenelsobre.innerHTML = "Domicilio:" + userhome;
            documentoenelsobre.innerHTML = "Documento:" + userdocument; */
            
       // console.log(valoresunidos);
        })

document.querySelector("#imprimir").addEventListener('click', ()=>{

    console.log("si");
window.print();
})
})