function letterCounter() {
    let typedText = document.getElementById('textInput').value;
    let caseInsensitive = typedText.toLowerCase();
    let finalText = caseInsensitive.replace(/[^a-z'\s]+/g, "");
    let letterCounts = {};

    for (let i = 0; i < finalText.length; i++) {
        let currentLetter = finalText[i];
        if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
        } else { 
        letterCounts[currentLetter]++; 
        }
        
    }
    
    for (let letter in letterCounts) {
    const span = document.createElement("span");  
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
    }
    console.log(letterCounts)
}


function wordCounter() {
    let typedText = document.getElementById('textInput').value;
    let caseInsensitive = typedText.toLowerCase();
    let finalText = caseInsensitive.replace(/[^a-z'\s]+/g, "");
    let words = finalText.split(/\s/);
    let wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (wordCounts[currentWord] === undefined) {
        wordCounts[currentWord] = 1; 
        } else { 
        wordCounts[currentWord]++; 
        } 
    }
    
    for (let word in wordCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${word}": ${wordCounts[word]}, `;
    span.innerText = textContent; 
    const words = document.getElementById("wordsDiv");
    words.appendChild(span); 
    }
    console.log(wordCounts)
}

function cleanDiv() {
   const letters = document.getElementById('lettersDiv');
   letters.innerHTML = '';
   const words = document.getElementById("wordsDiv");
   words.innerHTML = '';
}

const button = document.getElementById("countButton");
button.addEventListener("click", function() {
   cleanDiv();
   letterCounter();
   wordCounter();
});