// Assignment Code
  var characterAmount = '';
  var useUpper = '';
  var useLower = '';
  var useSpecial = '';
  var useNumbers = '';
  var passwordCriteria = '';

  
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

var generateBtn = document.querySelector("#generate");
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

function lowToHigh(low, high) {
  var array = []
  for (i = low; i<= high; i++) {
    array.push(i)
  }
  return array 
}

function generatePassword() {
  var passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    var characterCode = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
   return passwordCharacters.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
generateBtn.addEventListener("click", writePassword);
