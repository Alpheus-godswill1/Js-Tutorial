//showMessage('Title...');

//console.log('Tile to do');


// let total = 4.67, product = "hiking boots",
//  discounted = true;
//  
// let Welcome = "welcome";

// let time_99 = "boys";
// showMessage(time_99);
// let let = 889;
// showMessage(let);

/*Redeclaring variables */
let price;
price = 45.98;
showMessage(price);
console.log(price);

/*Constants--because it does not changes it remains constant,which enables future developers who will be modifying your code to their understanding */
// const num = 45.67;
// showMessage(num)

/*Using Var Keywords--normally said it has alot of difficulties */

console.log(will)
var will = 67;

/*Numbers--Operators */
//addition--normal--shortcuts
//subtraction--normal--shortcuts
//division--normal--shortcuts
//multiplication--normal--shortcuts
//increment operator
//decreement operator
//modulus
let pricee = 20.56;
pricee += 4;
console.log(pricee);
showMessage(pricee)

//Operator Precedence
let num = (3+3)*2;
console.log(num);

//number precision
let numb = 1.1 + 1.3;
console.log(numb);

//Negative Numbers
let negadd = 22 - (-3);
console.log(negadd);

//Strings
//let message = 'hello \v world\"';
let name = 'Andrea';
let message = `hello ${name}`;//using back ticks

showMessage(message)


//manipulating strings
//using methods
let str = 'HELLO';
str = str.toLocaleLowerCase();
    str = str.substring(1);
//using properties
showMessage(str);

// let vtext = "Hi is everyone at home";
// vtext =vtext.length();//Having error executing the length function or better called method
//showMessage(vtext);

let concate = '123';
showMessage(concate + 2)

//Converting strings and Numbers

let amount = 123
amount = amount.toString();
showMessage(typeof amount);

//NaN -- means Not a Number
let number = Number.parseFloat("A13435.6");

showMessage(number);

//Boolean Variables

let saved = false;
saved = !saved;
showMessage(saved);

//Null and Undefined types

let save = 2;
//used by developers to wipe out a variable
save = null;
//but can also be saved as undefined 
save = undefined;
showMessage(save);
console.log(save);

//Objects and Symbols

let person = {
    firstname : 'john',
    lastname : 'Adams',
};
console.log(typeof person);
showMessage(person.firstname)
//symbols -- look at it later


/*PROGRAM FLOW */
if(5 === 5){
    console.log('yes');
}

if(true){
    showMessage('true');
}

let priced = 4;
if(priced > 5){
    showMessage('true');
}

let pricedd = 4;
if(pricedd === 4 ){
    showMessage('welcome');
}

if(0){
    showMessage('true');
}

if('0'){
    showMessage('true');
}

//to round up one's numbers--note toFixed() converts value to a string
if(+(1.1 + 1.3).toFixed(2) === 2.4){
    showMessage('2');
}

if(+(1.1 + 1.3).toFixed(2) === 2.4){
    let messagey = 'hello';
    showMessage( messagey);
}

//If and Else Statements

let numbers = 4;
if(numbers > 8){
    showMessage('Not less than value');
}
else  if(numbers !==4){
    showMessage('Greater than the initial value declared');
}
else if (numbers !== 5){
    showMessage('Truly number is not equal to the values');
}

//comparing using === and ==

//Note when using == sign to compare variable --javascript will automatically converts (types)

if (1 === "1"){
    console.log("true");
}
else{
    showMessage('false');
}


if (1 == "1"){
    console.log("true");
}
else{
    showMessage('false');
}

if (1 != "1"){
    console.log("true");
}
else{
    showMessage('false');
}


if (1 !== "1"){
    console.log("true");
}
else{
    showMessage('false');
}

//Ternary Operator

//(condition) ? true-statement : false-statement;
let gut = 20;
let msg = ( gut > 10) ? 'expensive' : 'cheap'
showMessage(msg); //expensive

let biny = 90;
(biny < 89 ) ? showMessage("yell") : showMessage("N0")

let bin 
(bin < 89 ) ? showMessage("yell") : showMessage("wahl")


//Block Scope and Let

if (true){
    let stunt = 'yes';
    showMessage(stunt);
}
//console.log(stunt);

