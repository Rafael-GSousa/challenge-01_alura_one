const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')
const output = document.getElementById('output')
const hideImage = document.getElementById('hide-image')
const hideTitle = document.getElementById('hide-title')
var textInput = document.getElementById("input-text");
var criptografado = false

encryptButton.onclick = () =>{

  var texto = textInput.value;
  const arrayListText = texto.split('')
  const arrayListEncrypt = []

  var resultCripto;

  if (texto == texto.toLowerCase()){
  for (let i = 0; i < arrayListText.length; i++) {
    if(!acento(arrayListText[i])){
      if (arrayListText[i] === 'a') {
        arrayListEncrypt.push('ai')
      } else if (arrayListText[i] === 'e') {
        arrayListEncrypt.push('enter')
      } else if (arrayListText[i] === 'i') {
        arrayListEncrypt.push('imes')
      } else if (arrayListText[i] === 'o') {
        arrayListEncrypt.push('ober')
      } else if (arrayListText[i] === 'u') {
        arrayListEncrypt.push('ufat')
      } else {
        arrayListEncrypt.push(arrayListText[i])
      }
    }else{
      alert("Somente letras minúsculas e sem acento!\nRemova os caracteres acentuados.");
    }
  } 
  criptografado = true;
    }else {
      alert("Somente letras minúsculas e sem acento!\nRemova os caracteres maiúsculos.");
  }

resultCripto = arrayListEncrypt.join('');

output.innerHTML = '<textarea readonly id="output-text" class="output-saida">' + resultCripto + '</textarea>' + 
'<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

hideImage.style.display = 'none'
hideTitle.style.display = 'none'
output.style.justifyContent = 'start'



}

decryptButton.onclick = () =>{

    var texto = textInput.value;
    if (texto == texto.toLowerCase() && !acento(texto) && criptografado) {
    var resultDescripto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  
    output.innerHTML = '<textarea readonly id="output-text" class="output-saida">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

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