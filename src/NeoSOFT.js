const a = [4, 3, 6, 3, 4, 3, "sa"]
function count_duplicate(a) {
    let counts = {}

    for (let i = 0; i < a.length; i++) {
        if (counts[a[i]]) {
            counts[a[i]] = counts[a[i]] + 1
        } else {        
            counts[a[i]] = 1
        }
    }
    
    // for (let prop in counts) {
    //     if (counts[prop] >= 2) {
    //         console.log(prop + " counted: " + counts[prop] + " times.")
    //     }
    // }
    console.log(counts)
}

// count_duplicate(a)
// let arr = ["6", "8", "9", "15", "7"];
// let neArr = []
// arr.sort()
// let result = arr.sort((a,b) => { 
//     console.log(a,b);
//     return a - b; // 8-6 , 9-8,7-9,7-8,
//     // 6,7,8,
// });
// const numbers = [4, 2, 5, 17, 13];
// numbers.sort(function(a, b) {
//     console.log(a,b);
//   return a - b;
// });
// console.log(numbers);
// console.log(arr);

let names = 'bilbo, gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
    name[0]=name[0].toUpperCase()

  console.log(name); // A message to Bilbo  (and other names)
}





