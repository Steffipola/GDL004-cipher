window.cipher = {
  encode: (uppercaseString, displacement) => {
  let replace = "";
  for (let i = 0; i < uppercaseString.length; i++) {
    let asciiMsg = uppercaseString.charCodeAt(i);
    if (65 <= asciiMsg && asciiMsg <= 90) {
      replace += String.fromCharCode(
        ((asciiMsg - 65 + parseInt(displacement)) %26) + 65
      );
    } else if (97 <= asciiMsg && asciiMsg <= 122){
      replace += String.fromCharCode(
        ((asciiMsg - 97 + parseInt(displacement)) % 26) +97
      );
    } else {
      replace += uppercaseString.charAt(i);
      }
    }
    return replace;
  
  },
  decode: (displace, des) => {
  let rpl = "";
  for (let i=0; i < des.length; i++) {
    let asciiMsg = des.charCodeAt(i);
    if (65 <= asciiMsg && asciiMsg <= 90) {
      rpl += String.fromCharCode(
        ((asciiMsg + 65 - parseInt(displace)) % 26) + 65
      );
    } else if (97 <= asciiMsg && asciiMsg <= 122){
      rpl += String.fromCharCode(
        ((asciiMsg - 97 - parseInt(displace)) % 26 ) + 97
      );
    } else {
      rpl += des.charAt(i);
      }
    }
    return rpl;
  }
    };
            /*
            if (uppercaseString.charCodeAt(i) == 32) { formula = uppercaseString.charCodeAt(i)
            } else { 
              formula = (uppercaseString.charCodeAt(i) - 65 + displacement) % 26 + 65;
            }
            replace += String.fromCharCode(formula);*/
            
            /*decode: (displace, des) => {
              let rpl = "";
              for (let i = 0; i < des.length; i++) {
                if (displace.charCodeAt(i) == 32 ) { txto = displace.charCodeAt(i)
                } else {
                  txto = des.charCodeAt(i); 
                }
                rpl += String.fromCharCode(((txto + 65 - displace)) % 26) + 65);
              }
              return rpl;
            } */