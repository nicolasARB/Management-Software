const { json } = require('express');
const { join } = require('path');

window.addEventListener('load', function(){
    var joinn = " "

var objetos = [

    
]

var stock = [

]

var sobres = {

}

//variables json
var previouselement = document.querySelector("#productname");
var productname  
var stockvalue 
var productprice 
var clientename
var clientemail
var clientetelefono
var clientedomicilio
var clientedocumento

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
var nava = document.querySelectorAll("a");
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
} else if(nab.innerHTML == "Clientes"){
    content.style = "display: flex;";
    contenidostock.style = "display: none;";
    contenidostockfooter.style = "display: none;";
    buscadorstock.style = "display: none;";
    estadisticas.style = "display: none;"
}else if(nab.innerHTML == "Estadisticas"){
    content.style = "display: none;";
    contenidostock.style = "display: none;";
    contenidostockfooter.style = "display: none;";
    buscadorstock.style = "display: none;";
    estadisticas.style = "display: inline;"

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


seleccion.forEach(selec =>{
selec.addEventListener('click', function(){

   var username = selec.innerHTML.substr(0, selec.innerHTML.indexOf('-')); 
   console.log(username);
    objetos.forEach(element =>{
        var objeto = Object.entries(element)
        console.log(objeto);
        objeto.forEach(arr =>{
            var mail = ""
            var tel = ""
            var dom = ""
            var doc = ""
            if(arr[1].nombre == username){
                       if(arr[1].nombre){
                        var val = arr[1].nombre + " ";
                        
                        joinn += val; 
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
                        }
                        
                var elementoss = document.querySelectorAll(".elementos");
                var sobresdelcliente = document.querySelectorAll(".sobrescliente");

        elementoss.forEach(borrar =>{
            borrar.remove();
        })
        sobresdelcliente.forEach(borrar =>{
            borrar.remove()
        })
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
                if(joinn.trim() != "" || null){
                    nombrediv.innerHTML = "Cliente:" + joinn;
                }else{
                    nombrediv.style = "display: none;"
                }
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
                nombresobre = joinn;
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
                    var documentoastring = doc.toString()
                    if(findcliente.documento == documentoastring){
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
               
               

 }, 300);






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

});