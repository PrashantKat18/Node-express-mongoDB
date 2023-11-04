// let arr = [2, 3, 4, 10,10,10,10,10];
// let result = (arr) => {
//     let first = arr[0], second, i, len;
//     len = arr.length;
//     for (i = 0; i <= len; i++) {
//         if (arr[i] > first) {
//             second = first
//             console.log(second);
//             first = arr[i]
//         }
//         else if(arr[i] < second && arr[i] != first ){
//            second = arr[i]
//         }
//     }
//     console.log("first highest no",''+ first , '' + "Second highest No", second);
// }
// result(arr);




let a = ['X', 'Y', 'Z', 'Q'];
let b = a;
b[1] = 'P';
console.log(a);['X', 'Y', 'Z', 'Q'];
console.log(b);['X', 'p', 'Z', 'Q'];