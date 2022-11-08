
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

    var odesf = document.querySelector("#od");
    var oiesf = document.querySelector("#oi");
    var odcil = document.querySelector("#odcil");
    var oicil = document.querySelector("#oicil");
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
            userlente = json.lente;
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
        var previousjson
        var numtrabajo
        fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
        var json = JSON.parse(data);
        console.log(json);
        previousjson = json
        if (json.length == 0){
            numtrabajo = `010001`;
            trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
            }else{
                if(json.length >=1 && json.length <10){
                numtrabajo = `01000${json.length +1}`;
                trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=9 && json.length <100){
                    numtrabajo = `0100${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=99 && json.length <1000){
                    numtrabajo = `010${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=1000 && json.length <10000){
                    numtrabajo = `0${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;

                }
            }
        })

        function save(){

            fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
                var json = JSON.parse(data);
                console.log(json);
                var valoresunidos = JSON.stringify(json);
                var lastIndex = valoresunidos.lastIndexOf("]");
                valoresunidos = valoresunidos.substring(0, lastIndex);
                console.log(valoresunidos);
                console.log(json.length);
                var objetosobre = `{
                    "trabajonum": "${numtrabajo}",
                    "fecha": "${yearandmonth}",
                    "cliente": "${username}",
                    "documento": "${userdocument}",
                    "mail": "${usermail}",
                    "lente": "${userlente}",
                    "esff": "${esf.value}",
                    "cill": "${cil.value}",
                    "dipp": "${dip.value}",
                    "altt": "${alt.value}",
                    "od": "${odesf.value}",
                    "oi": "${oiesf.value}",
                    "od": "${odcil.value}",
                    "oi": "${oicil.value}",
                    "cristal": "${cristales.value}",
                    "armazones": "${armazon.value}",
                    "desc": "${dssc.value}",
                    "totall": "${total.value}",
                    "sena": "${sen.value}",
                    "sal": "${sal.value}"
        
                }`
if (json.length == 0){
valoresunidos += `${objetosobre} ]`
}else{
valoresunidos += ` ,${objetosobre} ]`
}
            fs.writeFile( 'C:/Users/Public/sobres.json', valoresunidos, (error) => {
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