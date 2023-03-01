const e = require('express');
const { json } = require('express');
const { join } = require('path');



window.addEventListener('load', function(){
    var joinn = " "

var objetos = [
    {"test": "1"},
    {"test": "2"}
]

var stock = [

]

var sobres = {

}

var estadisticasjson = [
    
  { "2022":  {
    "Enero": {

    },

    "Febrero": {
        "30": {
        "Element": {
            "Nombre": "Hola",
            "Precio": "5000",
            "Hora": "17:47"
        },
        "Element2": {
            "Nombre": "Hola2",
            "Precio": "8000",
            "Hora": "10:22"
            
        }
    }, "29": {
        "Element": {
            "Nombre": "hello",
            "Precio": "9000",
            "Hora": "12:34"
        },
        "Element2": {
            "Nombre": "hello2",
            "Precio": "15000",
            "Hora": "15:34"
        }
    }
    }
} },
   { "2023": {
    "Enero": {

    },

    "Febrero": {
        "30": {
        "Element": {
            "Nombre": "Hola",
            "Precio": "5000",
            "Hora": "17:47"
        },
        "Element2": {
            "Nombre": "Hola2",
            "Precio": "8000",
            "Hora": "10:22"
            
        }
    }, "29": {
        "Element": {
            "Nombre": "hello",
            "Precio": "9000",
            "Hora": "12:34"
        },
        "Element2": {
            "Nombre": "hello2",
            "Precio": "15000",
            "Hora": "15:34"
        }
    }
    }
   }
}

]
console.log(estadisticasjson);

//variables json
var previouselement = document.querySelector("#productname");
var productname;
var stockvalue;
var productprice;
var clientename;
var clientemail;
var clientetelefono;
var clientedomicilio;
var clientedocumento;
//
var agregar = document.querySelector("#add");
var addcliente = document.querySelector("#addcliente");
/*
objetos.forEach(element =>{
var objeto = Object.entries(element);
objeto.forEach(arr =>{
if(arr[0] == "numero"){
var val = "Cliente " + arr[1] + " -"; 
joinn +=val;
console.log(joinn);
}else if(arr[0] == "nombre"){
var val = arr[1] + ", ";
joinn += val; 
}else if(arr[0] == "domicilio"){
    var val = arr[1] + ""
    joinn += val;
}
 })
})*/

//select nav
var nava = document.querySelectorAll(".botonav");
nava.forEach(nav => {
    nav.addEventListener('click', function(){
    if(nav.classList.contains("selectednav")){

    }else{
        nava.forEach(buscar => {
            if(buscar.classList.contains("selectednav")){
                buscar.classList.remove("selectednav");
            }
        })
    nav.classList.add("selectednav")
    }
    })
})
//
const {ipcRenderer} = require('electron');

var fs = require('fs');
var crearsobre = document.querySelector("#crearsobre")
var nombresobre
var mailsobre
var telefonosobre
var domiciliosobre
var documentodiv
var abrirsobreclicked = false;
var buttoncerca = document.querySelector("#buttoncerca");
var buttonlejos = document.querySelector("#buttonlejos");

crearsobre.addEventListener('click', e =>{
var id02 = document.querySelector("#id02")
   id02.style = "display: block";
abrirsobreclicked = true;
console.log("abrir");

        


}

)





//cargar datos de sobres del cliente
var todoslossobres;
var todoslosclientes;


  /*
todoslosclientes.forEach(cliente =>{
    cliente.addEventListener('click', function(){
        
    })
})*/



//
var changeproduct = document.querySelector('.deletebtn');
var cancelproduct = document.querySelector('.cancelbtn');





//modals abrir sobre
buttoncerca.addEventListener("click", e =>{
if(abrirsobreclicked == true){
    abrirsobreclicked = false;
  //  nombresobre = document.querySelector("#nombresobre").innerHTML;
 //   mailsobre = document.querySelector("#mailsobre").innerHTML;
 //   telefonosobre = document.querySelector("#telefonosobre").innerHTML;
 //   domiciliosobre = document.querySelector("#domiciliosobre").innerHTML;
 //   documentodiv = document.querySelector("#documentosobre").innerHTML;
 nombresobre = nombresobre.substring(nombresobre.indexOf(":") + 1);
 domiciliosobre = domiciliosobre.substring(domiciliosobre.indexOf(":") + 1);
 telefonosobre = telefonosobre.substring(telefonosobre.indexOf(":") + 1);
 documentodiv = documentodiv.substring(documentodiv.indexOf(":") + 1);
 mailsobre = mailsobre.substring(mailsobre.indexOf(":") + 1);

    fs.writeFile( 'C:/Users/Public/senddatasobre.json', `{"nombre": "${nombresobre}", "mail": "${mailsobre}", "telefono": "${telefonosobre}", "domicilio": "${domiciliosobre}", "documento": "${documentodiv}", "lente": "cerca"}`,  (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
        ipcRenderer.send("abrirsobre");
}
})

buttonlejos.addEventListener("click", e =>{
    if(abrirsobreclicked == true){
        abrirsobreclicked = false;
        /*
        nombresobre = document.querySelector("#nombresobre").innerHTML;
        mailsobre = document.querySelector("#mailsobre").innerHTML;
        telefonosobre = document.querySelector("#telefonosobre").innerHTML;
        domiciliosobre = document.querySelector("#domiciliosobre").innerHTML;
        documentodiv = document.querySelector("#documentosobre").innerHTML;*/
        nombresobre = nombresobre.substring(nombresobre.indexOf(":") + 1);
        domiciliosobre = domiciliosobre.substring(domiciliosobre.indexOf(":") + 1);
        telefonosobre = telefonosobre.substring(telefonosobre.indexOf(":") + 1);
        documentodiv = documentodiv.substring(documentodiv.indexOf(":") + 1);
        mailsobre = mailsobre.substring(mailsobre.indexOf(":") + 1);
        fs.writeFile( 'C:/Users/Public/senddatasobre.json', `{"nombre": "${nombresobre}", "mail": "${mailsobre}", "telefono": "${telefonosobre}", "domicilio": "${domiciliosobre}", "documento": "${documentodiv}", "lente": "lejos"}`, (error) => {
            if(error){
                console.log(`error: ${error}`);
            }
        })
            ipcRenderer.send("abrirsobre");
    }
    })

//

var content = document.querySelector("#contenido");
var navbara = document.querySelectorAll(".botonav");
var buscadorstock = document.querySelector("#buscadorstock");
var contenidostock = document.querySelector("#contenidostock");
var contenidostockfooter = document.querySelector("#agregarproductos");
var estadisticas = document.querySelector("#estadisticas");
var contenidoestadisticas = document.querySelector("#contenidoestadisticas");
// actualizar nav
navbara.forEach(nab =>{
    console.log(nab);
    nab.addEventListener('click', function(){
if(nab.innerHTML == "Stock"){
    content.style = "display: none";
    contenidostock.style = "display: flex;";
    contenidostockfooter.style = "display: inline;";
    buscadorstock.style = "display: inline;";
    estadisticas.style = "display: none;"
    contenidoestadisticas.style = "display: none;"
} else if(nab.innerHTML == "Clientes"){
    content.style = "display: flex;";
    contenidostock.style = "display: none;";
    contenidostockfooter.style = "display: none;";
    buscadorstock.style = "display: none;";
    estadisticas.style = "display: none;"
    contenidoestadisticas.style = "display: none;"
}else if(nab.innerHTML == "Estadisticas"){
    content.style = "display: none;";
    contenidostock.style = "display: none;";
    contenidostockfooter.style = "display: none;";
    buscadorstock.style = "display: none;";
    estadisticas.style = "display: inline;"
    contenidoestadisticas.style = "display: inline;"

}
    })
})
//

var jsonlength = 0;
var jsonlengthclientes = 0;
var numero = 0;
var modalname = document.querySelector('.modalname');
var modalstock = document.querySelector('.modalstock');
var modalprice = document.querySelector('.modalprice');
var clicked = false;
var clickedstock = false;
var clickedprice = false;
var buttonclicked = false;

var selcbutton;

var productttname;
var previousproductname;

var previousstockvalue;
var productstock;
var productstockvalue;

var previousprice;
var productstockprice;

setInterval(() => {

productname = document.querySelector("#productname");
stockvalue = document.querySelector("#stockvalue");
productprice = document.querySelector("#precioadd");
clientename = document.querySelector("#username");
clientemail = document.querySelector("#usermail");
clientetelefono = document.querySelector("#userphone");
clientedomicilio = document.querySelector("#userhome");
clientedocumento = document.querySelector("#userdocument");
var elementss = document.querySelectorAll(".elementos");
selcbutton = document.querySelectorAll(".sobresclientebutton");



selcbutton.forEach(buttonselec =>{
    buttonselec.addEventListener("click", function(){
        var butparent = buttonselec.parentNode;
       // console.log(butparent.parentNode.innerHTML);
       /*
                                                 for(var i=0, len = listaparent.childElementCount; i < len; ++i){
                                        var child = listaparent.children[i];
                                        console.log(child);
                                        for(var b=0, lan = child.childElementCount; b < lan; ++b){
                                            console.log(child);
                                        console.log(child.firstChild); */
        for (var i=0, len = butparent.childElementCount; i < len; ++i){

            var child = butparent.children[i]
            console.log(child);
       //     for(var b=0, lan = child.childElementCount; b < lan; ++b){
              //  console.log(child);
              //  console.log(child.firstChild);
            if(child.classList.contains("sobresclientediv") && buttonclicked == false){
console.log("encontrado");

                if(buttonclicked == false){
                    console.log(child);
                    var childstring = child.innerHTML
                    console.log(childstring);
                    var numbers = childstring.match(/(\d+)/);
                    var num = numbers[0].toString();
                    console.log(num);
                    fs.readFile("C:/Users/Public/sobres.json", function(err, data){
                        var json = JSON.parse(data);
                        console.log(json);
                        json.forEach(usersobre =>{
                            console.log(usersobre);
                            if(usersobre.trabajonum == num){
                               var numerodetrabajo = usersobre.trabajonum;
                               var trabajofecha = usersobre.fecha;
                               var esf = usersobre.esf;
                               var cil = usersobre.cil;
                               var dip = usersobre.dip;
                               var alt = usersobre.alt;
                               var od = usersobre.od;
                               var oi = usersobre.oi;
                               var odcil = usersobre.odcil;
                               var oicil = usersobre.oicil;
                               var cristal = usersobre.cristal;
                               var armazones = usersobre.armazones;
                               var desc = usersobre.desc;
                               var total = usersobre.totall;
                               var sena = usersobre.sena;
                               var sal = usersobre.sal; 
                               var lente = usersobre.lente;
                               nombresobre = nombresobre.substring(nombresobre.indexOf(":") + 1);
                               domiciliosobre = domiciliosobre.substring(domiciliosobre.indexOf(":") + 1);
                               telefonosobre = telefonosobre.substring(telefonosobre.indexOf(":") + 1);
                               documentodiv = documentodiv.substring(documentodiv.indexOf(":") + 1);
                               mailsobre = mailsobre.substring(mailsobre.indexOf(":") + 1);

                               fs.writeFile( 'C:/Users/Public/senddatasobre.json', `{ "sobre": true, "nombre": "${nombresobre}", "mail": "${mailsobre}", "telefono": "${telefonosobre}", "domicilio": "${domiciliosobre}", "documento": "${documentodiv}"
                               , "lente": "${lente}", "trabajonum": "${numerodetrabajo}", "fecha": "${trabajofecha}", "esf": "${esf}", "cil:": "${cil}", "dip": "${dip}"
                               , "alt": "${alt}", "od": "${od}", "oi": "${oi}", "odcil": "${odcil}", "oicil": "${oicil}", "cristal": "${cristal}", "armazones": "${armazones}",
                               "desc": "${desc}", "total": "${total}", "sena": "${sena}", "sal": "${sal}"}`, (error) => {
                                if(error){
                                    console.log(`error: ${error}`);
                                }
                            })
                            
                            }
                            
                        })
                    })


                    ipcRenderer.send("abrirsobre");
                    buttonclicked = true
                }

            }
      //  }
        }

    })

    
/*
    var listaparent = productstock.parentNode.parentNode;
    console.log(listaparent);
    for(var i=0, len = listaparent.childElementCount; i < len; ++i){
  var child = listaparent.children[i];
  console.log(child);
  for(var b=0, lan = child.childElementCount; b < lan; ++b){
      console.log(child);
  console.log(child.firstChild);
  if(child.firstChild.classList.contains("nombre")){
      console.log("si");
      console.log(child.firstChild.value);
       valname = child.firstChild.value;
  } */
  buttonclicked = false;
})


//actualizar divs
elementss.forEach(ell =>{
    if(ell != null){
        nombresobre = document.querySelector("#nombresobre").innerHTML;
        mailsobre = document.querySelector("#mailsobre").innerHTML;
        telefonosobre = document.querySelector("#telefonosobre").innerHTML;
        domiciliosobre = document.querySelector("#domiciliosobre").innerHTML;
        documentodiv = document.querySelector("#documentosobre").innerHTML;
    }else{

    }
})
//

/*

    var amount = document.querySelectorAll(".number");
amount.forEach(element => {
    element.addEventListener('input', ()=> {
        const n = element.value;
        if ( n >= 1 && n <= 10000000 ) {
          element.value = element.value    
        } else {
            element.value = n.slice(0, -1)  
        }
      });
})*/




fs.readFile('C:/Users/Public/sobres.json', function (err, data) {
    var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    todoslossobres = json;
  })
var seleccion = document.querySelectorAll(".cliente");
var containersobres = document.querySelector("#containersobres");
todoslosclientes = seleccion;


seleccion.forEach((selec, index) =>{
selec.addEventListener('click', function(){
    var open = false;
    console.log(index);
   var username = selec.innerHTML.substr(0, selec.innerHTML.indexOf('-')); 
    objetos.forEach((element, elemindex) =>{
        var objeto = Object.entries(element)
        console.log(elemindex);
        console.log(element);
        element.forEach((element2, element2index)=>{
            console.log(element2index);
            console.log(element2);

        objeto.forEach((arr) =>{
            var nom = "";
            var mail = "";
            var tel = "";
            var dom = "";
            var doc = "";
            /*
            if(arr[1].nombre == username && arr[1])

            if(arr[1].nombre == username){
                       if(arr[1].nombre){
                        var val = arr[1].nombre + " ";
                        
                        nom += val;
                        }
                        if(arr[1].mail){
                            mail += arr[1].mail;
                            
                        }
                        if(arr[1].telefono){
                            tel += arr[1].telefono;
                        
                        }
                        if(arr[1].domicilio){
                            dom += arr[1].domicilio;
                        }
                        if(arr[1].documento){
                            doc += arr[1].documento;
                        } }*/
                        


        
        if(index == element2index ){
            var elementoss = document.querySelectorAll(".elementos");
            var sobresdelcliente = document.querySelectorAll(".sobrescliente");
            elementoss.forEach(borrar =>{
                borrar.remove();
            })
            sobresdelcliente.forEach(borrar =>{
                borrar.remove()
            })
            console.log(index);
            console.log(element2index);
            console.log(`${element2.nombre}   ${element2.telefono}     ${element2.mail}     ${element2.documento}      ${element2.domicilio}`)
        nom = element2.nombre;
        tel = element2.telefono;
        mail = element2.mail;
        doc = element2.documento;
        dom = element2.domicilio;
                var fichaseleccion = document.querySelector("#elementosficha");
                var nombrediv = document.createElement("div");
                var divmail = document.createElement("div");
                var domiciliodiv = document.createElement("div");
                var telefonodiv = document.createElement("div");
                var documentdiv = document.createElement("div");
                fichaseleccion.prepend(documentdiv);
                fichaseleccion.prepend(domiciliodiv);
                fichaseleccion.prepend(telefonodiv);
                fichaseleccion.prepend(divmail);
                fichaseleccion.prepend(nombrediv);
               // nombrediv.innerHTML = "Cliente:" + joinn;
                if(nom.trim() != "" || null){
                    nombrediv.innerHTML = "Cliente:" + nom;
                }else{
                    nombrediv.style = "display: none;"
                }
                console.log(nombrediv.innerHTML);
                if(mail.trim() != "" || null){
                    divmail.innerHTML = "Mail:" + mail;
                }else{
                    divmail.style = "display: none;"
                }
      //          divmail.innerHTML = "Mail:" + mail;
                if(dom.trim() != "" || null){
                    domiciliodiv.innerHTML = "Domicilio:" + dom;
                }else{
                    domiciliodiv.style = "display: none;"

                }
                if(tel.trim() != "" || null){
                    telefonodiv.innerHTML = `Tel: ${tel}`;
                }else{
                    telefonodiv.style = "display: none;"
                }
                if(doc.trim() != "" || null){
                    documentdiv.innerHTML = `Documento: ${doc}`;
                    documentdiv.style = "display: none;"
                }else{
                    documentdiv.style = "display: none;"
                }
                nombresobre = nom;
                mailsobre = mail;
                telefonosobre = tel;
                domiciliosobre = dom;
                documentodiv = doc;

             //   documentdiv.innerHTML = "Documento:" + doc;
                nombrediv.classList.add("elementos");
                nombrediv.id = "nombresobre";
                domiciliodiv.classList.add("elementos");
                domiciliodiv.id = "domiciliosobre";
                telefonodiv.classList.add("elementos");
                telefonodiv.id = "telefonosobre";
                divmail.classList.add("elementos");
                divmail.id = "mailsobre";
                documentdiv.classList.add("elementos");
                documentdiv.id = "documentosobre";
                
                todoslossobres.forEach(findcliente =>{
                    console.log(findcliente);
                    console.log(nom, tel);
                    console.log(findcliente.cliente, findcliente.tel);
                    console.log(findcliente.trabajonum);
                    if(findcliente.cliente == nom && findcliente.tel == tel){
                        console.log(findcliente.trabajonum);
                        var sobrecont = document.createElement("div");
                        containersobres.append(sobrecont);
                        var divsobre = document.createElement("div");
                        divsobre.innerHTML = `Trabajo numero ${findcliente.trabajonum}, ${findcliente.lente}`;
                        var buttonsobre = document.createElement("button");
                        buttonsobre.innerHTML = "Abrir"
                        sobrecont.append(divsobre);
                        sobrecont.append(buttonsobre);
                        sobrecont.classList.add("sobrescliente");
                        divsobre.classList.add("sobresclientediv");
                        buttonsobre.classList.add("sobresclientebutton");
                    }
                    

                })

            joinn = "";
            }
      })
    })
})
   })})




//search clientes
   $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".cliente").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
//

//search stock
$("#buscadorstock").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".descripciones").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
//


var listadeproductos = document.querySelectorAll(".listadeproductos");
var listadeclientes = document.querySelectorAll(".cliente")

//actualizar json de stock y clientes
function actualizarstock(){
    fs.readFile('C:/Users/Public/data1.json', 'utf-8',(error, data)=>{
        if(!error ){
            var json = JSON.parse(data);
            if(jsonlength < json.length || jsonlength > json.length){
            stock = []
            stock.push(json);
            jsonlength = json.length;
        }else{
        }
        }else{
            console.log(`error: ${error}`);
        }
    })     


    fs.readFile('C:/Users/Public/clientes.json', 'utf-8',(error, data)=>{
        if(!error ){

            var json = JSON.parse(data);
            if(jsonlengthclientes < json.length || jsonlengthclientes > json.length){
            objetos = []
            objetos.push(json);
            console.log(objetos);
            jsonlengthclientes = json.length;
            console.log("actualizado: " + jsonlengthclientes);
        }else{
        }
        }else{
            console.log(`error: ${error}`);
        }
    })     
    }
    //

    actualizarstock();
    
    //actualizar datos de stock y clientes en la app
    function actualizardatos(stt, clt){

        var productval
        var stockval
        var precioval
        var clientenam
        var clientetel
        var clientetel
        var clientedom
        //stock
stt.forEach(sttobj =>{
    var obj = Object.entries(sttobj);
    obj.forEach(arr =>{
        if(jsonlength > listadeproductos.length){
            listadeproductos.forEach(elementops =>{
                elementops.remove();
            })
        var obj2 = Object.entries(arr[1]);
        if(obj2[0][0] == "producto"){
            productval = obj2[0][1]
        }
        if(obj2[1][0] == "stock"){
         stockval = obj2[1][0];
         stockval = obj2[1][1];
        }
        if(obj2[2][0] == "precio"){
            precioval = obj2[2][1];

        }
  
   var listadodeproductos = document.querySelector("#listadodeproductos");
   var tr = document.createElement("tr");
   tr.classList.add("listadeproductos");
   listadodeproductos.append(tr);
   var nombre = document.createElement("th");
   var inputnombre = document.createElement("input");
   nombre.append(inputnombre);
   inputnombre.classList.add("nombre")
   inputnombre.value = productval;
   nombre.classList.add("descripciones");
   tr.append(nombre);
   var stock = document.createElement("th");
   tr.append(stock);
   stock.classList.add("descripciones");
   var inputstock = document.createElement("input");
   stock.append(inputstock);
   inputstock.classList.add("cantidad");
   inputstock.type = "text";
   inputstock.value = stockval;
   var precio = document.createElement("th");
   var precioinput = document.createElement("input");
   precio.append(precioinput);
   precio.classList.add("descripciones");

   precioinput.classList.add("number");
   precioinput.id = "precio";
   precioinput.value = "$" + precioval;
   tr.append(precio);
               
}else{

}
    })

})

//fichas de clientes
clt.forEach(cltobj =>{
    var obj = Object.entries(cltobj);
    console.log(listadeclientes.length);
    obj.forEach(arr =>{ 
        if(jsonlengthclientes > listadeclientes.length){
            listadeclientes.forEach(elementops =>{
                elementops.remove();
            })
            console.log("actualizado");
        var obj2 = Object.entries(arr[1]);
        console.log(obj2);
        console.log(obj2[0][0]);
        if(obj2[0][0] == "nombre"){
            clientenam = obj2[0][1]
        }
        if(obj2[1][0] == "mail"){
         clientemail = obj2[1][1];
        }
        if(obj2[2][0] == "telefono"){
            clientetel = obj2[2][1];

        }
        if(obj2[3][0] == "domicilio"){
            clientedom = obj2[3][1];

        }
        console.log(clientenam);
   console.log(clientetel);
   console.log(["actualizando objetos..."])
  
   var listadddeproductos = document.querySelector("#fichas");
   var nombre = document.createElement("div");
   nombre.classList.add("cliente");
  nombre.innerHTML =  clientenam + "- " + clientedom;
  listadddeproductos.append(nombre);
               
}else{

}
    })

})

    }
    //
    
    actualizardatos(stock, objetos);

    allproducts = document.querySelectorAll(".nombre");


    //editar nombre de stock
    $('.nombre').on('focus',function(){
       console.log(this.value + " esta focuseado");
       previousproductname = this.value;
       clicked = false;
       numero = 0;
    }).on('blur',function(){
           var product2name = this.value;
        if(product2name === previousproductname){
            if(numero < 1){
                numero = 1;
            }

        }else{
        if(numero < 1){
            console.log(this);
            productttname = this.value;
            console.log(productttname);

        console.log(this.value + " no esta focuseado");
            numero = 1;
            modalname.style = "display: block";
    } }})
     //


// editar numero de stock en stock

    $('.cantidad').on('focus',function(){
       console.log(this.value + " esta focuseado");
       previousstockvalue = this.value;
       clickedstock = false;
       numero = 0;
    }).on('blur',function(){
           var product2stock = this.value;
        if(product2stock === previousstockvalue){
            if(numero < 1){
                numero = 1;
            }

        }else{
        if(numero < 1){
            productstock = this;
            productstockvalue = this.value;
        console.log(this.value + " no esta focuseado");
            numero = 1;
            modalstock.style = "display: block";

  } }}) 
  //


        //editar precio stock

               $('.number').on('focus',function(){
                console.log(this.value + " esta focuseado");
                previousprice = this.value;
                clicked = false;
                numero = 0;
             }).on('blur',function(){
                    var product2price = this.value;
                 if(product2price === previousprice){
                     if(numero < 1){
                         numero = 1;
                     }
         
                 }else{

                 if(numero < 1){
                      productstockprice = this;
                 console.log(this.value + " no esta focuseado");
                     numero = 1;
                     modalprice.style = "display: block";

  } }           }
                    
                    ) 
                    //
     /*               var buttonss = document.querySelectorAll(".yearbutton");  
buttons.forEach(element =>{
    element.addEventListener('click', ()=>{
console.log(element.innerHTML)
    })
})*/

var buttonss = document.querySelectorAll(".yearbutton");  
var removestat = document.querySelectorAll(".selectedstatremove");

removestat.forEach(removestats =>{
removestats.addEventListener("click", ()=>{
var parent = removestats.parentNode
console.log(parent);
if(parent){
    parent.remove();
    if(parent.id == "statday"){
selectedday = null;

    }else if(parent.id == "statmonth"){
selectedmonth = null;
    }else if(parent.id == "statyear"){
selectedyear = null;
    }
}

})
})

function removeothers(){
    buttonss.forEach(searchall =>{
        if(searchall.classList.contains("selectedtest") && searchall.innerHTML != selectedyear){
            searchall.classList.remove("selectedtest");
        }
    })
}
buttonss.forEach(element =>{
    element.addEventListener('click', ()=>{
        var selectedstats = document.querySelectorAll(".selectedstat")
var selectedremove = document.querySelectorAll(".selectedstatremove")

removeothers();
element.classList.add("selectedtest")
console.log(element.innerHTML);
console.log(selectedyear);
selectedstats.forEach(select =>{
    var selectedstats = document.querySelector("#selectedstats")
    if(document.querySelector("#years").innerHTML == "Años"){
        if(select.id == "statyear"){
            console.log("years");
            selectedyear = element.innerHTML;
            select.innerHTML = `Año: ${element.innerHTML}   <button class="selectedstatremove">X</button>`;
            actualizarventanadeestadisticas();
        }
    }else if(document.querySelector("#years").innerHTML == "Meses"){
        if(select.id == "statmonth"){
            console.log("months");
            if(selectedmonth == null){
              
                var div = document.createElement("div");
                div.classList.add("selectedstat");
                div.id = "statmonth";
                var removebutton = document.createElement("button");
                removebutton.classList.add("selectedstatremove");
               selectedstats.append(div);
               div.append(removebutton);

            }
            selectedmonth = element.innerHTML;
            select.innerHTML = `Mes: ${element.innerHTML}   <button class="selectedstatremove">X</button>`;
            actualizarventanadeestadisticas();
        }
    }})
 })
})

 }, 300);

var using = false;




             changeproduct.addEventListener('click', ()=>{
                if(clicked == false){
                    clicked = true;
        fs.readFile('C:/Users/Public/data1.json', function (err, data) {
            var json = JSON.parse(data)
            var valoresunidos = JSON.stringify(json);
            console.log(valoresunidos);
            var val
            var objs = Object.entries(json);
                objs.forEach(elem =>{
                 var objs2 = Object.entries(elem[1]);
                 var producto =`{"${objs2[0][0]}":"${objs2[0][1]}","${objs2[1][0]}":${objs2[1][1]},"${objs2[2][0]}":${objs2[2][1]}}`;
        })                                 
                                          console.log(previousproductname);
                                          if(valoresunidos.includes(`${previousproductname}`)){
                                            val = valoresunidos.replace(`"${previousproductname}"`, `"${productttname}"`);

                                        }
 console.log(this.value);
        console.log(`previous name: ${previousproductname} actual name: ${productttname}`);
        fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
            if(error){
                console.log(`error: ${error}`);
            }else{
            }
        })
          })
        
        }    })
        cancelproduct.addEventListener('click', ()=>{
            if(clicked == false){
                clicked = true;
            console.log(previousproductname);
            var namesearch = document.querySelectorAll(".nombre");
            namesearch.forEach(namesearched => {
                if(namesearched.value == productttname){
                    namesearched.value = previousproductname;
                }
            })
            console.log(productttname = previousproductname);
    }})




