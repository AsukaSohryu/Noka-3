function submitFunction(){
    
    let full_name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let gender = document.getElementById('gender').value;
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm_password').value.trim();
    let agree = document.getElementById('agree').checked;

    let confirmation = true;

    if(full_name.length == ''){
        alert("Name cannot be blank");
        confirmation = false;
    }

    else if(email.length == ''){
        alert("Email cannot be blank");
        confirmation = false;
    }

    else if(gender == ''){
        alert("Gender cannot be blank");
        confirmation = false;
    }

    else if(password.length == ''){
        alert("Password cannot be blank");
        confirmation = false;
    }

    else if(confirm_password.length == ''){
        alert("Password cannot be blank");
        confirmation = false;
    }
    else if(confirm_password != password){
        alert("Password cannot be blank");
        confirmation = false;
    }

    else if(agree == false){
        alert("Agreement cannot be blank");
        confirmation = false;
    }

    if(confirmation == false) return false;

    else{

        return true;
    }
}