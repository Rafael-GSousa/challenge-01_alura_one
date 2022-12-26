const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')
const output = document.getElementById('output')
const hideImage = document.getElementById('hide-image')
const hideTitle = document.getElementById('hide-title')
var textInput = document.getElementById("input-text");


encryptButton.onclick = () =>{

  var texto = textInput.value;

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
  }

decryptButton.onclick = () =>{

    var texto = textInput.value;

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

function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}