var changestockvalue = document.querySelector(".changestockvalue");
var cancelstockvalue = document.querySelector(".cancelstockvalue")

changestockvalue.addEventListener('click', ()=>{
    if(clickedstock == false){
        clickedstock = true;

fs.readFile('C:/Users/Public/data1.json', function (err, data) {
    var cant
    var valname
    var prodprice
    var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    console.log(valoresunidos);
    var val
    var objs = Object.entries(json);
        objs.forEach(elem =>{
         var objs2 = Object.entries(elem[1]);
         var producto =`{"${objs2[0][0]}":"${objs2[0][1]}","${objs2[1][0]}":${objs2[1][1]},"${objs2[2][0]}":${objs2[2][1]}}`;
})                                 
                                  console.log(previousstockvalue);
                                  var listaparent = productstock.parentNode.parentNode;
                                  console.log(listaparent);
                                  for(var i=0, len = listaparent.childElementCount; i < len; ++i){
                                var child = listaparent.children[i];
                                console.log(child);
                                for(var b=0, lan = child.childElementCount; b < lan; ++b){
                                    console.log(child);
                                console.log(child.firstChild);
                                if(child.firstChild.classList.contains("nombre")){
                                    console.log("si");
                                    console.log(child.firstChild.value);
                                     valname = child.firstChild.value;
                                }
                                if(child.firstChild.classList.contains("cantidad")){
                                    console.log("si");
                                    console.log(child.firstChild.value);
                                    cant = child.firstChild.value;

                                }
                                 if(child.firstChild.classList.contains("number")){
                                     console.log("si");
                                     console.log(child.firstChild.value);
                                     prodprice = child.firstChild.value;
                                 }

                                        }
                                    }
                                    var sacarpeso = prodprice.split("$")[1];
                                    var vall = valoresunidos.replace(/},{/g, '} , {')
                                    var valoreninputs = `{"producto":"${valname}","stock":${cant},"precio":${sacarpeso}}`;
                                    var valorenjson = `{"producto":"${valname}","stock":${previousstockvalue},"precio":${sacarpeso}}`;
                                    console.log(valorenjson);
                                    
                                       if(valoresunidos.indexOf(`${valorenjson}`)){
                                            console.log(valorenjson);
                                            console.log(vall);
                                            val = vall.replace(`${valorenjson}`, `${valoreninputs}`);
                                            console.log(val);
                                            console.log(productstockvalue)
               

         console.log(`previous name: ${previousstockvalue} actual name: ${productstockvalue}`);
         fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
            if(error){
                 console.log(`error: ${error}`);
             }else{
             }
         })             }

  })

}    })
cancelstockvalue.addEventListener('click', ()=>{
    if(clickedstock == false){
        clickedstock = true;
    console.log(previousproductname);
    var stocksearch = document.querySelectorAll(".cantidad");
    stocksearch.forEach(stocksearched => {
        if(stocksearched.value == productstockvalue){
            stocksearched.value = previousstockvalue;
        }
    })
    console.log(productstock.value = previousstockvalue);
}})




