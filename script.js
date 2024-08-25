const textoInput = document.getElementById('input-texto');
const btnCripto = document.getElementById('btn-cripto');
const btnDescripto = document.getElementById('btn-descripto');
const msg = document.getElementById('msg');
const btnCopy = document.getElementById('btn-copy');

function criptografar(texto) {
  const substituicoes = [
    { original: 'e', substituto: 'enter' },
    { original: 'i', substituto: 'imes' },
    { original: 'a', substituto: 'ai' },
    { original: 'o', substituto: 'ober' },
    { original: 'u', substituto: 'ufat' },
  ];

  // Converter para minúsculas
  const textoMinusculo = texto.toLowerCase();

  // Substituir letras de acordo com o mapeamento
  const textoCriptografado = textoMinusculo.replace(/[aeiou]/gi, match => {
    const substituicao = substituicoes.find(s => s.original === match);
    return substituicao ? substituicao.substituto : match;
  });

  return textoCriptografado;
}

function descriptografar(texto) {
  return texto
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
}

function copiarTexto() {
  msg.select();
  navigator.clipboard.writeText(msg.value);
  alert('Texto copiado para a área de transferência!');
}

btnCripto.addEventListener('click', (event) => {
  event.preventDefault();
  const textoCriptografado = criptografar(textoInput.value);
  msg.value = textoCriptografado;
});

btnDescripto.addEventListener('click', (event) => {
  event.preventDefault();
  const textoDescriptografado = descriptografar(textoInput.value);
  msg.value = textoDescriptografado;
});

btnCopy.addEventListener('click', copiarTexto);

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/