const encryptButton = document.getElementById('encrypt-button')
const decryptButton = document.getElementById('decrypt-button')
const output = document.getElementById('output')
const hideImage = document.getElementById('hide-image')
const hideTitle = document.getElementById('hide-title')
var textInput = document.getElementById("input-text");
var criptografado = false;
var acentuadaMaiuscula = false;

encryptButton.onclick = () =>{

  var texto = textInput.value;
  const arrayListText = texto.split('')
  const arrayListEncrypt = []

  var resultCripto;
//se o texto estiver em minúsculo e sem acento, prossegue com o for
  
    for (let i = 0; i < arrayListText.length; i++) {
      if(!acento(arrayListText[i]) && minuscula(arrayListText[i])){
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
        criptografado = true;
      }else{
        acentuadaMaiuscula = true;
        criptografado = false;
        alerta();
      }
    }

    if(!acentuadaMaiuscula && criptografado){
      resultCripto = arrayListEncrypt.join('');

  
      output.innerHTML = '<textarea readonly id="output-text" class="output-saida">' + resultCripto + '</textarea>' + 
      '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
      
      hideImage.style.display = 'none'
      hideTitle.style.display = 'none'
      output.style.justifyContent = 'start'
    }

}

decryptButton.onclick = () =>{
  var texto = textInput.value;
  if (criptografado && texto.toLowerCase()) {
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

  }else{
    window.location.reload(true);
  }
}

// função que gera o botão de copiar e emite um alerta quando o texto é copiado, em seguida recarrega a página
function copiar() {
    var textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    window.location.reload(true); // esse comando recarrega a url
}

// função retorna verdadeiro se o caracter passado for exatamente igual a ele mesmo em minúsculo
function minuscula(texto){
  if(texto === texto.toLowerCase()){
    return true;
  }
}

// função vai retornar verdadeiro se as vogais forem acentuadas
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

// função gera o alerta de letras maiúsculas e acentuadas, na sequência recarrega a página para reiniciar o preenchimento
function alerta(){
  alert("Somente letras minúsculas e sem acento!");
  window.location.reload(true); // esse comando recarrega a url
}