//borrar elemento de stock
borrar.addEventListener('click', () =>{
    if(borrar.innerHTML == "Borrar"){
    allproducts.forEach(product =>{
        
product.classList.add("seleccion")
borrar.innerHTML ="Selecciona que borrar";
product.addEventListener('click', ()=>{
    if(product.classList.contains("seleccionado")){
        product.classList.remove("seleccionado");
    }else if(borrar.innerHTML == "Selecciona que borrar"){
    product.classList.add("seleccionado"); }
})
    })} else{
        allproducts.forEach(products =>{
            console.log(products);
            if(products.classList.contains("seleccionado")){
                console.log("removido")
                console.log(products.parentNode);
                fs.readFile('C:/Users/Public/data1.json', function (err, data) {
                    var json = JSON.parse(data)
                    var valoresunidos = JSON.stringify(json);
                    console.log(valoresunidos);

                    var objs = Object.entries(json);
                        objs.forEach(elem =>{
                         var objs2 = Object.entries(elem[1]);
                         var producto =`{"${objs2[0][0]}":"${objs2[0][1]}","${objs2[1][0]}":${objs2[1][1]},"${objs2[2][0]}":${objs2[2][1]}}`;
                  var productoreal = `{"producto":"armazon5","stock":100,"precio":10000}`
                  var val
                                                  console.log(producto);
                                                  console.log(productoreal);
                                                  if(valoresunidos.includes(`,${producto}`)){
                                                    val = valoresunidos.replace(`,${producto}`, "");
                                                  }else if(valoresunidos.includes(`${producto},`)){
                                                    val = valoresunidos.replace(`${producto},`, "");
                                                  }else{
                                                    val = valoresunidos.replace(`${producto}`, "");
                                                  }
                console.log(val);
                producto = ""
                fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
                    if(error){
                        console.log(`error: ${error}`);
                    }else{
                    }
                })
                })
           var intervalo = setInterval(() => {
                    console.log("eliminado");
                products.parentNode.remove();
                clearInterval(intervalo);
            }, 1000);
                        })

            }
            products.classList.remove("seleccionado");
            borrar.innerHTML ="Borrar";

                })
    }
})














