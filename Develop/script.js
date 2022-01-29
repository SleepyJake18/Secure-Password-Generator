// variables used to determine parameters of password
  var characterAmount = '';
  var useUpper = '';
  var useLower = '';
  var useSpecial = '';
  var useNumbers = '';
  var passwordCriteria = '';
  // selects button with id=generate 
  var generateBtn = document.querySelector("#generate");
  // variables used to create arrays of charcodes for passwordCriteria
  var numberCharCodes = lowToHigh(48, 57);
  var lowercaseCharCodes = lowToHigh(97, 122);
  var uppercaseCharCodes = lowToHigh(65, 90);
  var symbolCharCodes = lowToHigh(33, 47).concat(
    lowToHigh(58, 64).concat(
      lowToHigh(91, 96).concat(
        lowToHigh(123, 126)
      )
    )
  );

  // function used to gather user input for parameters of password
function promptUser(){
  characterAmount = prompt(`How long should your password be?`);
  useUpper = confirm(`Do you want to use uppercase letters?`);
  useLower = confirm(`Do you want to use lower case letters?`);
  useNumbers = confirm(`Do you want to use numbers?`);
  useSpecial = confirm(`Do you want to use special characters?`);

  if (characterAmount < 8 || characterAmount > 128) {
    alert(`Must be between 8 and 128 characters!`);
    promptUser();
  }
  
  if (useUpper && useLower && useNumbers && useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(uppercaseCharCodes).concat(numberCharCodes).concat(symbolCharCodes);
    
  } else if (!useUpper && useLower && useNumbers && useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(numberCharCodes).concat(symbolCharCodes);
    
  } else if (!useUpper && !useLower && useNumbers && useSpecial) {
    passwordCriteria = (numberCharCodes).concat(symbolCharCodes);
    
  } else if (!useUpper && !useLower && !useNumbers && useSpecial) {
    passwordCriteria = (symbolCharCodes);
    
  } else if (useUpper && !useLower && useNumbers && useSpecial) {
    passwordCriteria = (uppercaseCharCodes).concat(numberCharCodes).concat(symbolCharCodes);
    
  } else if (useUpper && !useLower && !useNumbers && useSpecial) {
    passwordCriteria = (uppercaseCharCodes).concat(symbolCharCodes);
    
  } else if (useUpper && !useLower && !useNumbers && !useSpecial) {
    passwordCriteria = (uppercaseCharCodes);
    
  } else if (useUpper && useLower && !useNumbers && useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(uppercaseCharCodes).concat(symbolCharCodes);
    
  } else if (useUpper && useLower && !useNumbers && !useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(uppercaseCharCodes);
    
  } else if (!useUpper && useLower && !useNumbers && !useSpecial) {
    passwordCriteria = lowercaseCharCodes
    
  } else if (useUpper && useLower && useNumbers && !useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(uppercaseCharCodes).concat(numberCharCodes);
    
  } else if (!useUpper && useLower && useNumbers && !useSpecial) {
    passwordCriteria = lowercaseCharCodes.concat(numberCharCodes);
    
  } else if (!useUpper && !useLower && useNumbers && !useSpecial) {
    passwordCriteria = numberCharCodes
    
  }
  return characterAmount
  return useUpper
  return useLower
  return useNumbers
  return useSpecial
  return passwordCriteria
}

// function used to generate arrays of charcodes for passwordCriteria
function lowToHigh(low, high) {
  var array = []
  for (i = low; i<= high; i++) {
    array.push(i)
  }
  return array 
}
// function used to convert charcode array values to their meaning in plain text. Pieces them together in one string in random order to create password
function generatePassword() {
  var passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    var characterCode = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
   return passwordCharacters.join("")
}

// Takes the value from generatePassword function and inputs it to the value of the text area with the id=password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate password button to prompt the user for input then execute writePassword function.
generateBtn.addEventListener("click", promptUser);
generateBtn.addEventListener("click", writePassword);
