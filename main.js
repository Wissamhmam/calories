function calculateCalories(){
    let caloriesNeeded;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let activenessValue = parseInt(document.getElementById("activeness").value);
    
    let gender = (document.getElementById("male").checked) ? "Male" : (document.getElementById("female") ? "Female" : null);

    //                  Λ
    //                  |
    //                  |
    //                 ---

    // if(document.getElementById("male").checked == true){
    //     gender = "Male";
    // }
    // else if(document.getElementById("female").checked == true){
    //     gender = "Female";
    // }

    if(gender != null){
        if(gender == "Male"){
            caloriesNeeded = 10 * weight + 6.25 * height - 5 * age + 5 + activenessValue;
        }
        else if(gender == "Female"){
            caloriesNeeded = 10 * weight + 6.25 * height - 5 * age - 161 + activenessValue; 
        }
    
        document.getElementById("caloriesNeeded").value = caloriesNeeded;
    }
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent form submission if username or password is empty
    if (document.getElementById("username").value.trim() === "" || document.getElementById("password").value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        alert("Please enter both username and password.");
    }
});