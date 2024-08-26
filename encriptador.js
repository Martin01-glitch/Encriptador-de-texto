const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuñeco = d.querySelector(".result__img");
const loaderRad = d.querySelector(".loader");
const loaderTitle = d.querySelector(".result__title");
const loaderText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]
//Funcion para encriptar.
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
                break; // Termina el bucle cuando se encuentra la correspondencia
            }            
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado
}
//Funcion para desencriptar.
function desencriptarmensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');// 'g' para buscar globalmente
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//Ocultar elementos dinamicamente.
textArea.addEventListener("input", (e)=>{
    imagenMuñeco.style.display = "none";
    loaderRad.classList.remove("hidden");
    loaderTitle.textContent = "Capturando Mensaje.";
    loaderText.textContent = "";
})
//Funcion de encriptado.
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    loaderText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    loaderTitle.textContent = "El resultado es:";
})

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    loaderText.textContent = mensajeDesencriptado;
    loaderTitle.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = loaderText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuñeco.style.display = "block";
        loaderRad.classList.add("hidden");
        loaderTitle.textContent = "El texto se copio.";
        botonCopiar.classList.add("hidden");
        loaderText.textContent = "";
    })
})

