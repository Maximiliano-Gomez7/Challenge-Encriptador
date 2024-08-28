/*para empezar usamos la declaracion de variables, utilizando const 
ya que son variables fijas y no van a recibir modificaciones*/

const textArea = document.querySelector(".textArea");
/*en etsta variable recibimos lo que el usuario va a estar escribiendo en el encriptador*/

const mensaje = document.querySelector(".mensaje");

/*  Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/
//--------------------

function btnEncripar(){
    const textoEncrip = encriptar(textArea.value)
    mensaje.value = textoEncrip
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

/*en esta paso usamos el recurso de los arreglos multidimencionales
basicamente creando una matriz
Ademas, esta variable deberia estar dentro de la funcion encriptar
que recibira un parametro que a travez de el se pueda llevar a cabo
el proceso de encriptacion de nuestra funcion */


function encriptar(stringEncrip){
let matrizCodigo = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]];
//utilizamos el metodo tolowerCase() convirtiendo todo a minuscula
stringEncrip = stringEncrip.toLowerCase()

//bucle for para recorrer la matriz
for(let i= 0; i < matrizCodigo.length; i++ ){
    if(stringEncrip.includes(matrizCodigo[i][0])){
        stringEncrip = stringEncrip.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}  
return stringEncrip
};
//console.table(matrizCodigo);

/*Ahora para lograr que lo que el usurio escriba sea encriptado
debemos crear una funcion para el boton */



function desencriptar(stringDesEncrip){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]];

    stringDesEncrip = stringDesEncrip.toLowerCase()
    
    for(let i= 0; i < matrizCodigo.length; i++ ){
        if(stringDesEncrip.includes(matrizCodigo[i][1])){
            stringDesEncrip = stringDesEncrip.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }  
    return stringDesEncrip
    };
    


    function btnDesEncripar(){
        const textoEncrip = desencriptar(textArea.value)
        mensaje.value = textoEncrip
        textArea.value = "";
    
    }
    
    function copiarTexto() {
        navigator.clipboard.writeText(mensaje.value)
      }

