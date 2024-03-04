document.addEventListener("DOMContentLoaded", function() {
    let inputTexto = document.getElementById("texto");
    let outputResultado = document.getElementById("resultado");
    let muñeco = document.getElementById("muñeco");
    let mensaje = document.getElementById("mensaje");
    let encriptar = document.getElementById("encriptar");
    let desencriptar = document.getElementById("desencriptar");
    let copiarBtn = document.getElementById("copiarBtn");
    var x = document.getElementById("snackbar");

    function ocultarImagen() {
        let muñeco = document.getElementById('muñeco');
        if (window.matchMedia('(max-width: 1440px)').matches) { // Menor que 768px
            muñeco.style.display = 'none';
        } else {
            muñeco.style.display = 'block';
        }
    }
    
    // Llamar a la función al cargar la página y al cambiar el tamaño de la pantalla
    window.onload = ocultarImagen;
    window.onresize = ocultarImagen;

    function updateResultado() {
        outputResultado.innerText = inputTexto.value;
        
        // Ocultar la imagen y el mensaje si hay texto en el input
        if (inputTexto.value.trim() !== "") {
            muñeco.style.display = "none";
            mensaje.style.display = "none";
        } else {
            muñeco.style.display = "block";
            mensaje.style.display = "block";
        }
    }

        // Función para validar el texto ingresado
        function validarTexto() {
            let texto = inputTexto.value;
    
            // Expresión regular para validar letras minúsculas y sin acentos
            let regex = /^[a-z]+$/;
    
            // Verificar si el texto ingresado cumple con la expresión regular
            if (!regex.test(texto)) {
                mensajeError.style.display = "block"; // Mostrar el mensaje de error
               encriptar.disabled = true; 
               encriptar.className = "button-error";
               encriptar.innerText = "Error en la entrada";
               desencriptar.disabled = true; 
               desencriptar.className = "button-error";
               desencriptar.innerText = "Error en la entrada";
               copiarBtn.disabled = true; 
               copiarBtn.className = "button-error";
               copiarBtn.innerText = "Agregue valores validos para copiar";
            } else {
                mensajeError.style.display = "none"; // Ocultar el mensaje de error si el texto es válido
                encriptar.disabled = false; 
                encriptar.className = "encriptar";
                encriptar.innerText = "Encriptar";
                desencriptar.innerText = "Desencriptar";
                desencriptar.disabled = false; 
                desencriptar.className = "encriptar";
                desencriptar.innerText = "Desencriptar";
                copiarBtn.innerText = "Copiar";
                copiarBtn.disabled = false; 
                copiarBtn.className = "encriptar";
                
            }
        }
    

    inputTexto.addEventListener("input", updateResultado);
    inputTexto.addEventListener("input", validarTexto);

    // Inicializar el resultado
    updateResultado();

    copiarBtn.addEventListener("click", function() {
        console.log("copiar")
        // Seleccionar el texto dentro del input
        inputTexto.select();
        // Copiar el texto seleccionado al portapapeles
        navigator.clipboard.writeText(outputResultado.value);
        // Add the "show" class to DIV
  x.className = "show";
  x.innerText = "Usted copio el valor: "+outputResultado.value;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });


});


function encrypt() {
    console.log("encrypt");
    let inputTexto = document.getElementById("texto");
    let outputResultado = document.getElementById("resultado");
    let texto = inputTexto.value;

    // Reemplazar letras según las reglas de encriptación
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    // Mostrar el texto encriptado en el output
    outputResultado.textContent = texto;
}

function decrypt() {
    let inputTexto = document.getElementById("texto");
    let outputResultado = document.getElementById("resultado");
    let texto = inputTexto.value;

    // Revertir el reemplazo de letras para desencriptar el texto
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    // Mostrar el texto desencriptado en el output
    outputResultado.textContent = texto;
}
