const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')

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

  output.innerHTML = '<textarea readonly id="output-text">' + outputText.innerHTML + 
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

  output.innerHTML = '<textarea readonly id="output-text">' + outputAreaText.innerHTML + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}