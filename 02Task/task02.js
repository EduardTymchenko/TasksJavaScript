//1
function sequence(start = 0, step = 1) {
   start -= step;
   return function () {
      start += step;
      return start;
   }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
var generator3 = sequence(3);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8
console.log(generator3()); // 3

//2
var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(gen, x) {
   var mass = [];
   for (let index = 0; index < x; index++) {
      mass[index] = gen();
   }
   return mass;
}

//3
var characters = [
   { 'name': 'barney', 'age': 36 },
   { 'name': 'fred', 'age': 40 }
];

function pluck(obj, field) {
   var mass = [];
   var i = 0;
   obj.forEach(element => {
      for (var key in element) {
         if (key === field) {
            mass[i++] = element[key];
         }
      }
   });
   return mass;
}
console.log(pluck(characters, 'name')); // [‘barney’, ‘fred’]

//0
function map(fn, array){
   var array2 = [];
   for(var i=0; i<array.length; i++){
    array2[i] = fn(array[i])();
   }
   return array2;
  }
var arr = [11,12,13,2,55];
var map1 = map(sequence,arr);
console.log(map1);
