
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



var buttonEncrypt = document.querySelector("#btn-encriptar");
var buttonDesencrypt = document.querySelector("#btn-desencriptar");
var botonCopy = document.querySelector("#btn-copy");
var inputResultado = document.querySelector("#msg");

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

function encriptar (input) {
 
    var encript = input.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/u/gi,"ufat").replace(/o/gi,"ober");
    return encript;
}


function desencriptar (input) {
   
    var desencript = input.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ufat/gi,"u").replace(/ober/gi,"o");
    return desencript;
}


function copiarportapapeles(){
    var copyText = document.getElementById("msg");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("msg").value = "";
}



function captureInput() {
    var input = document.querySelector("#input-texto");
    return input.value;
}

function output(encryptedString){
    inputResultado.value=encryptedString;
}



buttonEncrypt.addEventListener("click",function(event) {
    event.preventDefault();

    var input = captureInput();
  var encrypt = encriptar(input);
  output(encrypt);

});

buttonDesencrypt.addEventListener("click",function(event) {
    event.preventDefault();
    var input = captureInput();
    var desencrypt= desencriptar(input );
    output(desencrypt);
   });


  botonCopy.addEventListener("click",function(event) {
    event.preventDefault();
    copiarportapapeles();
   });

