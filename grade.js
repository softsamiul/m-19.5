function getResult(myNum) {
    if (myNum >= 90 && myNum <= 100) {
        return "Congrats! your grade is 'AA'";
    } else if (myNum >= 80) {
        return "Congrats! your grade is 'A+'";
    } else if (myNum >= 60) {
        return "Congrats! your grade is 'A'";
    } else if (myNum >= 45) {
        return "Congrats! your grade is 'B+'";
    } else if (myNum >= 33) {
        return "Congrats! your grade is 'B'";
    } else {
        return "Opps! You failed dude!";
    }
}



let myNum = 50;
const result = getResult(myNum);
console.log(result);