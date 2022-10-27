const { Console } = require('console');
const { captureRejectionSymbol } = require('events');
const e = require('express');
const { json } = require('express');
const { clearInterval } = require('timers');

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
 
 var container = document.querySelector("#fichas");
 
var actualizarficha = document.createElement("div")
/*
container.append(actualizarficha);
actualizarficha.classList.add("cliente"); */
})

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
function actualizar(objetonuevo){
    var clientes = document.querySelectorAll(".cliente");
var entries = Object.entries(objetonuevo);


entries.forEach(element =>{
        if(element[0] == "numero"){
        var val = "Cliente " + element[1] + " -"; 
        joinn +=val;
        console.log(joinn);
        }else if(element[0] == "nombre"){
        var val = element[1] + " ";
        joinn += val; 
        }else if(element[0] == "apellido"){
            var val = element[1] + "";
            joinn += val; 
        console.log(joinn);
        }
            
})
        console.log(objetonuevo);
        console.log(entries[0]);
         var container = document.querySelector("#fichas");
        var actualizarficha = document.createElement("div")
        objetos.push(objetonuevo);
        console.log(objetos);
        container.append(actualizarficha);
        actualizarficha.classList.add("cliente");
        actualizarficha.innerHTML = joinn;
        joinn = ""
        seleccion = document.querySelectorAll(".cliente");
        
    

}
const {ipcRenderer} = require('electron');

ipcRenderer.on('newFicha', (e, newFicha) => {
    console.log(newFicha)
    var nuevoobjeto = {};
    for(i = 0; i < objetos.length; i++){
        if(i = objetos.length){
            i++;
         newFicha["numero"] = i;
         var entries = Object.entries(newFicha);
         console.log("El numero donde esta numero es: " + entries.indexOf("numero"));
         entries.forEach(function(elemento, pos) {
            console.log(elemento)
            if(elemento[0] == "numero"){
                console.log("Numero es: " + elemento[1]); 
                console.log(elemento);
            
              nuevoobjeto[elemento[0]] = elemento[1];
              console.log(nuevoobjeto);
              delete entries[pos];
              console.log(entries);
              entries.forEach(nuevo =>{
              nuevoobjeto[nuevo[0]] = nuevo[1];
              })
              console.log(nuevoobjeto);
              actualizar(nuevoobjeto);
            }
         })

        }
    }

});
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
buttoncerca.addEventListener("click", e =>{
if(abrirsobreclicked == true){
    abrirsobreclicked = false;
    nombresobre = document.querySelector("#nombresobre").innerHTML;
    mailsobre = document.querySelector("#mailsobre").innerHTML;
    telefonosobre = document.querySelector("#telefonosobre").innerHTML;
    domiciliosobre = document.querySelector("#domiciliosobre").innerHTML;
    documentodiv = document.querySelector("#documentosobre").innerHTML;
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
        nombresobre = document.querySelector("#nombresobre").innerHTML;
        mailsobre = document.querySelector("#mailsobre").innerHTML;
        telefonosobre = document.querySelector("#telefonosobre").innerHTML;
        domiciliosobre = document.querySelector("#domiciliosobre").innerHTML;
        documentodiv = document.querySelector("#documentosobre").innerHTML;
        fs.writeFile( 'C:/Users/Public/senddatasobre.json', `{"nombre": "${nombresobre}", "mail": "${mailsobre}", "telefono": "${telefonosobre}", "domicilio": "${domiciliosobre}", "documento": "${documentodiv}", "lente": "cerca"}`, (error) => {
            if(error){
                console.log(`error: ${error}`);
            }
        })
            ipcRenderer.send("abrirsobre");
    }
    })
/*
if(abrirsobreclicked == true){
    if
}*/

var content = document.querySelector("#contenido");
var navbara = document.querySelectorAll(".botonav");
var contenidostock = document.querySelector("#contenidostock");
var contenidostockfooter = document.querySelector("#agregarproductos");
navbara.forEach(nab =>{
    console.log(nab);
    nab.addEventListener('click', function(){
if(nab.innerHTML == "Stock"){
    content.style = "display: none";
    contenidostock.style = "display: flex;";
    contenidostockfooter.style = "display: inline;";
} else if(nab.innerHTML == "Clientes"){
    content.style = "display: flex;";
    contenidostock.style = "display: none;";
    contenidostockfooter.style = "display: none;";
}
    })
})

