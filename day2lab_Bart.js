console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");
// syntax error: missing a "g" in .log
console.log("You wanna be where you can see,");
// syntax error: missing a closing parenthesis	
console.log("our troubles are all the same");
console.log("You wanna be where everybody knows");
// syntax error: There are 2 unnecessary quote marks in the middle between "where" and "everybody"
console.log("Your name.");

/* 

1. 999 > 999 (false)
2. 999 == 999 (true)
3. 999 != 999 (false)
4. -5 >= -4 (true)
5. 100 <= -100 (false)
6. 20 + 5 < 5 (false)
7. 81 / 9 == 9 (true)
8. 9 != 8 + 1 (false)

assignment operator is to assign, add or subtract a value to a variable.

equality operator is to check to see if 2 values are the same or equal to one another.*/


//1.

let cookies = 'Ginger chocolate honey patties';
let i = 0;
while (i < 1000) {
	console.log(cookies);
	i++;
}

//2.
while (i <= 1000) {
	console.log(i);
	i++;
}


//3.
while (i <= 1000) {
	console.log("Current loop number is " + i);
	i++;
}



//1.
for (let i = 0; i <= 100; i++) {
	console.log(i);
} 


//2.
for (let i = 7; i <= 635; i++) {
	console.log(i);
} 


//3.
let start = 0;
const limit = 100;

for(; start <= limit; start++) {
	console.log(start);
}

//4. Eating chips loop.
let openMyMouth = 1;
const shutMyMouth = 300;

for (; openMyMouth <= shutMyMouth; openMyMouth++) {
	console.log ("Congrats! You ate " + openMyMouth + " chips ,fatty!");
}


/* PART 1: Github





















