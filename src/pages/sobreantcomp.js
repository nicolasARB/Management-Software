


















window.addEventListener('load', ()=>{



//variables de usuario
    var nombre = document.querySelector("#nombre");
    var domicilio = document.querySelector("#domicilio");
    var dni = document.querySelector("#dni");
    var celular = document.querySelector("#celular");
    var mail = document.querySelector("#mail");
    var username;
    var usermail;
    var userphone;
    var userhome;
    var userdocument;
    //

    //informacion del anteojo
    var esf = document.querySelector(".esf");
    var cil = document.querySelector(".cil");
    var dip = document.querySelector(".dip");
    var alt = document.querySelector(".alt");

    var od = document.querySelector(".od");
    var oi = document.querySelector(".oi");
    var cristales = document.querySelector(".cristales");
    var armazon = document.querySelector(".armazon");


    var dssc = document.querySelector(".dssc");
    var total = document.querySelector(".total");
    var sen = document.querySelector(".sen");
    var sal = document.querySelector(".sal")

    //

        var fs = require('fs');
        fs.readFile('C:/Users/Public/senddatasobre.json', function (err, data) {
            var json = JSON.parse(data);
            console.log(json);
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
        })

        function save(){

        }

document.querySelector("#imprimir").addEventListener('click', ()=>{
window.print();
})
var savebutton = document.querySelector("#guardar");

savebutton.addEventListener(

)
})