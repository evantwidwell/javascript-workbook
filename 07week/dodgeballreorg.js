console.log("all connected")
const arrOfPeople = [
  {
    id: 0,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 1,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 2,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 3,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 4,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 5,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 6,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(id, name, age, skillSet, placeBorn){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}
class Teammate extends player {
  constructor(teamName, id, name, age, skillSet, placeBorn){
    super(id, name, age, skillSet, placeBorn);
    this.teamName = teamName;
  }
}
let madePlayers = 0
//This lists the people eligible to play dodgeball in the DOM and creates a button to make them a player
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  console.log(madePlayers)
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    
    

    //When the button is clicked, the make teammate function is called
    
    button.addEventListener('click', function() {makePlayer(person.id), listElement.removeChild(li)})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
  // Since we're reusing the same people here, I need to reassign their ids so that later we can loop through them and they have unique ids
    // for(let i=0; i < madePlayers; i++){
    //   console.log("going through each and adding 1")
    //   console.log("Times list people clicked: " + madePlayers)
    //   for(let x=0; x<arrOfPeople.length; x++){
    //     console.log("pushing one instance of each to the array of people")
    //     // arrOfPeople[x] = arrOfPeople[x+arrOfPeople]
    //     // arrOfPeople[x].id = arrOfPeople[x].id + arrOfPeople.length
    //     console.log(arrOfPeople[x].name )
    //     let addPerson = arrOfPeople[x]
    //     arrOfPeople.push(addPerson)
    //   }
    // }
  madePlayers ++;
}
//When the make teammate button is clicked, this function is called
//This function passes the person at index id into the player classlet playersListed = 0
// let numPlayers = 0
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`);
  console.log(arrOfPeople)
  arrOfPeople[id] =  new player (arrOfPeople[id].id, arrOfPeople[id].name, arrOfPeople[id].age, arrOfPeople[id].skillSet, arrOfPeople[id].placeBorn);
  // the newly created player is pushed into the list of players

  listOfPlayers.push(arrOfPeople[id]);
  
  // console.log(listOfPlayers);
  // console.log(numPlayers)
  // console.log(listOfPlayers[numPlayers]);
  // console.log(id)
  // numPlayers++;
  //Print a list of the players, their ages, and construct buttons to assign them to a team
  const listPlayers = document.getElementById('players')
  
  const li = document.createElement("li")
  const redButton = document.createElement("button")
  const blueButton = document.createElement("button")
  blueButton.innerHTML = "Blue Team"
  redButton.innerHTML = "Red Team"
  li.appendChild(redButton)
  li.appendChild(blueButton)
  li.appendChild(document.createTextNode(arrOfPeople[id].name + " - " + arrOfPeople[id].age))
  listPlayers.appendChild(li)
  //When cicked, the button calls the function to assign them to the correct team. It passes the id of the clicked player to the function
  blueButton.addEventListener('click', function(){makeBluePlayer(arrOfPeople[id].id), listPlayers.removeChild(li)})
  redButton.addEventListener('click', function(){makeRedPlayer(arrOfPeople[id].id), listPlayers.removeChild(li)})
}
//This function will extend the player's class, add them to their team, and then use their attributes to add them to the DOM
let blueIndex = 0
const makeBluePlayer = (id) => {
  console.log(`li ${id} was clicked!`);
  // console.log(listOfPlayers)
  // console.log(id)
//The for loop goes through the list of players above and finds the one with the correct id, and pushes it to the correct team. 
  for(let i=0; i<listOfPlayers.length; i++){
    if (listOfPlayers[i].id === id){
      console.log(listOfPlayers[i].name + "should be on the blue team")
      //This makes the player a teammate, an extension of the player class.
      listOfPlayers[i] = new Teammate ("Blue", listOfPlayers[i].id, listOfPlayers[i].name, listOfPlayers[i].age, listOfPlayers[i].skillSet, listOfPlayers[i].placeBorn)
      blueTeam.push(listOfPlayers[i])
      //This prints the Teammate from the  blue team to the DOM
      const bluePlayers = document.getElementById('blue')
      const li = document.createElement('li')
      li.innerHTML = `${listOfPlayers[i].name} is on the ${listOfPlayers[i].teamName} team`
      bluePlayers.appendChild(li)
blueIndex++;
      // console.log(blueTeam)
    }
  }
//This prints the player from the Teammate class on array blueteam to the DOM
// console.log("blueindex "+ blueIndex + "  "+blueTeam[blueIndex].name)
// const bluePlayers = document.getElementById('blue')
//       const li = document.createElement('li')
//       li.innerHTML = `${blueTeam[blueIndex].name} is on the ${blueTeam[blueIndex].teamName} team`
//       bluePlayers.appendChild(li)
blueIndex++;
}
let redIndex = 0;
const makeRedPlayer = (id) => {
    // console.log(listOfPlayers)
  // console.log(id)
//The for loop goes through the list of players above and finds the one with the correct id, and pushes it to the correct team. 
for(let i=0; i<listOfPlayers.length; i++){
  if (listOfPlayers[i].id === id){
    console.log(listOfPlayers[i].name + "should be on the red team")
    //This makes the player a teammate, an extension of the player class.
    listOfPlayers[i] = new Teammate ("Red", listOfPlayers[i].id, listOfPlayers[i].name, listOfPlayers[i].age, listOfPlayers[i].skillSet, listOfPlayers[i].placeBorn)
    redTeam.push(listOfPlayers[i])
    // console.log(redTeam)
  }
}
//This prints the player from the Teammate class on array blueteam to the DOM
console.log("redindex "+ redIndex + "  "+redTeam[redIndex].name)
const redPlayers = document.getElementById('red')
    const li = document.createElement('li')
    li.innerHTML = `${redTeam[redIndex].name} is on the ${redTeam[redIndex].teamName} team`
    redPlayers.appendChild(li)
redIndex++;
}
  // console.log(listOfPlayers)
  // console.log(id)
 
  // for(let i=0; i<listOfPlayers.length; i++){
  //   if (listOfPlayers[i].id === id){
  //     console.log(listOfPlayers[i].name + "should be on the red team")
  //     listOfPlayers[i] = new Teammate ("Red", listOfPlayers[i].id, listOfPlayers[i].name, listOfPlayers[i].age, listOfPlayers[i].skillSet, listOfPlayers[i].placeBorn)
  //     redTeam.push(listOfPlayers[i])
  //     console.log(redTeam)
  //     const redPlayers = document.getElementById('red')
  //     const li = document.createElement('li')
  //     li.innerHTML = `${listOfPlayers[i].name} is on the ${listOfPlayers[i].teamName} team`
  //     redPlayers.appendChild(li)
      
  //   }
  // }
  // const redPlayers = document.getElementById('red')
  //     const li = document.createElement('li')
  //     li.innerHTML = `${redTeam[redIndex].name} is on the ${redTeam[redIndex].teamName} team`
  //     redPlayers.appendChild(li)
  //     redIndex++;
  //     console.log(redIndex)
// }