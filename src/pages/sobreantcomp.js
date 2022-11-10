const e = require('express');

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
    var sobre = false
    //

    //informacion del anteojo

    var fechahoy = new Date();
    var año = fechahoy.getFullYear();
    var mes = fechahoy.getMonth() + 1;
    var dia = fechahoy.getDate();
    var yearandmonth = dia + "/" + mes + "/" + año

var trabajo = document.querySelector("#t1");
var fec = document.querySelector("#f1");    
fec.innerHTML = `Fecha: ${yearandmonth}`
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
    var sal = document.querySelector("#sal");

    var retiroaprox = document.querySelector("#retiroaprox");
    var pedidopara = document.querySelector("#pedidopara")

//    console.log(array.length);
    //

    //tomar datos del cliente
        var fs = require('fs');
        fs.readFile('C:/Users/Public/senddatasobre.json', function (err, data) {
            var json = JSON.parse(data);
            console.log(json);
            if(json.sobre){
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
                trabajo.innerHTML = `Trabajo n°: ${json.trabajonum}`;
                fec.innerHTML = `Fecha: ${json.fecha}`;
                esf.value = json.esf;
                cil.value = json.cil;
                dip.value = json.dip;
                alt.value = json.alt;
                odesf.value = json.od;
                oiesf.value = json.oi;
                odcil.value = json.odcil;
                oicil.value = `  ${json.oicil}`;
                total.value = `$${json.total}`;
                sen.value = `$${json.sena}`;
                sal.value = `$${json.sal}`;
                dssc.value = json.desc;
                cristales.value = json.cristal;
                armazon.value = json.armazones;
                var arrayelem = ["esf", "cil", "dip", "alt", "od", "oi", "odcil", "oicil", "cristales", "armazon", "dssc"
                , "total", "sen", "sal", "retiroaprox", "pedidopara"];
                arrayelem.forEach(elem =>{
                    console.log(elem);
                    var elemento = document.querySelector(`#${elem}`);
                    if(elemento.value == "undefined"){
                        elemento.value = "";
                    }
                })
                var arrayelem2 = ["esfx", "cilx", "dipx", "altx", "odx", "oix", "odcilx", "oicilx", "cristalx", "armazonesx", "senax", "salx", "descx", "totalx"]

                arrayelem2.forEach(elem =>{ 
                    var elemento = document.querySelectorAll(`.${elem}`);
                    var elmslice = elem.slice(0, elem.indexOf("x"));
                    console.log(elemento);
                    elemento.forEach(seleccionado =>{ 
                        console.log(seleccionado);  
                            seleccionado.value = json[elmslice];       
                            if(seleccionado.value == "undefined"){
                                seleccionado.value = ""
                            }else if(seleccionado.classList.contains("senax") || seleccionado.classList.contains("salx") || seleccionado.classList.contains("totalx")){
                                seleccionado.value = `$${json[elmslice]}`
                            }


                    })
                    
                   
                })

                sobre = true;
            }else{
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
            }


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
        if (json.length == 0 && sobre == false){
            numtrabajo = `010001`;
            trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
            }else{
                if(json.length >=1 && json.length <10 && sobre == false){
                numtrabajo = `01000${json.length +1}`;
                trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=9 && json.length <100 && sobre == false){
                    numtrabajo = `0100${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=99 && json.length <1000 && sobre == false){
                    numtrabajo = `010${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;
                }else if(json.length >=1000 && json.length <10000 && sobre == false){
                    numtrabajo = `0${json.length +1}`;
                    trabajo.innerHTML = `Trabajo n°: ${numtrabajo}`;

                }
            }
        })
        sobre = false;

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
                    "esf": "${esf.value}",
                    "cil": "${cil.value}",
                    "dip": "${dip.value}",
                    "alt": "${alt.value}",
                    "od": "${odesf.value}",
                    "oi": "${oiesf.value}",
                    "odcil": "${odcil.value}",
                    "oicil": "${oicil.value}",
                    "cristal": "${cristales.value}",
                    "armazones": "${armazon.value}",
                    "desc": "${dssc.value}",
                    "totall": "${total.value}",
                    "sena": "${sen.value}",
                    "sal": "${sal.value}",
                    "retiroaprox": "${retiroaprox.value}",
                    "pedidopara": "${pedidopara.value}"
        
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