var changepricestock = document.querySelector(".changepricevalue");
var cancelpricestock = document.querySelector(".cancelpricevalue");

changepricestock.addEventListener('click', ()=>{
    if(clickedprice == false){
        clickedprice = true;


                 fs.readFile('C:/Users/Public/data1.json', function (err, data) {
                    var cant
                    var valname
                    var prodprice
                     var json = JSON.parse(data)
                     var valoresunidos = JSON.stringify(json);
                     console.log(valoresunidos);
                     var val
                     var objs = Object.entries(json);
                         objs.forEach(elem =>{
                          var objs2 = Object.entries(elem[1]);
                          var producto =`{"${objs2[0][0]}":"${objs2[0][1]}","${objs2[1][0]}":${objs2[1][1]},"${objs2[2][0]}":${objs2[2][1]}}`;
                 })                                 
                                                   console.log(previousprice);
                                                   var listaparent = productstockprice.parentNode.parentNode;
                                                   console.log(listaparent);
                                                   for(var i=0, len = listaparent.childElementCount; i < len; ++i){
                                                 var child = listaparent.children[i];
                                                 console.log(child);
                                                 for(var b=0, lan = child.childElementCount; b < lan; ++b){
                                                     console.log(child);
                                                 console.log(child.firstChild);
                                                 if(child.firstChild.classList.contains("nombre")){
                                                    console.log("si");
                                                    console.log(child.firstChild.value);
                                                     valname = child.firstChild.value;
                                                }
                                                if(child.firstChild.classList.contains("cantidad")){
                                                    console.log("si");
                                                    console.log(child.firstChild.value);
                                                    cant = child.firstChild.value;

                                                }
                                                 if(child.firstChild.classList.contains("number")){
                                                     console.log("si");
                                                     console.log(child.firstChild.value);
                                                     prodprice = child.firstChild.value;
                                                 }
                                                         }
                                                     }
                                                     var sacarpeso = previousprice.split('$')[1];
                                                     var vall = valoresunidos.replace(/},{/g, '} , {')
                                                     console.log(vall);
                                                    var valoreninputs = `{"producto":"${valname}","stock":${cant},"precio":${prodprice}}`;
                                                     var valorenjson = `{"producto":"${valname}","stock":${cant},"precio":${sacarpeso}}`;

                                                     console.log(valorenjson);
                                                  if(valoresunidos.indexOf(`${valorenjson}`)){
                                                    console.log(valorenjson);
                                                    console.log(productstockprice.value);
                                                    val = vall.replace(`${valorenjson}`, `${valoreninputs}`);
                                                    console.log(val);
                               


                 console.log(`previous name: ${previousprice} actual name: ${productstockprice.value}`);
                 fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
                     if(error){
                         console.log(`error: ${error}`);
                     }else{
                     }
                 })             }
    
                 productstockprice.value = `$${productstockprice.value}`; 
                
                   })
                }
                })
                cancelpricestock.addEventListener('click', ()=>{
if(clickedprice == false){
    clickedprice = true;


  
                     console.log(previousprice);
                     var pricesearch = document.querySelectorAll(".number");
                     pricesearch.forEach(pricesearched => {
                         if(pricesearched.value == productprice.value){
                            pricesearched.value = "$" + previousprice;
                         }
                     })
                     console.log(productprice.value = previousprice);
                    }   })













