function decryptText(encryptedText) {
    let decryptedText = '';
  
    for (let i = 0; i < encryptedText.length; i++) {
      let charCode = encryptedText.charCodeAt(i);
  
      // Dekripsi huruf kapital A sampai Z
      if (charCode >= 65 && charCode <= 90) {
        charCode -= 5;
        if (charCode < 65) {
          charCode += 26;
        }
      }
  
      // Dekripsi huruf kecil a sampai z
      if (charCode >= 97 && charCode <= 122) {
        charCode -= 5;
        if (charCode < 97) {
          charCode += 26;
        }
      }
  
      decryptedText += String.fromCharCode(charCode);
    }
  
    return decryptedText;
  }

console.log(decryptText("xfqfr bfmdz"))
console.log(decryptText("gjxtp lzj rfz ifkyfw jxi snm"))
console.log(decryptText("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?"))
console.log(decryptText("fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz"))
console.log(decryptText("dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"))