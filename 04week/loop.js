// Question 1

let number = 0;
do {
  number += 1;
  console.log("The number is " + number);
} while (number < 1000);

// Question 2

const person1 = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "January 1, 1957",
  gender: "male",
};


// Question 3

const loopOverObject = (obj) => {
  let text = "";
  let x;

  for (x in obj) {
    text += obj[x]
    // console.log(obj[x].slice(-4) % 2)
    if(obj[x].slice(-4) % 2 == 1){
    console.log("odd number birthyear is  " + obj[x])
    }
  }
  return text
}


//Question 4

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "December 5, 1925",
  gender: "female",
};

const person3 = {
  firstName: "Dirk",
  lastName: "jones",
  birthDate: "January 3, 1995",
  gender: "male",
}
const arrayOfPeople = [person1 , person2]
console.log(arrayOfPeople);

//Question 5

const eachPerson = arrayOfPeople.map((arrayOfPeople) => {
  return `${arrayOfPeople.firstName} + ${arrayOfPeople.lastName} + ${arrayOfPeople.birthDate} + ${arrayOfPeople.gender}`;
});
console.log(eachPerson)

//Question 6 Use .filter() to filter the persons array and console.log only males in the array.

const genderMale = arrayOfPeople.filter((person) => {
  // console.log(person.gender)
  return person.gender == "male";
});

console.log(genderMale); 
 //Question 7 Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldPeople = arrayOfPeople.filter((person) => {
  return person.birthDate.slice(-4) < 1990;
});
console.log(oldPeople)