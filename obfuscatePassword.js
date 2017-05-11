function obfuscate(password) {
  var obfuscatedPassword = "";

  for (var i = 0; i < password.length; i++) {
    var character = password[i];
    if (character === "a" || character === "A") {
      obfuscatedPassword += "4";
    } else if (character === "e" || character === "E") {
      obfuscatedPassword += "3";
    } else if (character === "o" || character === "O") {
      obfuscatedPassword += "0";
    } else if (character === "l" || character === "L") {
      obfuscatedPassword += "1";
    } else {
      obfuscatedPassword += character;
    }
  }

  return obfuscatedPassword;
}

console.log(obfuscate("AabcdeEfghijklLmnoOpqrstuvwxyz"));
