var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

console.log("--- Solution 1 - Long Form - Output 1 ---");
for(var i=0; i<ages.length; i++) {
  var printText = "Age " + ages[i] + " is allowed to see: ";
  for(var j=0; j<minAgeForRating.length; j++) {
    if(ages[i] >= minAgeForRating[j]) {
      if (j == 0)
        printText += ratings[j];
      else
        printText += ","+ratings[j];
    }
  }
  console.log(printText);
}

// --- Solution 2 - Short Form - Output 1 --------------------
console.log("");
console.log("--- Solution 2 - Short Form - Output 1 ---");
ages.forEach(age => {
  var printText = "Age " + age + " is allowed to see: ";
  var ratingAllowed = minAgeForRating.filter(minAge => {
    return age >= minAge;
  }).map((minAge, rIndex) => {
    return ratings[rIndex];
  })
  console.log(printText + "" + ratingAllowed);
});

// --- Solution 3 - Short Form - Output 2 --------------------
console.log("");
console.log("--- Solution 3 - Short Form - Output 2 ---");
ratings.forEach((rating, rIndex) => {
  console.log(rating);
  var agesAllowed = ages.filter(age => {
    return age >= minAgeForRating[rIndex];
  }).map(age => age);
  console.log(agesAllowed.join(", "));
});
