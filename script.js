let scoreCount = -1;       // Set counter to 1
let scoreTotal = -999;
let entry;    // Message
 
// enter scores until 999 is entered
while (entry != 999) {
  entry = parseInt(prompt('Enter test score\nOr enter 999 to end entries'));
  scoreCount++;
  scoreTotal += entry;
}
 
alert('Average score is ' + scoreTotal / scoreCount);

