var beers = ['tatra', 'perła', 'vip', 'harnaś', 'żywiec', 'tyskie'];

// console.log(beers[0]); tatra
// console.log(beers[1]); perła
// console.log(beers[2]);
// ...

for (var i = 0; i < beers.length; i++){
    console.log(beers[i]);
 
}


// for (var i <= beers.length - 1; i = 0; i++){
//     console.log(beers[i]);
 
// }


var numbers = [];

for (var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    numbers[i] = randomNumber;
}

console.log(numbers);
