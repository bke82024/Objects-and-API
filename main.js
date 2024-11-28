//1. create an array of 5 person objects, the objects should contain first name last name, age and job properties, jobb should be a boolean.

const people = [
  {
    firstName: "Erik",
    lastName: "Birknes",
    age: 28,
    job: false,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Emil",
    lastName: "Endresen",
    age: 35,
    job: true,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Lars",
    lastName: "Krogsrud",
    age: 17,
    job: true,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Kai",
    lastName: "Midget",
    age: 9999999999999999999999999999999999999,
    job: true,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Fadi",
    lastName: "Hadi",
    age: 27,
    job: false,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
];

//------------------------------------------------------------------------------------------------------------------------------------------------

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name

console.log(people[0].firstName + " " + people[0]["lastName"]);
//------------------------------------------------------------------------------------------------------------------------------------------------

//3. That was tiresome.. just so much typing. Let's write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.

console.log(people[1].fullName);

//------------------------------------------------------------------------------------------------------------------------------------------------

//4. It's the third person's birthday! And their job status changed. Update their age and job status using dot notation.
function birthday(person) {
  person.job ? (person.job = false) : (person.job = true);
  person.age++;
  console.table(person);
}
birthday(people[2]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.

function fotballPubben(person) {
  if (person.age >= 18) {
    console.log(person.fullName + ": party time!");
  } else {
    console.log(person.fullName + ": too young!");
  }
}

people.forEach((person) => {
  fotballPubben(person);
});
//------------------------------------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.

function university(person, degreeType) {
  if (degreeType === "bachelors") {
    person.age += 3;
    person.degree = "Bachelors";
    person.studentLoan = 30000;
  } else if (degreeType === "masters") {
    person.age += 5;
    person.degree = "Masters";
    person.studentLoan = 50000;
  } else {
    console.log("Invalid degree type provided");
    return;
  }
}

university(people[0], "bachelors");
console.table(people[0]);

//------------------------------------------------------------------------------------------------------------------------------------------------

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