//For Loop - Statement
//statement -- condition -- increment
for (let i = 0; i <7; i++){
    console.log(i);
}
// 0 1 2 3 4 5 6

//While Loops
let count = 5;

while (count < 5) {
    console.log(count)
    count++;
}
console.log("\n");

let i = 5;

while (i > 0){
    console.log(i);
    i--
}

//Do-while Loop

let v = 4;
do {
    console.log(v);
    v++
}while(v < 9);

// let p = -4;
// do {
//     console.log(v);
//     p--
// }while(p < 9);

let bilol = 65;
let gree = (bilol < 5) ? "yezzy" : "boi"
showMessage(gree);

/*Functions Program */

function playGood(){
    let boi = "FRIEND";
    boi.toLocaleLowerCase;
    console.log(boi);
}
playGood()

let myFunction = function loggingFunction(){
    console.log("Here is a message");
}
myFunction();

function showMsg(messag,anothemsg){
    console.log(messag,anothemsg)
}
showMsg("First Message","1111111111111");
showMsg("Welcome","To-do-list");

let myFunct = function loggingFunct(mess,firstName){
    console.log(mess);
    console.log(firstName);

}
myFunct("hello","Welcome")

//Getting information out of a function --Function Return Values

function getSecretCode(value){
    let code = value * 42;
    return code;
}
console.log(getSecretCode(2));//84

function showMell(mell){
    document.getElementById('me').textContent= mell;
}

changePercentOff(45);



let mySymbol = Symbol();
// Objects-- Properties;
let pers = {
    name : "john",
    age : 32,
    partTime :false,
    [mySymbol] : 'SecretNotation',
    showInfo : function(realAge){
        showMessage(this.name + ' is ' + realAge);
    }
}
pers.showInfo(34);
//change  variables also like this

pers.age = 54;
//or
pers['age'] = 56;
 
console.log(pers.age);

//Objects -- Methods

//passing Objects to a function -- Practice sending values to objects and functions

let per = {
    name : "john",
    age : 32,
    partTime :false,
}

function changePercentOff(p){
    p.age++;
}
changePercentOff(per);
showMessage(per.age)

//Standard Builtin-Objects

//--Go to MDN (Mozilla Developer Network )


let vi = "Very Very Insteresting";
let c = console.log.bind(document);
c(vi);

c("hello")

/* Standard Built-Ins Objecst*/ 

//How to work with Date();

let now = new Date();
showMessage(now.toDateString());

let absoluteValue = -42;
showMessage( Math.abs(absoluteValue) );

let Stg = "hello ";
showMessage(Stg.charAt(2));

//make MDN(Mozilla Development Network Your friend);
//let biuy = NaN;


//Document Object Module(DOM);

//Styling DOM Elements
const hwil = document.getElementById('message');

hwil.style.color = '#FFF';
hwil.style.fontWeight = 'lighter';

//Detecting Button Clicks

const seeReview = document.getElementById('see-review');

seeReview.addEventListener('click', function(){
    c('clicked');

    const review = document.getElementById('review');

    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        seeReview.textContent ='CLOSE REVIEW';
    }else{
        review.classList.add('d-none');
        seeReview.textContent = 'SEE REVIEW';
    }
    
    
})

//Showing and Hiding DOM Elements


/*Creating and Initializing Arrays*/
let vaues = [1,2,3];
let vlus = Array.of(1,2,3)

const vluis = ['a' , 'b' , 'c'];
c(vluis);
c(typeof vluis);
c(Array.isArray(vluis));

//Accessing Array Items
let vruis = ['wed','a', 'b','c'];
c(vruis[0]);
c(vruis[1]);

vruis.push('fg');
c(vruis);
vruis.pop();
c(vruis);
vruis.shift();
c(vruis);
vruis.unshift('t');
console.log(vruis);
vruis.push('ghh','ck',
'vlau')
c(vruis)
vruis.pop();
c(vruis)

//using Slice method and Splice Method

const hity = ['agb','bullion','gun'];
const newHity = hity.slice(1,2);
c(newHity);
//using Splice() For Deleting;
hity.splice(1,2);
c(hity);
//using Splice() For Inserting 
const harty = ['quee','unc','br','vhai']
harty.splice(1,0,'foo')
c(harty);
