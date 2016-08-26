// beer
var bottleText = "bottles";
for(var i=100; i>=1; i--) {

  if(i==1)
  {
    bottleText = "bottle";
  }
  console.log(i + ' ' + bottleText + ' of beer on the wall, ' + i + ' ' + bottleText + ' of beer.');
  console.log('Take one down and pass it around, ' + i + ' ' + bottleText + ' of beer on the wall.');
  console.log('');
}
