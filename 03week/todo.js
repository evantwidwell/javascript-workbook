'use strict';

console.log('added to do list file');



let allSpans = document.querySelectorAll("span");

for(let i=0 ; i < allSpans.length ; i++){
  let span = allSpans[i];
  setupSpanEvent(span);
  span.addEventListener('click' , function(){
    
    console.log("this span got clicked", span);
    span.classList.toggle("done");
  })
}