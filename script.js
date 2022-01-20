
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

function encriptar (input) {
    var encript = input.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/u/gi,"ufat").replace(/o/gi,"ober");
    return encript;
}


function desencriptar (input) {
   
    var encript = input.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ufat/gi,"u").replace(/ober/gi,"o");
    return desencript;
}



function copy(){
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
}


//Capture input
function captureInput() {
    var input = document.querySelector("#input-texto");
    return input.value;
}

//Show output
function output(encryptedString){
    document.querySelector("#msg").value=encryptedString;
}



buttonEncrypt.addEventListener("click",function(event) {
    var input = captureInput();
  var encrypt = encriptar(input);
  output(encrypt);

});

buttonDesencrypt.addEventListener("click",function(event) {
    var input = captureInput();
    var desencrypt= desencriptar(input );
    output(desencrypt);
   });


   botonCopy.addEventListener("click",function(event) {
   copy();
   });
