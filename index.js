<<<<<<< HEAD

function theBeatlesPlay(musicians, instruments) {
  const empty = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return empty
}


///////


function johnLennonFacts(facts) {
  const excitedFacts = []

  let i = 0
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return excitedFacts
}

///////

function iLoveTheBeatles(number) {
  const empty = []

  do {
    empty.push('I love the Beatles!')
    number++
  } while (number < 15)

  return empty
=======
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
	var beatles = [];
	for (var i = 0; i<musicians.length; i++) {
	beatles.push(musicians[i] + " plays " + instruments[i]);
	}
	return(beatles);
}

/////
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  
var i = 0;
	var lennon = facts.length
	var morelennon = [];

	while (lennon > 0) {
		morelennon.push(facts[i] + "!!!");
		i++;
		lennon--;
	}
	return(morelennon);
}
////////


function iLoveTheBeatles(number){
  var empty = [];
  number++;
  
	var i = 0;
	do {
		empty.push("I love the Beatles!");
		i++;

	} while (i < number);
	
if (number === 18) {
		return("I love the Beatles!");
	}
	
	return(empty);
  
>>>>>>> e6b4a486a8c4d81f739581c6daa1c4295da6e1d7
}
