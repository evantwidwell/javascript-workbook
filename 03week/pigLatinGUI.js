// 'use strict';

const pigLatin = (word)  => {
  
  const wordtrim = word.trim().toLowerCase();
  console.log(wordtrim);

  const vowels = ['a' , 'e' , 'i' , 'o', 'u'];
  console.log(vowels);
  console.log(wordtrim.length)
  for (let i=0; i < wordtrim.length; i++){
     for (let j=0; j < vowels.length; j++) {
        if (wordtrim.charAt(i) == vowels[j]){
          if (i == 0){
            console.log(wordtrim + "yay");
            answer = wordtrim + "yay";
            document.getElementById('translatedText').innerText = "The answer is " + answer;
  
          }
          if (i != 0){
            let wordSlice=wordtrim.slice(0, i);
            let wordSplit=wordtrim.substring(i, wordtrim.length)
            // console.log(wordSplit)
            console.log(wordSplit + wordSlice +"ay");
            answer = wordSplit + wordSlice +"ay";
            document.getElementById('translatedText').innerText = "The answer is " + answer;
          }
          // return i;
          // const firstVowel = i;
          // console.log(firstVowel);
       }
     }
}}

let Button = document.getElementById('translate');
Button.addEventListener('click', function() {
  console.log("clicked the translate button")
  let inputElement = document.getElementById('inputText');
  let translateText = inputElement.value;
  let answer = '';
  console.log(answer)
  inputElement.value = '';
  console.log(translateText);

  pigLatin(translateText);
  // document.getElementById('translatedText').innerText = "The answer is " + answer;
});