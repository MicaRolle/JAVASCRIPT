//* EXERCISE 3 //*

//* 1 //*

//* a //*
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Los meses 5 y 11 son: ', months[5], months[11])

//* b //*

var months_orderalp = months.sort();
console.log('Meses ordenamos alfabeticamente: ', months_orderalp) 

//* c  //*
var months_c = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months_add = months_c.push("Nuevo Mes 2")
var months_addtwo = months_c.unshift("Nuevo Mes 1")
console.log('Nuevos meses agregados: ', months_c)

//* d  //*

var months_d = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months_lessone = months_d.shift();
var months_lesstwo = months_d.pop();
console.log('Eliminamos dos elementos: ', months_d)

//* e  //*

var months_e = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months_orderdif = months_e.reverse();
console.log('Reordenamos los elementos: ', months_e)

//* f  //*

var months_f = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months_string = months_f.join(" - ")
console.log('Unimos el array en un string: ', months_string)

//* g  //*

var months_g = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months_remove = months_g.slice(4,11); 
console.log('Removemos algunos meses: ', months_remove)