//
















//crear bases de datos
fs.readdir('C:/Users/Public', (error, archivos)=>{
        if(archivos.includes("data1.json")){
        console.log("El archivo esta ");
        }else{
            console.log("creando archivo...");
                        fs.writeFile( 'C:/Users/Public/data1.json', '[]', (error) => {
                if(error){
                    console.log(`error: ${error}`);
                }
            })
        }
        if(archivos.includes("clientes.json")){
            console.log("El archivo esta ");
            }else{
                console.log("creando archivo...");
                            fs.writeFile( 'C:/Users/Public/clientes.json', '[]', (error) => {
                    if(error){
                        console.log(`error: ${error}`);
                    }
                })
            }

            if(archivos.includes("sobres.json")){
                console.log("El archivo esta ");
                }else{
                    console.log("creando archivo...");
                                fs.writeFile( 'C:/Users/Public/sobres.json', '[]', (error) => {
                        if(error){
                            console.log(`error: ${error}`);
                        }
                    })
                }
                if(archivos.includes("estadisticas.json")){
                    console.log("El archivo esta ");
                    }else{
                        console.log("creando archivo...");
                                    fs.writeFile( 'C:/Users/Public/estadisticas.json', '[]', (error) => {
                            if(error){
                                console.log(`error: ${error}`);
                            }
                        })
                    }

})
//