var jsonlength = 0;
var jsonlengthclientes = 0;
var numero = 0;
var modal = document.querySelector('.modal');
var clicked = false;
setInterval(() => {

productname = document.querySelector("#productname");
stockvalue = document.querySelector("#stockvalue");
productprice = document.querySelector("#precioadd");
clientename = document.querySelector("#username");
clientemail = document.querySelector("#usermail");
clientetelefono = document.querySelector("#userphone");
clientedomicilio = document.querySelector("#userhome");
clientedocumento = document.querySelector("#userdocument");
var elementss = document.querySelectorAll(".elementos")
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

var seleccion = document.querySelectorAll(".cliente");
seleccion.forEach(selec =>{
selec.addEventListener('click', function(){
  //  var numerito = this.innerHTML.substring(8, 10);
   // numerito = numerito.trim();
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
                        console.log(arr[1].nombre);
                        joinn += val; 
                        }
                        if(arr[1].mail){
                            mail += arr[1].mail;
                            console.log("mail" + mail);
                        }
                        if(arr[1].telefono){
                            tel += arr[1].telefono;
                            console.log("tel" + mail);
                        }
                        if(arr[1].domicilio){
                            dom += arr[1].domicilio;
                            console.log("dom" + mail);
                        }
                        if(arr[1].documento){
                            console.log(arr[1].documento);
                            doc += arr[1].documento;
                            console.log("doc" + doc);
                        }
                        
                var elementoss = document.querySelectorAll(".elementos");

        elementoss.forEach(borrar =>{
            borrar.remove();
            console.log(borrar);
        })
                var fichaseleccion = document.querySelector("#elementosficha");
                var nombrediv = document.createElement("div");
                var divmail = document.createElement("div");
                var domiciliodiv = document.createElement("div");
                var telefonodiv = document.createElement("div");
                var documentdiv = document.createElement("div");
                fichaseleccion.prepend(documentdiv);
                console.log("documento: " + doc);
                fichaseleccion.prepend(domiciliodiv);
                fichaseleccion.prepend(telefonodiv);
                fichaseleccion.prepend(divmail);
                fichaseleccion.prepend(nombrediv);
                nombrediv.innerHTML = joinn;
                console.log(mail);
                divmail.innerHTML = mail;
                domiciliodiv.innerHTML = dom;
                telefonodiv.innerHTML = tel;
                documentdiv.innerHTML = doc;
                console.log("si");
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
            joinn = "";
            }
       })
})
   })})

   $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".cliente").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
$("#buscadorstock").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".descripciones").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

// detect length
var listadoproductos = document.querySelector("#listadodeproductos");
var listadeproductos = document.querySelectorAll(".listadeproductos");
var listadoclientes = document.querySelector("#fichas");
var listadeclientes = document.querySelectorAll(".cliente")
var screenwidth = screen.width;

