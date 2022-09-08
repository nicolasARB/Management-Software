$( document ).ready(function() {
    var nombreenelsobre = document.querySelector("#nombresobre");
var mailenelsobre = document.querySelector("#mailsobre");
var telefonoenelsobre = document.querySelector("#telefonosobre");
var domicilioenelsobre = document.querySelector("#domiciliosobre");
var documentoenelsobre = document.querySelector("#documentosobre");
var username
var usermail
var userphone
var userhome
var userdocument
    var fs = require('fs');
    fs.readFile('C:/Users/Public/senddatasobre.json', function (err, data) {
        var json = JSON.parse(data)
        username = json.nombre;
        usermail = json.mail;
        userphone = json.telefono;
        userhome = json.domicilio;
        userdocument = json.documento;
        nombreenelsobre.innerHTML = "Cliente: " +  username;
        mailenelsobre.innerHTML = "Mail: " + usermail;
        telefonoenelsobre.innerHTML = "Telefono: " + userphone;
        domicilioenelsobre.innerHTML = "Domicilio:" + userhome;
        documentoenelsobre.innerHTML = "Documento:" + userdocument;
        
   // console.log(valoresunidos);
    })


nombreenelsobre.innerHTML = username;
mailenelsobre.innerHTML = usermail;
telefonoenelsobre.innerHTML = userphone;
domicilioenelsobre.innerHTML = userhome;
   var armazones = [{
    nombre: "Circular1",
    precio: 3500

   }, {
    nombre: "Cuadrado1",
    precio: 5000
   }, {
    nombre: "Armazon1",
    precio: 10000
   }, {
    nombre: "Armazon2",
    precio: 3000
   }]
var fechadiv = $("#fecha");
var fechahoy = new Date();
var año = fechahoy.getFullYear();
var mes = fechahoy.getMonth() + 1;
var dia = fechahoy.getDate();
var yearandmonth = dia + "/" + mes + "/" + año
fechadiv.html(fechadiv.html() + yearandmonth); 


fs.readFile('C:/Users/Public/data1.json', function (err, data) {
    var json = JSON.parse(data)

    armazones = json;
    console.log(armazones);
// console.log(valoresunidos);
armazones.forEach(cargar =>{
  var obj = Object.entries(cargar);
  console.log(obj);
  var contenedor = document.querySelector("#tab");
  var nuevop = document.createElement("p");
  contenedor.append(nuevop);
  nuevop.classList.add("p");
  nuevop.innerHTML = cargar.producto;

})

})




const {ipcRenderer} = require('electron');
console.log("no funca una mierda");
ipcRenderer.on('data', (e, datos) => {
    console.log("funca");
    console.log(datos);

})


function total(totall){
    var valortotal = document.querySelector("#total");
    var guardarvalores = 0;
    var seleccionartodos = document.querySelectorAll(".precio");
    seleccionartodos.forEach(element => {
            guardarvalores = guardarvalores + parseInt(element.value);
            if(totall.innerHTML != ""){
                totall.innerHTML = "$" + guardarvalores;
            }
    })
    }


   // seleccionarprecios.addEventListener('DOMSubtreeModified', total);

        
/*             document.querySelector("#precio").innerHTML = precio;
                document.querySelector("#nombre").innerHTML = nombre;
                document.querySelector("#cantidad").value = 1;
                total(); */



$("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".p").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}); 
var imprimir = document.querySelector("#imprimir");
var lista;
imprimir.addEventListener('click', function(){
 var busq = document.querySelector("#busqueda");
 busq.style = "display: none;"
window.print();
})

    function actualizar(valor, desc){
var nombre
    var precio = 0;
 armazones.forEach(element => {
        var entries = Object.entries(element);
        entries.forEach(element => {
            if(element[1] == valor){
                entries.forEach(element2 => {
                   if(element2[0] == "precio" );
                   console.log(element2[1]);
                })
            }
        });
    }) 
    armazones.forEach(element =>{
        var objeto = Object.entries(element)
        objeto.forEach(arr =>{
            if(arr[1] == valor){   
                nombre = arr[1];
                objeto.forEach(busqueda =>{
                       if(busqueda[0] == "precio"){
                        var val = busqueda[1];
                        console.log(busqueda[1]);
                        precio = val;
                        }
                    })
                }
              
                })


                })

                var listadodeproductos = document.querySelector("#listadodeproductos");
                var listadeproductos = document.querySelectorAll(".listadeproductos");

                if(listadeproductos.length > 0){
                    console.log(listadeproductos.length);
                    var contador = 0;
                    var array = [];
desc.forEach(namee =>{
    contador++;
    if(namee.classList.contains("nombre")){
        if(namee.innerHTML != "undefined"){
console.log(namee.innerHTML);
array.push(namee.innerHTML);
console.log(array);

}else{
    console.log("do nothing");
}
    }
})
if(array.includes(nombre) /*|| array.includes("Cuadrado1")*/){
    console.log("contiene el nombre");

}else{
    var totalselector = document.querySelectorAll("#total");
    totalselector.forEach(gettotal =>{
        if(totalselector.length > 0){
            gettotal.innerHTML = "   ";
            gettotal.removeAttribute("id");
        }
    })
    if(array.length != 0){
    console.log("no lo contiene");
    var tr = document.createElement("tr");
    listadodeproductos.append(tr);
    tr.classList.add("listadeproductos");
    var cantidad = document.createElement("th");
    var cantidadinput = document.createElement("input");
    cantidadinput.classList.add("cantidad");
     cantidadinput.setAttribute("min", 1);
     cantidadinput.setAttribute("max", 100);
    cantidadinput.value = 1;
    tr.appendChild(cantidad);
    cantidad.classList.add("descripciones");
    cantidad.append(cantidadinput);
    var nom = document.createElement("th");
    tr.appendChild(nom);
    nom.classList.add("descripciones");
    nom.classList.add("nombre");
    var prec = document.createElement("th");
    tr.appendChild(prec);
    prec.classList.add("descripciones");
    prec.setAttribute("id", "precio");
    var precinput = document.createElement("input");
    prec.append(precinput);

    var totall = document.createElement("th");
    tr.appendChild(totall);
    totall.classList.add("descripciones");
    totall.setAttribute("id", "total");
    nom.innerHTML = nombre;
    precinput.value = precio;
    precinput.classList.add("precio"); 
    cantidad.value = 1;
    totall.innerHTML = precio;
    total(totall);}
}
                }else{
                    console.log("ELSE");


        var tr = document.createElement("tr");
        listadodeproductos.append(tr);
        tr.classList.add("listadeproductos");
        var cantidad = document.createElement("th");
        var cantidadinput = document.createElement("input");
        cantidadinput.classList.add("cantidad");
         cantidadinput.setAttribute("min", 1);
         cantidadinput.setAttribute("max", 100);
        cantidadinput.value = 1;
        tr.appendChild(cantidad);
        cantidad.classList.add("descripciones");
        cantidad.append(cantidadinput);
        var nom = document.createElement("th");
        tr.appendChild(nom);
        nom.classList.add("descripciones");
        nom.classList.add("nombre");
        var prec = document.createElement("th");
        tr.appendChild(prec);
        prec.classList.add("descripciones");
        prec.setAttribute("id", "precio");
        var precinput = document.createElement("input");
        prec.append(precinput);
    
        var totall = document.createElement("th");
        tr.appendChild(totall);
        totall.classList.add("descripciones");
        totall.setAttribute("id", "total");
        nom.innerHTML = nombre;
        precinput.value = precio;
        precinput.classList.add("precio"); 
        cantidad.value = 1;
        totall.innerHTML = precio;
        total(totall);}
    

    };
setInterval(() => {

    var search = document.querySelector("#search");
var tab = document.querySelectorAll(".p");
var agregar = document.querySelector("#add")
tab.forEach(element => {
    element.addEventListener('click', function(){
console.log("funca: " + element.innerHTML);
search.value = element.innerHTML;
    })
})
    var amount = document.querySelectorAll(".cantidad");

amount.forEach(element => {
    element.addEventListener('input', ()=> {
        console.log("si")
        const n = element.value;
        if ( n >= 1 && n <= 100 ) {
            element.value = element.value;  
        } else {
            element.value = n.slice(0, -1) 
        }
      });
})

agregar.addEventListener("click", function(){
    armazones.forEach(element =>{
        var objeto = Object.entries(element)
        var valor = search.value;
        var ths = document.querySelectorAll(".descripciones");
        objeto.forEach(arr =>{
            if(arr[1] == valor){ 
              if(ths){

              }else{
                nombre = arr[1];
                console.log("El nombre es: " + nombre);
              }
            }/*else{
                console.log("enviar");
                actualizar(search.value);
            }*/
})
})
lista = document.querySelectorAll(".descripciones");


/*
if(lista.length > 0){


lista.forEach(element2 =>{
    if(element2.classList.contains("nombre")){
        if(element2.innerHTML == nombre){
            console.log("no enviar");
        }else{
            console.log("enviar");
            actualizar(nombre);
        }
          }
}) 
}else{

        console.log("enviar");
        actualizar(search.value);

}*/
var desc = document.querySelectorAll(".descripciones");
actualizar(search.value, desc);
});
var seleccionarprecios = document.querySelectorAll(".precio");
seleccionarprecios.forEach(elements =>{
    console.log("foreach");
    var totaldiv = document.querySelector("#total");
    elements.addEventListener('DOMSubtreeModified', total(totaldiv));

})

}, 1000);



});


