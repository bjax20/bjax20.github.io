

// This function returns true if the two password matches, has at least 8 characters, has at least one uppercase, lowercase, and number. Else, returns false
function validatePassword(password1, password2){
    
    // return false if the two passwords are not match
    if (password1 !== password2){
        return false;
    }

    // return false if the password is not at least 8 char

    if (password1.length < 8){
        return false;
    }

    // Check if the password has 1 number, 1 uppercase char, 1 lowercase character 
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

     // Check if there is a number in the password. 
     for(let i = 0; i< password1.length; i++){
        if(typeof(Number(password1[i])) === typeof(Number(password1[i]))){
            hasNumber = true;
        }
    }

     // Check if there is an upperCase
     for(let j = 0; j< password1.length; j++){
        if((password1[j] != password1[j].toLowerCase())){
            hasUpperCase = true;
        }
    }

     // Check if there is a lowerCase
     for(let k = 0; k< password1.length;k++){
        if((password1[k] != password1[k].toUpperCase())){
            hasLowerCase = true;
        }
    }
    // return true if all are true, else return false
    return hasNumber && hasUpperCase && hasLowerCase;
}


function reversePassword(password){
    reversed_password = ""
    for (var i = password.length - 1; i >= 0; i--) { 
        reversed_password += password[i]; // or newString = newString + str[i];
    }
    return reversed_password;
}

// Test Cases for validating of password.
console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))


// Test Cases for reversing of passwords
console.log(reversePassword("billjerson"))