/*
if(screenwidth > 1367){
if(listadeproductos.length >= 40){
    listadoproductos.style = "top: 15%;"
} else if(listadeproductos.length > 35 && listadeproductos.length <= 40){
    if(listadeproductos.length == 39){
    listadoproductos.style = "top: 11.8%;"
    }else if(listadeproductos.length == 38){
    listadoproductos.style = "display: flex; justify-content: center; flex-direction: column; overflow-y: auto; position: absolute; top: 10.5%;"   
} else if(listadeproductos.length == 37){
    listadoproductos.style = "top: 8.5%;"   
}else if(listadeproductos.length == 36){
    listadoproductos.style = "top: 7.1%;"   
} 
}else{
    listadoproductos.style = "display: flex; justify-content: center; flex-direction: column; overflow-y: auto; position: absolute; top: 7%;"
} }else if(screenwidth > 900 && screenwidth <=1366){
    if(listadeproductos.length >= 40){
        listadoproductos.style = "position: absolute; top: 17%; overflow-y: scroll; display: block;"
    } else if(listadeproductos.length > 35 && listadeproductos.length <= 40){
        console.log( + listadeproductos.length)
        if(listadeproductos.length == 39){
        listadoproductos.style = "top: 11%;"
        }else if(listadeproductos.length == 38){
        listadoproductos.style = "display: flex; justify-content: center; flex-direction: column; overflow-y: auto; position: absolute; top: 10.5%;"   
    } else if(listadeproductos.length == 37){
        listadoproductos.style = "top: 8.5%;"   
    }else if(listadeproductos.length == 36){
        listadoproductos.style = "top: 7.1%;"   
    } }
} */
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
    actualizarstock();

    function actualizardatos(stt, clt){

        var productval
        var stockval
        var precioval
        var clientenam
        var clientetel
        var clientetel
        var clientedom
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
    actualizardatos(stock, objetos);

    allproducts = document.querySelectorAll(".nombre");

var previousproductname
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
            var productttname = this.value;
            var changeproduct = document.querySelector('.deletebtn');
            var cancelproduct = document.querySelector('.cancelbtn');
        console.log(this.value + " no esta focuseado");
            numero = 1;
            modal.style = "display: block";
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
    }})    } }})


        var previousstockvalue
    $('.cantidad').on('focus',function(){
       console.log(this.value + " esta focuseado");
       previousstockvalue = this.value;
       clicked = false;
       numero = 0;
    }).on('blur',function(){
           var product2stock = this.value;
        if(product2stock === previousstockvalue){
            if(numero < 1){
                numero = 1;
            }

        }else{
        if(numero < 1){
            var productstock = this;
            var changeproduct = document.querySelector('.deletebtnstock');
            var cancelproduct = document.querySelector('.cancelbtnstock');
        console.log(this.value + " no esta focuseado");
        modal.style = "display: block";

        changeproduct.addEventListener('click', ()=>{
            if(clicked == false){
                clicked = true;
        
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
                                            var vall = valoresunidos.replace(/},{/g, '} , {')
                                            var valoreninputs = `{"producto":"${valname}","stock":${cant},"precio":${prodprice}}`;
                                            var valorenjson = `{"producto":"${valname}","stock":${previousstockvalue},"precio":${prodprice}}`;
                                            console.log(valorenjson);
                                               if(valoresunidos.indexOf(`${valorenjson}`)){
                                                    console.log(valorenjson);
                                                    val = vall.replace(`${valorenjson}`, `${valoreninputs}`);
                                                    console.log(val);


         //        console.log(`previous name: ${previousprice} actual name: ${productprice.value}`);
                 fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
                     if(error){
                         console.log(`error: ${error}`);
                     }else{
                     }
                 })             }

          })
        
        }    })
        cancelproduct.addEventListener('click', ()=>{
            if(clicked == false){
                clicked = true;
            console.log(previousproductname);
            var stocksearch = document.querySelectorAll(".cantidad");
            stocksearch.forEach(stocksearched => {
                if(stocksearched.value == productstock.value){
                    stocksearched.value = previousstockvalue;
                }
            })
            console.log(productstock.value = previousstockvalue);
  }})  } }})

        
        var previousprice
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
                     var productprice = this;
                     var changeproduct = document.querySelector('.deletebtn');
                     var cancelproduct = document.querySelector('.cancelbtn');
                 console.log(this.value + " no esta focuseado");
                     numero = 1;
                     modal.style = "display: block";

changeproduct.addEventListener('click', ()=>{
    if(clicked == false){
        clicked = true;


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
                                                   var listaparent = productprice.parentNode.parentNode;
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
                                                    console.log(productprice.value);
                                                    val = vall.replace(`${valorenjson}`, `${valoreninputs}`);
                                                    console.log(val);
                               


                 console.log(`previous name: ${previousprice} actual name: ${productprice.value}`);
                 fs.writeFile( 'C:/Users/Public/data1.json', val, (error) => {
                     if(error){
                         console.log(`error: ${error}`);
                     }else{
                     }
                 })             }
    
                 productprice.value = "$" + productprice.value; 
                
                   })
                }
                })
                cancelproduct.addEventListener('click', ()=>{
if(clicked == false){
    clicked = true;


  
                     console.log(previousprice);
                     var pricesearch = document.querySelectorAll(".number");
                     pricesearch.forEach(pricesearched => {
                         if(pricesearched.value == productprice.value){
                            pricesearched.value = "$" + previousprice;
                         }
                     })
                     console.log(productprice.value = previousprice);
                    }   })  } }           }) 
               
               

 }, 300);




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
})




