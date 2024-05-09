//write function to validate password
//condition-password must be contain a lowecase,one uppercase,and one digit.
//length must be atleast 8char.
///

//if pass word fulfil all criteria then it return true/false

function simplePasswordValidator(password){
    if(password.length < 8){
        return false;
    } else {
        //way1
        if(/[A-Z]/.test(password.charAt(0))&&  /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)){
            return true;
        } else {
            return false;
        }

        //way2 but it not suitable to check some time s it fails
        // if(password.includes("a-z") && password.includes("A-Z") && password.includes("0-9")){
        //     return true;
        // } else {
        //     return false;
        // }
    }
}



console.log(
    simplePasswordValidator("Chin@2024"),
    simplePasswordValidator("Chi20"),
    simplePasswordValidator("Chinmayakua@22"),
    simplePasswordValidator("chimaya@2000")
)