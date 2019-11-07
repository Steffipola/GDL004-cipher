window.cipher = {
  encode: (uppercaseString, displacement) => {
    let replace = "";

    for (let i = 0; i < uppercaseString.length; i++) {
      let formula = (uppercaseString.charCodeAt(i) - 65 + displacement) % 26 + 65;
      replace += String.fromCharCode(formula);
    }

    return replace;
  },

  decode: (displace, des) => {

    let rpl = "";
    for (let i = 0; i < des.length; i++) {
      let txto = des.charCodeAt(i); {
        rpl += String.fromCharCode(
          ((txto + 65 - parseInt(displace)) % 26) + 65);
      }
    }
    return rpl;
  }
};