agregar.addEventListener('click', ()=>{
    if(productname.value != "" && stock.value != "" && productprice.value != ""){
console.log("ingresando dato...");
    fs.readFile('C:/Users/Public/data1.json', function (err, data) {

        var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    var lastIndex = valoresunidos.lastIndexOf("]");
    valoresunidos = valoresunidos.substring(0, lastIndex);
   // console.log(valoresunidos);
   if(json.length == 0){
    valoresunidos += `{"producto": "${productname.value}", "stock": ${stockvalue.value}, "precio": ${productprice.value}} ]`
    
   }else{

    valoresunidos += `,{"producto": "${productname.value}", "stock": ${stockvalue.value}, "precio": ${productprice.value}} ]`

}
productname.value = "";
stockvalue.value = "";
productprice.value = "";
    //console.log(valoresunidos);
    fs.writeFile( 'C:/Users/Public/data1.json', valoresunidos, (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
    })
    /*
fs.appendFile('C:/Users/USUARIO/Documents/data1.json', valoresunidos, (error) =>{
    if(!error){
        console.log("Contenido agregado");

    }else{
        console.log(`Error: ${error}`);
    }
} ) */
}else{
    console.log("no pusiste ningun valor");
}
})

addcliente.addEventListener('click', ()=>{
    if(clientename.value != "" && clientemail.value != "" && clientetelefono.value != "" && clientedomicilio.value != "" && clientedocumento.value != ""){
console.log("ingresando dato...");
    fs.readFile('C:/Users/Public/clientes.json', function (err, data) {

        var json = JSON.parse(data)
    var valoresunidos = JSON.stringify(json);
    var lastIndex = valoresunidos.lastIndexOf("]");
    valoresunidos = valoresunidos.substring(0, lastIndex);
   // console.log(valoresunidos);
   if(json.length == 0){
    valoresunidos += `{"nombre": "${clientename.value}", "mail": "${clientemail.value}", "telefono": ${clientetelefono.value}, "domicilio": "${clientedomicilio.value}", "documento": ${clientedocumento.value}} ]`
    
   }else{

    valoresunidos += `,{"nombre": "${clientename.value}", "mail": "${clientemail.value}", "telefono": ${clientetelefono.value}, "domicilio": "${clientedomicilio.value}", "documento": ${clientedocumento.value}} ]`
}
console.log("ingresando cliente");
clientename.value = "";
clientemail.value = "";
clientetelefono.value = "";
clientedomicilio.value = "";
clientedocumento.value = "";
    //console.log(valoresunidos);
    fs.writeFile( 'C:/Users/Public/clientes.json', valoresunidos, (error) => {
        if(error){
            console.log(`error: ${error}`);
        }
    })
    })
    /*
fs.appendFile('C:/Users/USUARIO/Documents/data1.json', valoresunidos, (error) =>{
    if(!error){
        console.log("Contenido agregado");

    }else{
        console.log(`Error: ${error}`);
    }
} ) */
}else{
    console.log("no pusiste ningun valor");
}


})















/*
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./main");
const db = 'mongodb+srv://opticarisley:risleyoptica4856@cluster0.5p2ypqv.mongodb.net/?retryWrites=true&w=majority';


const app = express();
const port = process.env.port || 9000;;

// middlewares
app.use(express.json());




// routes
app.get('/', (req, res) => {
    res.send("Bienvenido a mi api");

})
const userSchema = require('../models/user');

router.get('/api/users', (req, res) => {
    //res.send('create user');
    userSchema
    .find()
    .then((data) => console.log(res.json(data)))
    .catch((error) => res.json({message: error}));
    
    });

// mongodb connection
mongoose.connect(db)
.then(() => console.log("Conectado a mongodb atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listo en puerto ', port)); */


// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

});