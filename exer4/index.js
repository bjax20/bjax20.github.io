// import the packages needed
const { v4: uuidv4 } = require('uuid');
var validator = require('validator');
var fs = require('fs');

// To remove whitespaces, I used replace(/\s/g, "")) from: https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript

// This function will return a unique ID then it will return it
function generateUniqueID(firstName, lastName){
    let uuid = uuidv4().substring(0, 8);
    firstLetter = firstName.toLowerCase().charAt(0) 
    idName1 = firstLetter.concat("", lastName.toLowerCase().replace(/\s/g, "")); // note: we should remove the whitespaces in surname (some surname has space)
    uniqueID = idName1.concat("", uuid)
    return uniqueID
}


// This function will create a file called users.txt to save userData
function addAccount([firstName, lastName, email, age]){
    // try catch
    try {
        let isAllFieldsPresent = false;
        let isFieldsAreNonEmpty = false;
        let isEmailValidFormat = false;
        let isAgeAdult = false;


    
        // Let's check if the data are valid.
        if(firstName, lastName, email, age){
            isAllFieldsPresent = true;
        }


        if(firstName.replace(/\s/g, "")){  // if after removing whitespaces, it is still valid, then make the isFieldsAreNonEmpty true
        
            isFieldsAreNonEmpty = true
        } 
    
        if(validator.isEmail(email)){
            isEmailValidFormat = true;
        }

        if(age >= 18){
            isAgeAdult = true;
        }

        // if the arguments are valid, then save the file (users.txt)
        if(isAllFieldsPresent && isFieldsAreNonEmpty && isEmailValidFormat && isAgeAdult){

            let uniqueID = generateUniqueID(firstName, lastName); // generate a Unique ID
            userData = firstName + ',' + lastName + ',' + email + ',' + age + ',' + uniqueID; // merge the user data
            // Using fs to save a file
            fs.appendFileSync('users.txt', userData)
            // Also add a new line
            fs.appendFileSync('users.txt', "\n")

            console.log(firstName, "account added!!!");
            return true
        } else{
            // the arguments are invalid.
            return false;
        }

      } catch (error) {

            // if there is an error, return a false.
            return false;
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
      }


  

}


module.exports = {
    generateUniqueID,
    addAccount
};

