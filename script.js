
// Exercise 1


let birthYear=2000;
let age=2021-birthYear;
let reamainingYear=18-age;
if (age>=18){
    console.log(`you are allowed to drive`);
} else{
    console.log(`you are not allowed to drive. 
    you have to wait another ${reamainingYear} years`)
}

// Exercise 2



// let openingDay=["monday", "tuesday", "wednesday" ,"thursday","friday"];
let openingDay="monday";
if (openingDay=="monday"){
    console.log(`calling`);
}else{
    console.log(`please call only on our opening day`);
}

// Exercise 3
let x,y;
x=30;
y=45;
let result=x*y;
let result2=(x*y)*2;
console.log(Math.max(result,result2));

console.log(Math.pow(2,3));

// lExercise 4

let i=5;
for(i=5; i<=25; i=i+5){
let result3=i+5;
let result4=result3+i;

    console.log(i,result3,result4);
}


// code challenge 3

let dolphinAverage=(100+100+10)/3;
let koalasAverage=(100+100+10)/3;
// if(dolphinAverage>koalasAverage){
//     console.log(`Team Dolphin is the winner`);
// }else if (dolphinAverage==koalasAverage) {
//     console.log(`Match is a draw`);
// }else{
//     console.log(`Team koalas is the winner`);
// }

// bonus 1 && 2

if((dolphinAverage>koalasAverage) && (dolphinAverage>=100)){
    console.log(`Team Dolphin is the winner`);
}else if((koalasAverage>dolphinAverage) && (koalasAverage>=100)){
    console.log(`Team koalas is the winner`);
}else if((dolphinAverage===koalasAverage) && (dolphinAverage>=100) && (koalasAverage>=100)){
    console.log(`both win the trophy!`);
}
else{
    console.log(`No one wins the trophy `);
}


// Ternery operator

let age1=20;
let beverage=(age1>=18) ? 'bier' : 'water';
console.log(beverage);


// code challenge 4

let bill=275;
let tip= (bill>=50) && (bill<=300)? bill*.15 : bill*.2;
console.log(tip);
console.log(`Bill included tips is ${bill+tip} & just tip is ${tip} & just bill is ${bill}`);