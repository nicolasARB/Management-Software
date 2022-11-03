
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
    var userlente;
    //

    //informacion del anteojo

    var fechahoy = new Date();
    var año = fechahoy.getFullYear();
    var mes = fechahoy.getMonth() + 1;
    var dia = fechahoy.getDate();
    var yearandmonth = dia + "/" + mes + "/" + año

var trabajo = document.querySelector("#t1");
var fec = document.querySelector("#f1");    
fec.innerHTML = yearandmonth
    var esf = document.querySelector("#esf");
    var cil = document.querySelector("#cil");
    var dip = document.querySelector("#dip");
    var alt = document.querySelector("#alt");

    var od = document.querySelector("#od");
    var oi = document.querySelector("#oi");
    var cristales = document.querySelector("#cristales");
    var armazon = document.querySelector("#armazon");


    var dssc = document.querySelector("#dssc");
    var total = document.querySelector("#total");
    var sen = document.querySelector("#sen");
    var sal = document.querySelector("#sal")

    //

    //tomar datos del cliente
        var fs = require('fs');
        fs.readFile('C:/Users/Public/senddatasobre.json', function (err, data) {
            var json = JSON.parse(data);
            console.log(json);
            username = json.nombre;
            usermail = json.mail;
            userphone = json.telefono;
            userhome = json.domicilio;
            userdocument = json.documento;
            lente = json.lente;
            nombre.innerHTML = "Nombre y apellido: " + username;
            domicilio.innerHTML = "Domicilio " + userhome;
            dni.innerHTML = "Documento: " + userdocument;
            celular.innerHTML = "Celular: " + userphone;
            mail.innerHTML = "Email: " + usermail;

            fs.readdir('C:/Users/Public/', function(err, archivos){
if(archivos.includes("sobres.json")){

}else{
    fs.writeFile('C:/Users/Public/sobres.json', "[]", (err)=>{
        if(err){
            console.log("error", err);
        }
    })
}
            })
            
        })

        //
        var previousjson = 
        fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
        var json = JSON.parse(data);
        console.log(json);
        previousjson = json
        })

        function save(){

            fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
                var json = JSON.parse(data);
                console.log(json);
                var valoresunidos = JSON.stringify(json);
                console.log(valoresunidos);
                console.log(json.length);

            var objetosobre = `{
                "trabajonum": "${trabajo.innerHTML}",
                "fecha": "${yearandmonth}",
                "cliente": "${username}",
                "documento": "${userdocument}",
                "mail": "${usermail}",
                "lente": "${userlente}",
                "esff": "${esf.value}",
                "cill": "${cil.value}",
                "dipp": "${dip.value}",
                "altt": "${alt.value}",
                "odd": "${od.value}",
                "oii": "${oi.value}",
                "cristal": "${cristales.value}",
                "armazones": "${armazon.value}",
                "desc": "${dssc.value}",
                "totall": "${total.value}",
                "sena": "${sen.value}",
                "sal": "${sal.value}"
    
            }`
         //   var objs2 = Object.entries(objetosobre);
        //    console.log(objs2);
            fs.writeFile( 'C:/Users/Public/sobres.json', `[${objetosobre}]`, (error) => {
                if(error){
                    console.log(`error: ${error}`);
                }
            })
            })

        }

document.querySelector("#imprimir").addEventListener('click', ()=>{
window.print();
})
var savebutton = document.querySelector("#guardar");

savebutton.addEventListener("click", ()=>{
    save()
})
})