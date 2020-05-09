'use strict'

console.log("loading script.js file")

let myContacts = [];

window.onload = function() {
    console.log("window loaded")
    fetchAddressBook();
}

function fetchAddressBook() {
    console.log("Inside the post method, about to make a fetch request")
    
        fetch('https://randomuser.me/api/?results=10')
        .then(function(response) {
            console.log("inside the fetch address book");

            if(!response.ok) {
              throw Error("Server said no");
            }
            console.log("Processing response, passing on json payload")
            return response.json()
        })
        .then(function(json) {
            console.log("Response  =", json)
            processContacts(json.results)
        }).catch(function(Error){
            alert("Something went wrong!")
        })
    console.log("Request sent off...")
}
function processContacts(contacts){
  console.log("Processing the contacts")
  console.log("contacts size = ", contacts.length);
  contacts.forEach(function(contact){
      console.log("adding contacts to the page")
      console.log(contact.gender)
      let span = document.createElement("span");
      let li = document.createElement("li")
      let button = document.createElement("button")
      let ul = document.getElementById("contacts");
      ul.appendChild(li);
      ul.appendChild(button);
      button.innerText = "click for more info";
      li.innerText = `${contact.name.first} ${contact.name.last} ${contact.cell}`
    //   span.innerText = contact.gender
      button.addEventListener("click", function(){
          let img = document.createElement("img")
          let br = document.createElement("br")
          let newLi = document.createElement("li")
          let h3 = document.createElement("h6")
          span.innerText = contact.gender
          h3.innerText = contact.email
          li.appendChild(newLi)
          
          li.appendChild(span)
          li.appendChild(h3)
          li.appendChild(img)
          li.appendChild(br)
          ul.removeChild(button)
        //   li.appendChild()
          img.src = contact.picture.medium
      })
  })
}