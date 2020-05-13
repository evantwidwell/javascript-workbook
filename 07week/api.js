'use strict'
let arrayOfBreweries =0
let arrayOfPosts
console.log("working!")
window.onload = function(){
// getBreweries()
consolePosts()
console.log("Window Loaded")
}
const getBreweries = () => {
  fetch('https://api.openbrewerydb.org/breweries?per_page=50')
    .then(res => res.json())
    .then(posts => arrayOfBreweries = posts)
   
}
const consolePosts = () => {
  console.log(arrayOfBreweries)
}

const clickButton = document.getElementById("clickState")
clickButton.addEventListener('click', function(){
  console.log("Clicked")
  let inputElement = document.getElementById('userState');
  let state = inputElement.value;
  console.log(state);
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
    .then(res => res.json())
    .then(posts => arrayOfBreweries = posts)
    console.log(arrayOfBreweries)
    for(let i = 0; i < arrayOfBreweries.length; i++){
      console.log(arrayOfBreweries[i].state)
      let li = document.createElement("li")
      li.innerHTML = `${arrayOfBreweries[i].name} is in ${state}`
      let ul = document.getElementById("all-breweries")
      ul.appendChild(li)
    }
  // for( let i = 0; i <arrayOfBreweries.length; i++){
  //   console.log(arrayOfBreweries[i].state)
  //   if(arrayOfBreweries[i].state === state){
  //     console.log(arrayOfBreweries[i].name + "is in your state")
  //     let li = document.createElement("li")
  //     li.innerHTML = `${arrayOfBreweries[i].name} is in ${state}`
  //     let ul = document.getElementById("all-breweries")
  //     ul.appendChild(li)
  //   }
  // }
})

 
  
    
  

