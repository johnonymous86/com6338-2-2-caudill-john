// Your code here
function greet() {    
   let name = prompt("What is your name?")

    alert("Hello, " + name)

    let age = prompt("How old are you?")

    parseInt(age)

    let prompt2 = confirm ("If you have had a birthday this year, click 'OK'. If you have not had a birthday this year, click 'Cancel'.")

    if (prompt2) {
    alert ("The year of your birth is " + (new Date().getFullYear() - age))
}
    else {
    alert ("The year in which you were born is " + (new Date().getFullYear() - age - 1))
    }
   




}