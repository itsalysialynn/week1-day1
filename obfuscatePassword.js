function obfuscate(password) {
  var obfuscatedPassword = ""

  for (var i = 0; i < password.length; i++) {
    var character = password[i];
    if (character === 'a') {
      obfuscatedPassword += "4";
    } else if (character === "e") {
      obfuscatedPassword += "3"; 
    } else if (character === "o") {
      obfuscatedPassword += "0";
    } else if (character === "l") {
      obfuscatedPassword += "1";
    } else {
      obfuscatedPassword += character;
    }
  } 
  return obfuscatedPassword;
} 

console.log(obfuscate('abcdefghijklmnopqrstuvwxyz'));
