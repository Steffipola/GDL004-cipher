function code () { 
    document.getElementById("Cifrar").addEventListener("click" () => {
        let cif = document.getElementById("Textconvert").value; 
        let displacement = document.getElementById("desplazar").value;
        window.cipher.code(Cifrar , desplazar);
    document.getElementById("TextoConvertido").innerHTML = window.cipher.code(Cifrar , desplazar);
    })
};
function encode () {
    document.getElementById("Descifrar").addEventListener("click" () => {
        let des = document.getElementById("TextoConvertido").value;
        let displace = document.getElementById("desplazar").value;
        window.cipher.code(Descifrar , desplazar);
    document.getElementById("TextoConvertido").innerHTML = window.cipher.decode (Descifrar , desplazar);
    })
};
