console.log("all connected")
const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
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
  constructor(id, name, age, skillSet, placeBorn, teamName){
    super(id, name, age, skillSet, placeBorn);
    this.teamName = teamName;
  }
}
// class redTeammate {
//   constructor(){}
// }

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`);
  arrOfPeople[id] =  new player (arrOfPeople[id].id, arrOfPeople[id].name, arrOfPeople[id].age, arrOfPeople[id].skillSet, arrOfPeople[id].placeBorn);
  // console.log(arrOfPeople[id]);
  listOfPlayers.push(arrOfPeople[id]);
  // console.log(listOfPlayers);
  const listPlayers = document.getElementById('players')
  listOfPlayers.map(person => {
    const li = document.createElement("li")
    const redButton = document.createElement("button")
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue Team"
    redButton.innerHTML = "Red Team"
    blueButton.addEventListener('click', function(){
      console.log("Blue Team")

      arrOfPeople[id].teamName = "blue"
      console.log(`Now I'm on the ${arrOfPeople[id].teamName} team`)
      blueTeam.push(arrOfPeople[id]);
      console.log(blueTeam)
      const bluePlayers = document.getElementById('blue')
      blueTeam.map(person => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(person.name +' is on the ' + person.teamName + ' team'))
        bluePlayers.append(li)
      })
    })
    redButton.addEventListener('click', function(){
      console.log("Red Team")

      arrOfPeople[id].teamName = "red"
      console.log(`Now I'm on the ${arrOfPeople[id].teamName} team`)
      // arrOfPeople[id] = new Teammate(arrOfPeople[id].teamName, arrOfPeople[id].id, arrOfPeople[id].name, arrOfPeople[id].age, arrOfPeople[id].skillSet, arrOfPeople[id].placeBorn);
      redTeam.push(arrOfPeople[id]);
      console.log(redTeam)
      const redPlayers = document.getElementById('red')
      redTeam.map(person => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(person.name +' is on the ' + person.teamName + ' team'))
        redPlayers.append(li)
      })
    })
    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(person.name + '-' + person.placeBorn))
    listPlayers.append(li)
  })



}