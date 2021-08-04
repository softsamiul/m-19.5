

function getInterest(p, r, t) {
    let i = (p * r * t) / 100;
    return i;
}
let p = 39725; // P = Principle or main balance
let r = 5; // R = % of interest
let t = 1; // Time = 1 year

const result = getInterest(p, r, t);
console.log(result);