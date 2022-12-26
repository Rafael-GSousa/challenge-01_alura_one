const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')
/*
encryptButton.onclick = () => {
  const inputText = document.getElementById('input-text').value
  const output = document.getElementById('output')
  const outputText = document.getElementById('output-text')
  const hideImage = document.getElementById('hide-image')
  const hideTitle = document.getElementById('hide-title')
  const arrayListText = inputText.split('')
  const arrayListEncrypt = []

  for (let i = 0; i < arrayListText.length; i++) {
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
  }

  hideImage.style.display = 'none'
  hideTitle.style.display = 'none'
  output.style.justifyContent = 'start'

  outputText.innerHTML = arrayListEncrypt.join('')
  output.innerHTML = '<textarea readonly id="output-text" class="section-output-in">' + outputText.innerHTML + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
 
}

decryptButton.onclick = () => {
  const inputText = document.getElementById('input-text').value
  const output = document.getElementById('output')
  const outputAreaText = document.getElementById('output-text')
  const hideImage = document.getElementById('hide-image')
  const hideTitle = document.getElementById('hide-title')

  const decrypt = inputText.replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u')

  hideImage.style.display = 'none'
  hideTitle.style.display = 'none'
  output.style.justifyContent = 'start'

  outputAreaText.innerHTML = decrypt

}

function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}*/

var textInput = document.getElementById("input-text");
var outInput = document.getElementById("output");


encryptButton.onclick = () =>{

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="output-text">'
   + resultCripto + '</textarea>' + 
   '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

decryptButton.onclick = () =>{

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">'
     + resultDescripto + '</textarea>' + 
     '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}