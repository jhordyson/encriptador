function validar_texto(){
    let texto_escrito = document.querySelector("#ingresar_texto").value;
    let validador = texto_escrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptar() {
    if(!validar_texto()){
        let texto_uno = document.querySelector("#ingresar_texto").value;
        var encriptar_texto = texto_uno.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#salida_texto").value = encriptar_texto;
        document.querySelector("#ingresar_texto").value;
    }
}
var boton_encriptar = document.querySelector("#encriptador");
boton_encriptar.onclick = encriptar;

function desencriptar(){
    let texto_dos = document.querySelector("#ingresar_texto").value;
    var desencriptar_texto = texto_dos.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#salida_texto").value = desencriptar_texto;
    document.querySelector("#ingresar_texto").value;
}
var boton_desencriptar = document.querySelector("#desencriptador");
boton_desencriptar.onclick = desencriptar;

function copiar(){
    var texto_copiar = document.getElementById("salida_texto");
    texto_copiar.select();
    document.execCommand("copy");
}
var boton_copiar = document.querySelector("#copiar_texto");
boton_copiar.onclick = copiar;