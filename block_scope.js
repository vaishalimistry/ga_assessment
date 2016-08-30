// Correct way
function addToQueue (...people) {
  var positions = [];

  for(var i=0; i<people.length; i++) {
    let j = i; // store the i value in block scope, or make the i a block variable (let)
    positions[i] = function() {
      return j+1;
    } // j will be destroyed at the end of the block scope, hence the value won't increment like i
  }
  return positions;
}

var queuePositions = addToQueue('Greg', 'Charlie', 'Anna');
console.log(queuePositions[0]()); // 1
console.log(queuePositions[1]()); // 2
console.log(queuePositions[2]()); // 3

// Wrong way
/*
function addToQueue (...people) {
  var positions = [];

  for(var i=0; i<people.length; i++) {
    positions[i] = function() {
      return i+1;
    }
  }
  return positions;
}

var queuePositions = addToQueue('Greg', 'Charlie', 'Anna');
console.log(queuePositions[0]()); // 4
console.log(queuePositions[1]()); // 4
console.log(queuePositions[2]()); // 4*
*/
