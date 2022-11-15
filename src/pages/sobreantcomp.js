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

    var numdetrabajo
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
                    if(elemento.value == "undefined" || elemento.value.trim().length == 0){
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
                            if(seleccionado.value == "undefined" || seleccionado.value.trim().length == 0){
                                seleccionado.value = ""
                            }else if(seleccionado.classList.contains("senax") || seleccionado.classList.contains("salx") || seleccionado.classList.contains("totalx")){
                                console.log(seleccionado.value.trim())
                                seleccionado.value = `$${json[elmslice]}`
                            }


                    })
                    
                   
                })
 numdetrabajo = json.trabajonum;
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

        function save(){

            fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
                var json = JSON.parse(data);
                if(json.length == 0 && sobre == false){
                    sobre = true;
                    console.log("yes");
                        var valoresunidos = JSON.stringify(json);
                        var lastIndex = valoresunidos.lastIndexOf("]");
                        valoresunidos = valoresunidos.substring(0, lastIndex);
                        console.log(valoresunidos);
                        console.log(json.length);
                        var objetosobre = 
                        `{"trabajonum": "${numtrabajo}",
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
                            "pedidopara": "${pedidopara.value}"}`
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
                }
                json.forEach( obj =>{
                    console.log(numdetrabajo);
                    console.log(obj.trabajonum);
if(obj.trabajonum == numdetrabajo && sobre == true){
    var sacartotal = total.value.split("$",[1]);
    var sacarsen = sen.value.split("$",[1]);
    var sacarsal = sal.value.split("$", [1])
console.log(`trabajo encontrado: ${obj.trabajonum}`);
var sobrecompleto = `{"trabajonum":"${numdetrabajo}","fecha":"${obj.fecha}","cliente":"${obj.cliente}","documento":"${obj.documento}","mail":"${obj.mail}","lente":"${obj.lente}","esf":"${obj.esf}","cil":"${obj.cil}","dip":"${obj.dip}","alt":"${obj.alt}","od":"${obj.od}","oi":"${obj.oi}","odcil":"${obj.odcil}","oicil":"${obj.oicil}","cristal":"${obj.cristal}","armazones":"${obj.armazones}","desc":"${obj.desc}","totall":"${obj.totall}","sena":"${obj.sena}","sal":"${obj.sal}","retiroaprox":"${obj.retiroaprox}","pedidopara":"${obj.pedidopara}"}`
var sobrecompletohtml = `{"trabajonum":"${numdetrabajo}","fecha":"${obj.fecha}","cliente":"${username}","documento":"${userdocument}","mail":"${usermail}","lente":"${userlente}","esf":"${esf.value}","cil":"${cil.value}","dip":"${dip.value}","alt":"${alt.value}","od":"${od.value}","oi":"${oi.value}","odcil":"${odcil.value}","oicil":"${oicil.value}","cristal":"${cristales.value}","armazones":"${armazon.value}","desc":"${dssc.value}","totall":"${sacartotal}","sena":"${sacarsen}","sal":"${sacarsal}","retiroaprox":"${retiroaprox.value}","pedidopara":"${pedidopara.value}"}`

var valoresunidos = JSON.stringify(json);
var valunidos
console.log(valoresunidos);
if(valoresunidos.indexOf(`${sobrecompleto}`)){
    console.log(sobrecompleto);
    console.log(sobrecompletohtml);
    console.log(valoresunidos);
    valunidos = valoresunidos.replace(`${sobrecompleto}`, `${sobrecompletohtml}`);
    console.log(valunidos);

    
    fs.writeFile( 'C:/Users/Public/sobres.json', valunidos, (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
    
}

}else if(obj.trabajonum != numdetrabajo && sobre == false){
sobre = true;
console.log("yes");
    var valoresunidos = JSON.stringify(json);
    var lastIndex = valoresunidos.lastIndexOf("]");
    valoresunidos = valoresunidos.substring(0, lastIndex);
    console.log(valoresunidos);
    console.log(json.length);
    var objetosobre = 
    `{"trabajonum": "${numtrabajo}",
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
        "pedidopara": "${pedidopara.value}"}`
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