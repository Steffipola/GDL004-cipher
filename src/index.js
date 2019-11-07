    document.getElementById("Cifrar").addEventListener("click", encode);
    
    function encode () { 
        let cif = document.getElementById("Textconvert").value; 
        let uppercaseLetters = cif.toUpperCase ();
        let displacement = parseInt(document.getElementById("offset").value);
   
        document.getElementById("Finaltext").value = window.cipher.encode(uppercaseLetters , displacement);
    };
    
    document.getElementById("Descifrar").addEventListener("click", decode);
    
    function decode () {    
        let des = document.getElementById("Finaltext").value;
        let displace = document.getElementById("offset").value;
        
        document.getElementById("Finaltext").value = window.cipher.decode (displace , des);
    };
    document.getElementById("Limpiar").addEventListener("click", () => {
        window.location.reload();
    });
    