// add stock
agregar.addEventListener('click', ()=>{
    if(productname.value != "" && stock.value != "" && productprice.value != ""){
console.log("ingresando dato...");
    fs.readFile('C:/Users/Public/data1.json', function (err, data) {

        var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    var lastIndex = valoresunidos.lastIndexOf("]");
    valoresunidos = valoresunidos.substring(0, lastIndex);
   if(json.length == 0){
    valoresunidos += `{"producto": "${productname.value}", "stock": ${stockvalue.value}, "precio": ${productprice.value}} ]`
    
   }else{

    valoresunidos += `,{"producto": "${productname.value}", "stock": ${stockvalue.value}, "precio": ${productprice.value}} ]`

}
productname.value = "";
stockvalue.value = "";
productprice.value = "";
    fs.writeFile( 'C:/Users/Public/data1.json', valoresunidos, (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
    })

}else{
    console.log("no pusiste ningun valor");
}
})
//

//add user
addcliente.addEventListener('click', ()=>{
    if(clientename.value != "" && (clientemail.value != "" || clientetelefono.value != "" || clientedomicilio.value != "" || clientedocumento.value != "")){
console.log("ingresando dato...");
    fs.readFile('C:/Users/Public/clientes.json', function (err, data) {

        var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    var lastIndex = valoresunidos.lastIndexOf("]");
    valoresunidos = valoresunidos.substring(0, lastIndex);
   if(json.length == 0){
    valoresunidos += `{"nombre": "${clientename.value}", "mail": "${clientemail.value}", "telefono": "${clientetelefono.value}", "domicilio": "${clientedomicilio.value}", "documento": "${clientedocumento.value}"} ]`
    
   }else{

    valoresunidos += `,{"nombre": "${clientename.value}", "mail": "${clientemail.value}", "telefono": "${clientetelefono.value}", "domicilio": "${clientedomicilio.value}", "documento": "${clientedocumento.value}"} ]`
}
console.log("ingresando cliente");
clientename.value = "";
clientemail.value = "";
clientetelefono.value = "";
clientedomicilio.value = "";
clientedocumento.value = "";
    fs.writeFile( 'C:/Users/Public/clientes.json', valoresunidos, (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
    })
}else{

}

})
//

//Estadisticas
var selectionbutton = document.querySelector("#arrowbutton");
var selectionbutton2 = document.querySelector(".arrow");
var selected = "years";
var open = false;
var monthsoryears = document.querySelector("#monthsoryears");
var selectedyear
var selectedmonth
var selectedday
var monthsarray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var actualdate = new Date();
var actualday = actualdate.getDate();
var actualyear = actualdate.getFullYear();
var actualmonth = actualdate.getMonth()
selectedday = "29";
selectedyear = 2022;
selectedmonth = "Febrero"// monthsarray[actualmonth];
console.log( selectedday, selectedyear, selectedmonth)




function getselecteddates(){
    var getbuttons = document.querySelectorAll(".yearbutton");
    getbuttons.forEach(element => {
        if(element.classList.contains("monthbutton")){

        }else{
            if(element.innerHTML == selectedyear){
                element.classList.add("selectedtest")
            }
        }
    })
}

function getselected(){
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var getallbuttons = document.querySelectorAll(".yearbutton");
if(selected == "years"){
getallbuttons.forEach(elem =>{
    elem.remove();
})
for(i = 1; i < 25; i++){

var newbutton = document.createElement("button");
monthsoryears.append(newbutton)
newbutton.classList.add("yearbutton")
newbutton.innerHTML = year;
year = year + 1;    
}
} else if(selected == "months"){
    getallbuttons.forEach(elem =>{
        elem.remove();
    })
    for(i = 0; i < monthsarray.length; i++){
    
    var newbutton = document.createElement("button");
    monthsoryears.append(newbutton)
    newbutton.classList.add("yearbutton");
    newbutton.classList.add("monthbutton");
    newbutton.innerHTML = monthsarray[i];    
    }
}
getselecteddates()

}
getselected()





var submenudiv = document.querySelector(".submenu");

function displaymenu(){
if(open == true){
submenudiv.style = "display: inline;"
}else{
    submenudiv.style = "display: none;"
}
}
selectionbutton.addEventListener('click', (e) =>{
var clickedelem = e.target;
if(open == false){
    open = true;
clickedelem.classList.add("active");
    }else{
        open = false;
        clickedelem.classList.remove("active");
    }
    //displaymenu()

})

selectionbutton2.addEventListener('click', (e) =>{

        displaymenu()
    
    })
var buttons = document.querySelectorAll(".yearbutton");     
buttons.forEach(buttonelem =>{
    buttonelem.addEventListener('click', function(){
    if(selected == "years"){
        console.log(buttonelem.innerHTML);
    }else if(selected == "months"){

    }
})


})
var arrow = document.querySelector("#arrowbutton");
var submenudiv = document.querySelector(".submenu");
var arrowtext = document.querySelector("#years");
submenudiv.addEventListener('click', (e)=>{
var clickedelement = e.target;
var arrowhtml = arrowtext.innerHTML;
var submenuhtml = clickedelement.innerHTML.trim();

console.log(clickedelement.innerHTML);
//var string = arrow.innerHTML.substring(0, arrow.innerHTML.indexOf('<')).trim();
//var string2 = arrow.innerHTML.substring( arrow.innerHTML.indexOf('<')).trim();
console.log(submenuhtml);
console.log(arrowtext.innerHTML);   

arrowtext.innerHTML =  submenuhtml; //`${submenuhtml} ${string2}`;
submenudiv.innerHTML = arrowhtml;
selected == submenuhtml
console.log(submenuhtml);
if(submenuhtml == "Años"){
    selected = "years";
    console.log(selected);
}else{
    selected = "months"
    console.log(selected);
}

getselected()



/*
console.log(arrowtext.innerHTML);
console.log(arrowtext.innerText);
console.log(submenuhtml);
submenudiv.innerHTML = arrowtext.innerHTML;
console.log(arrowtext.innerHTML);
arrowtext.innerHTML = submenuhtml;
*/
//var afterstring = arrow.innerHTML.substring(arrow.innerHTML.indexOf('<'));

})

console.log(estadisticasjson)

function actualizarventanadeestadisticas(){
    var todoslosproductos = document.querySelectorAll(".listadeproductosestadisticas");
todoslosproductos.forEach(prod =>{
    prod.remove();
})
console.log("working");
estadisticasjson.forEach(element =>{
    var getyearstring = selectedyear.toString()
    var object = Object.entries(element)
 var funcyear = object[0][0];
 console.log(getyearstring);
 console.log(funcyear);
 if(funcyear == getyearstring){
    console.log("working2");
    console.log(funcyear);
    console.log(object[0][0])
 //   console.log(object[0][1]);

var object2 = Object.entries(object[0][1]);
console.log(object2);
object2.forEach(month =>{
    console.log(month);
  if(month[0] == selectedmonth && selectedday != null){
console.log(month[0]);
var days = Object.entries(month[1])

days.forEach(getday =>{
console.log(getday);
var listadodeproductosestadisticas = document.querySelector("#listadodeproductosestadisticas");


var getdayelements = Object.entries(getday[1]);
getdayelements.forEach(dayelement =>{
    console.log(dayelement);
    console.log(dayelement.Nombre);
    var newelement = document.createElement("tr");
    newelement.classList.add("listadeproductosestadisticas");
    listadodeproductosestadisticas.append(newelement);
var nombre = document.createElement("th");
var precio = document.createElement("th");
var fecha = document.createElement("th");


var inputnombre = document.createElement("input");
inputnombre.classList.add("nombre")
inputnombre.setAttribute("disabled", "")
inputnombre.value = dayelement[1].Nombre
nombre.append(inputnombre);
newelement.append(nombre);

var inputprecio = document.createElement("input");
inputprecio.classList.add("number")
inputprecio.id = "precioestadisticas";
inputprecio.setAttribute("disabled", "")
inputprecio.value = `$${dayelement[1].Precio}`
precio.append(inputprecio);
newelement.append(precio);


var inputhora = document.createElement("input");
inputhora.classList.add("number")
inputhora.id = "precioestadisticas";
inputhora.setAttribute("disabled", "")
var getmonthindexinarray = monthsarray.indexOf(month[0]) + 1;
console.log(getmonthindexinarray)
inputhora.value = `${getday[0]}/${getmonthindexinarray}/${selectedyear} ${dayelement[1].Hora}`
fecha.append(inputhora);
newelement.append(fecha);


nombre.classList.add("descripciones");
precio.classList.add("descripciones");
fecha.classList.add("descripciones");
})
})

  }else{
  }
})

 }

/*var funcyear = element[getyearstring];
console.log(funcyear);
console.log(element)
console.log(funcyear[selectedmonth]);
if(funcyear[selectedmonth]){
console.log("Found")
}else{
    console.log("not found")
    var jsonstring = JSON.stringify(estadisticasjson);
    console.log(jsonstring.search("2023"));
    console.log(jsonstring.indexOf("2023"))
    
    
    console.log(jsonstring);
}
if(funcyear[selectedmonth]){
    if(fundmonth[selectedday]){
        console.log("found")
    }        else{
        console.log("Not found")
    }
}
console.log(funcyear);
//console.log(funcmonth);
//console.log(funcday);

/*
var objeto = Object.entries(funcday)
objeto.forEach(getallelements =>{
    console.log(getallelements);
    var data = (getallelements[1]);
    console.log(data.Precio);
    console.log(data.Nombre);
}) */

})
}

actualizarventanadeestadisticas(selectedyear, selectedmonth, selectedday)
console.log(objetos);

});