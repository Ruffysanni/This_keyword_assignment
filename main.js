//PART 1
	//1. What does this function output? Why ?
	var data = this;
	console.log(data);
	//it will return the window object because that's  the default binding
    
    
	//2.  What does this function output? Why ?
	function logThis() {
	    return this;
	}
	logThis();
	//it will return the window object
	

	//3.  What does this function output? Why ?
	var instructor = {
	    firstName: 'Tim',
	    sayHi: function () {
	        console.log("Hello! " + this.firstName);
	    }
	}
	instructor.sayHi()
	//it will return "Hello! Tim"
	//The this in the function sayHi is refering to the parent object.
	

	//4. What does this function output? Why ?
	var instructor = {
	    firstName: 'Tim',
	    info: {
	        catOwner: true,
	        boatOwner: true
	    },
	    displayInfo: function () {
	        console.log("Cat owner? " + this.catOwner);
	    }
	}
	instructor.displayInfo()
	//it will return "Cat owner? undefined"
	//this is because the call site for the displayInfo function is not corrensponding to the parent object.
	

	//5.  What does this function output? Why ?
	var instructor = {
	    firstName: 'Tim',
	    info: {
	        catOwner: true,
	        boatOwner: true,
	        displayLocation: function () {
	            return this.data.location;
	        },
	        data: {
	            location: "Oakland"
	        }
	    },
	}
	instructor.info.displayLocation()
	// it will return "Oakland"
	// this is because after the this accessed th parent object it went ahead to refer to another object.
	


	//6.  What does this function output? Why ?
	var instructor = {
	    firstName: 'Tim',
	    info: {
	        catOwner: true,
	        boatOwner: true,
	        displayLocation: function () {
	            return this.location;
	        },
	        data: {
	            location: "Oakland",
	            logLocation: this.displayLocation
	        }
	    },
	}
	instructor.info.data.logLocation()
	//it will return TypeError
	//this is because the keyword this where it is been used is only refering to the object and not the function.
	

	

	//PART 2
	//Fixing a code
	var obj = {
	    fullName: "Harry Potter",
	    person: {
	        sayHi: function () {
	            return `This person's name is ${this.fullName}`
	        }
	    }
	}
	

	let correct = obj.person.sayHi.call(obj)
	console.log(correct)
	

	// 2. Write a function called sumEvenArguments which takes all of the arguments
	// passed to a function and returns the sum of the even ones.
	function evenAdd(...args) {
	    let reciever = 0;
	    for (var i = 1; i < args.length; i++) {
	        if (args[i] % 2 === 0) {
	            reciever += args[i]
	        }
	    }
	    return reciever;
	}
	

	let sumEvenArguments = evenAdd.bind()
	console.log(sumEvenArguments(1, 2, 3, 4))
	

	

	

	// 3. Write a function called invokeMax which accepts a function and a maximum amount.
	// invokeMax should return a function that when called increments a counter.If the
	// counter is greater than the maximum amount, the inner function should return
	// "Maxed Out!"
	

	function invokeMax(fn, max) {
	    let count = 0;
	    return function test(a, b) {
	        count++
	        if (count > max) {
	            return `Maxed out`
	        } else {
	            return fn(a, b)
	        }
	    }
	}
	function add(a, b) {
	    return a + b
	}
	

	var addOnlyThreeTimes = invokeMax(add, 3);
	console.log(addOnlyThreeTimes(1, 2))
	console.log(addOnlyThreeTimes(6, 2))
	console.log(addOnlyThreeTimes(5, 2))
	console.log(addOnlyThreeTimes(17, 2))
	

	

	

	/* 4. Write a function called guessingGame which takes in one parameter amount.The
	function should return another function that takes in a parameter called guess.In the
	outer function, you should create a variable called answer which is the result of a
	random number between 0 and 10 as well as a variable called guesses which should
	be set to 0.
	In the inner function, if the guess passed in is the same as the random number
	    (defined in the outer function) - you should return the string "You got it!".If the guess
	is too high return "You're too high!" and if it is too low, return "You're too low!".You
	should stop the user from guessing if the amount of guesses they have made is
	greater than the initial amount passed to the outer function.
	You will have to make use of closure to solve this problem. */
	

	function guessingGame(amount) {
	    var answer = Math.floor(Math.random() * 11)
	    var guesses = 0;
	    return function (guess) {
	        guesses++
	        if (guesses <= amount) {
	            if (guess === answer) {
	                return `You got it, the guessed number is ${answer}, and your input is ${guess}`;
	            } else if (guess < answer) {
	                return `You are too low`;
	            } else {
	                return `you are too high`;
	            }
	

	        } else {
	            return `Yor are out of Guesses, The guessed number is ${answer}, and your input is ${guess}`;
	        }
	    }
	}
	var game = guessingGame(3)
	console.log(game(2))
	console.log(game(4))
	console.log(game(6))
	console.log(game(4))


