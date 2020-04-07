'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {
  
    const wordtrim = word.trim().toLowerCase();
    // console.log(wordtrim);
    const vowels = ['a' , 'e' , 'i' , 'o', 'u'];
    // console.log(vowels);
    // console.log(wordtrim.length)
    for (let i=0; i < wordtrim.length; i++){
       for (let j=0; j < vowels.length; j++) {
          if (wordtrim.charAt(i) == vowels[j]){
            if (i == 0){
              console.log(wordtrim + "yay");
            }
            if (i != 0){
              let wordSlice=wordtrim.slice(0, i);
              let wordSplit=wordtrim.substring(i, 30)
              // console.log(wordSplit)
              console.log(wordSplit + wordSlice +"ay");
            }
            return i;
            // const firstVowel = i;
            // console.log(firstVowel);
         }
       }
  }

  console.log(firstVowel);
  
    
  //  }
  
  // let first = wordtrim.indexOf('a');
  
  

}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
