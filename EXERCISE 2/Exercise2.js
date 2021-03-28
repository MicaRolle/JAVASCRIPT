//* EXERCISE 2 //*

//* 1 //*

//* a //*

var prince = 'The essential is invisible to the eyes.' 
var prince_s = prince.toUpperCase();
console.log('The little prince said: ', prince_s)

//* b //*
var fridda = 'Feet for I want if I have wings for fly.'
var fridda_s = fridda.substring(0,5);

console.log('The first five letters are: ', fridda_s)

//* c //*

var benedetti = 'The butterfly allways will remember that it was worm.';
var benedetti_s = benedetti.substring(49,52);
console.log('The last three letter of the sentences are: ', benedetti_s)


//* d //*

var cortazar = 'everything takes a little longer than it should.';
var cortazar_up = cortazar.charAt(0);
var cortazar_m = cortazar_up.toUpperCase();
var cortazar_low = cortazar.slice(1);
var cortazar_sent = cortazar_m + cortazar_low; 
console.log('Cortazar said in "Rayuela": ', cortazar_sent)

//* e //*

var gabo ='Let time pass and we will see what it brings.'
var space = gabo.indexOf(' ');
console.log('The first white space appear in this place: ', space)

//* f //*

var sabato = 'Un buen escritor expresa grandes cosas con pequeñas palabras; a la inversa del mal escritor, que dice cosas insignificantes con palabras grandiosas.'
var f_world = 
    sabato.substring(108, 109).toUpperCase() + sabato.substring(109,123) + " " + sabato.substring(137,138).toUpperCase() + sabato.substring(138,147);

console.log('Palabra con 10 caracteres', f_world)

