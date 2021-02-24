/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
console.log('test');
console.log('test');

/*** 
 * `quotes` array 
***/

let quotes = [
  { quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', 
    source: 'Nelson Mandela',
    citation: 'White House Reception',
    year: 1998,
    tag: '#gettingbackup'
  },
  { quote: '"Injustice anywhere is a threat to justice everywhere."', 
    source: 'Martin Luther King Jr.',
    citation: 'Letter from Birmingham Jail',
    year: 1963,
    tag: '#justice'
  },
  { quote: '"Try not to become a man of success. Rather become a man of value."', 
    source: 'Albert Einstein',
    citation: 'LIFE Magazine',
    year: 1955,
    tag: '#manofvalue'
  },
  { quote: '"Do All the Good You Can; In All the Ways You Can"', 
    source: 'John Wesley',
    citation: 'The Law Established through Faith',
    year: 1799,
    tag: '#dogood'
  },
  { quote: '"The object of education is to teach us to love what is beautiful."', 
    source: 'Plato',
    citation: 'The Republic',
    year: '375 BC',
    tag: '#educationgoal'
  }];
  console.log(JSON.stringify(quotes));



/***
 * `getRandomQuote` function
***/
// 
//  Returns a random quote object from an array of quote objects.
//  
//  @param {array} quotes - array of quote objects.
//  @return {object} The random quote object.
//  
function getRandomQuote(quotes) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random()*quotes.length);
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let selectedQuote = quotes[randomNumber];
  // 3. Return the variable storing the random quote object
  console.log(selectedQuote); 
  return selectedQuote;
}
getRandomQuote(quotes);

/***
 * `printQuote` function
***/
// 
//  sets the innerHTML of the quote-box div to equal the complete HTML string
// 
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuote = getRandomQuote(quotes);
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let initiate = `<p class = 'quotes'>${randomQuote.quote}</p> <p class = 'source'>${randomQuote.source}`;
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (randomQuote.citation !== undefined) {
    initiate += `<span class = 'citation'>${randomQuote.citation}</span>`;
  }
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (randomQuote.year !== undefined) {
    initiate += `<span class = 'year'>${randomQuote.year}</span>`;
  }
  //extra requirements - extra property: tag
  if (randomQuote.tag !== undefined) {
    initiate += `<br><span>${randomQuote.tag}</span>`;
  }
  //extra requirements - background color change
  document.body.style.backgroundColor = `rgb(${Math.random()*255}, 193, ${Math.random()*255})`; 

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  initiate += '</p>';
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = initiate; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//extra requirement - refresh page
window.addEventListener ('load', function () {
  setInterval (printQuote, 4000);
}, false);