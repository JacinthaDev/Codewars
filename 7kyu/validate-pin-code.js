//We will get a string that could contain, numbers, letters, or symbols and any number of character
//We are returning true or false
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
//first check if pin is not === 4 or not ===6. if so, return false
//now that we know the pin is the valid amount of characters, we are going to check if there is anything in the string other than numbers
// 

function validatePIN (pin) {
    if (pin.length === 4 || pin.length === 6) {
        return /^[0-9]+$/.test(pin);
    } else {
        return false
    }
}