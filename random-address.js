// random address

var streetNumbers = [1,2,3,4,5,6,7,8,9,10];
var streetNames = ['Winston St', 'Burdett St', 'York St', 'Michigen Av', 'Baldwin Av', 'Russell St', 'Avenger St', 'Muriel St', 'Rodney St', 'Justice St'];
var cityNames = ['Sydney', 'Melbourne', 'Gold Coast', 'Darwin', 'Adelaide', 'Perth', 'Hobart', 'Albury', 'Golburn', 'Canberra'];
var stateNames = ['NSW', 'ACT', 'VIC', 'WA', 'SA', 'QLD', 'NT', 'TAS', 'ABC', 'XYZ'];
var zipCodes = [9348, 9384, 6284, 1384, 4562, 2439, 5532, 6372, 5746, 4635];

console.log(streetNumbers[Math.floor(Math.random() * 10)] + ' ' +
            streetNames[Math.floor(Math.random() * 10)] + ', ' +
            cityNames[Math.floor(Math.random() * 10)] + ' ' +
            stateNames[Math.floor(Math.random() * 10)] + ', ' +
            zipCodes[Math.floor(Math.random() * 10)]);
