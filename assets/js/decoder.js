const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')
const output = document.getElementById('output')
const hideImage = document.getElementById('hide-image')
const hideTitle = document.getElementById('hide-title')
var textInput = document.getElementById("input-text");
var criptografado = false

encryptButton.onclick = () =>{

  var texto = textInput.value;

  if (texto == texto.toLowerCase() && !acento(texto)) {
    var resultCripto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")    

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text" class="output-saida">'
    + resultCripto + '</textarea>' + 
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    hideImage.style.display = 'none'
    hideTitle.style.display = 'none'
    output.style.justifyContent = 'start'

    criptografado = true;

  } else {
    alert("Somente letras minúsculas e sem acento");
  }

}

decryptButton.onclick = () =>{

    var texto = textInput.value;
    if (texto == texto.toLowerCase() && !acento(texto) && criptografado) {
    var resultDescripto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-text" class="output-saida">'
     + resultDescripto + '</textarea>' + 
     '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
     hideImage.style.display = 'none'
     hideTitle.style.display = 'none'
     output.style.justifyContent = 'start'
    }
  }

function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}

function acento(texto){
  if(texto.toLowerCase() == 'á' || texto.toLowerCase() == 'é' || texto.toLowerCase() == 'í' ||
  texto.toLowerCase() == 'ó' || texto.toLowerCase() == 'ú' || texto.toLowerCase() == 'à' || 
  texto.toLowerCase() == 'è' || texto.toLowerCase() == 'ì' || texto.toLowerCase() == 'ò' || 
  texto.toLowerCase() == 'ù' || texto.toLowerCase() == 'ã' || texto.toLowerCase() == 'õ' || 
  texto.toLowerCase() == 'â' || texto.toLowerCase() == 'ê' || texto.toLowerCase() == 'î' ||
  texto.toLowerCase() == 'ô' || texto.toLowerCase() == 'û'){
    return true;
  }
}