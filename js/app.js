'use strict'


let YourName = prompt("What is Your Name ?");
alert("Welcom  " + YourName + ' ' + "Lets play with us ");

let YourAge = prompt("Are You Age Between 20 and 30")
YourAge = YourAge.toLowerCase();;
if (YourAge == 'yes' || YourAge == 'y') {
    alert("Welcom To you");
} else if (YourAge == 'no' || YourAge == 'n') {
    alert("You age not Age Between 20 and 30");
}
console.log(YourAge);

// 6th qustion 
let numOfTry = 4;
let hiddenum = 40;
let numGame = prompt('Select some number and save it in your mind !!');
while (numOfTry) {

    if (numGame < hiddenum) {
        alert(YourName + '  the guess  “too low " ');
    } else if (numGame > hiddenum) {
        alert(YourName + '  the guess  “too high" ');
    } else {
        alert("you guess  the number it's  " + hiddenum + '  Correct Answer');
        break;
    }

    numOfTry -= 1;
    numGame = prompt('please try again you have : ' + numOfTry + ' remaining!  ');

    if (!numOfTry) {
        break;
    }
}


let YourBackground = prompt("Are you Backgroud IT");
YourBackground = YourBackground.toLowerCase();
if (YourBackground == 'yes' || YourBackground == 'y') {
    alert("DEVELOPER");
} else if (YourBackground == 'no' || YourBackground == 'n') {
    alert("NOT DEVELOPER");
}
console.log(YourBackground);


let knowe = prompt("Did You hear about ASAC ?");
knowe = knowe.toLowerCase();
if (knowe == 'yes' || knowe == 'y') {
    alert("Amazing");
} else if (knowe == 'no' || knowe == 'n') {
    alert("NOT YET ");
}
console.log(knowe);


// 7th Question 
let attempts = 6;
let listOfCouress = ['html', 'css', 'sql', 'ccna', 'js', 'jqury'];
let courses = prompt("Guess What ASAC's couress!! ");
while (attempts) {
    for (let i = 0; i < listOfCouress.length; i++) {
        if (courses === listOfCouress[i]) {
            alert('you guess  the couress its  '+ listOfCouress[i] + '  Correct Answer');
            console.log("Roqia");
            break;
        }
        attempts -= 1;
        courses = prompt('please try again you have : ' + attempts + ' remaining!  ');
    }
    if (!attempts) {
        break;
    }
}



let c = prompt("Do you learn new coures?");
c = c.toLowerCase();
if (c == 'yes' || c == 'y') {
    alert("Teel Me About this courses");
} else if (c == 'no' || c == 'n') {
    alert("You Sould That ");
}
console.log(c);