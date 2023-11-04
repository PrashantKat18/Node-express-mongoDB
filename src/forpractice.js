// sort Array

// let arr = [2, 3, 4, 1, 20, 5],temp;
// let sort = (arr) => {
//     let len = arr.length;
//     for (let i = 0; i <= len; i++) {
//         for (let j = i + 1; j <= len; j++) {
//             if(arr[i] > arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// sort(arr);


// duplication Number
// let arr = [0, 1, 21, 0, 22, 2, "pp",1, 0, 3, 3,7,"pp","ds"];
// let result = (arr) => {
//     let i, j, temp, arr1 = [], count = {};
//     let len = arr.length;
//     for (i = 0; i < len; i++) {
//         for (j = i + 1; j < len; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }
//             else if (arr[i] == arr[j]) {
//                 arr1.push(arr[i])
//             }
//         }
//         if (count[arr[i]]) {
//             count[arr[i]] += 1;
//         }
//         else {
//             count[arr[i]] = 1;
//         }
//     }
//     console.log(arr, "\n", arr1, "\n", count);
// }
// result(arr);


// find the ast and 2nd smallest number