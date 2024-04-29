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
    event.preventDefault(); // Prevent default form submission

    // Check username and password (replace this with your authentication logic)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example authentication logic (replace this with your actual logic)
    if (username === "a" && password === "p") {
        // Redirect to the index page
        window.location.href = "index.html";
    } else {
        // Display error message or handle unsuccessful login
        alert("Invalid username or password. Please try again.");
    }
});