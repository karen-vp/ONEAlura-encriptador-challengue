function encrypt() {
    let userInput = document.querySelector("#user-input").value.toLowerCase();
    let output = document.querySelector("#output");
    let palabraEncriptada = '';
    const encriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    for (let letra of userInput) {
        palabraEncriptada += encriptacion[letra] || letra;
    }
    console.log(palabraEncriptada)
    hideElements();
    
    output.innerHTML = palabraEncriptada;
    unhideElements();
}

function decipherWord() {
    let userInput = document.querySelector("#user-input").value.toLowerCase();
    let output = document.querySelector("#output");
    const decipher = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let palabraOriginal = '';
    let i = 0;
    while (i < userInput.length) {
        let encontrado = false;
        for (let key in decipher) {
            if (userInput.startsWith(key, i)) {
                palabraOriginal += decipher[key];
                i += key.length;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            palabraOriginal += userInput[i];
            i++;
        }
    }
    console.log(palabraOriginal)
    output.innerHTML = palabraOriginal;
    return palabraOriginal;
}

async function copyText(){
    let output = document.querySelector("#output").innerHTML;
        try {
          await navigator.clipboard.writeText(output);
          console.log('Contenido copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
}

function hideElements(){
    const elementToHide = document.getElementById("no-message")
    elementToHide.style.display = "none";
}

function unhideElements(){
    const elementToUnhide = document.getElementById("btn-copy");
    elementToUnhide.removeAttribute("hidden");
}