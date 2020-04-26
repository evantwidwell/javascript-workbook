'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  enterShip(ship) {
    if(this.ship == null){
    this.ship = ship;
    ship.crew.push(this)
    console.log(`${this.name} is starting on the ${this.ship.shipName}`)
    // console.log(ship.crew)
    // console.log(this)
    } else  {
      // console.log(ship.crew)
      ship.crew.pop()
      // console.log(ship.crew)
      
      ship.crew.push(this)
      // console.log(ship.crew)
      console.log(`${this.name} is now on board the ${ship.shipName}`)
      // console.log(ship.name + " " + ship.crew.name)
    
    }

  }
}

class ship{
  constructor(shipName, type, ability, crew){
  this.shipName = shipName;
  this.type = type;
  this.ability = ability;
  this.crew = [];
}

  missionStatement() {
    // console.log("Hello, this ship is " + this.shipName);
    // console.log(this.crew.job)
    // let specificJob = this.crew[0].job
    // console.log(specificJob)
    // console.log(jobTypes[specificJob])

    // console.log(this.crew[0].job)
    // // console.log(this.crew)
    // console.log(this.type)
    for(let i = 0; i < this.crew.length; i++){
      // console.log()
    if (jobTypes[this.crew[i].job] == this.type){
      console.log(`The ${this.shipName}'s special ability is ${this.ability}`)
       return `The ${this.shipName}'s special ability is ${this.ability}`;
    
     } else {
        this.ability = "Can't perform a mission yet.";
        console.log(`The ${this.shipName}'s special ability is ${this.ability}`)
        return `The ${this.shipName}'s special ability is ${this.ability}`;
     }
  } 
}
}


//Instantiate new crewmembers
const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

//Instantiate new ships
const mav = new ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
const Hermes = new ship('Hermes', 'Main Ship', 'Interplanetary Space Travel')

//Place crewmembers in ships, they can be reassigned properly
crewMember1.enterShip(mav)
crewMember2.enterShip(Hermes)
crewMember1.enterShip(Hermes)

// Print the mission statement if there is a crewmember on board
mav.missionStatement();
Hermes.missionStatement();

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
