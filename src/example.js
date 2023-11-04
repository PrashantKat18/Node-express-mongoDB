// // let str = "thIS sTRiNg NeeDS to BE foRMatTed";
// // let str1 = "this is good boy.";

// // const formatMessage = (str,str1) => {
// //     // Expected Output: This String Needs To Be Formatted
// //     let lowerCaseStr = str.toLowerCase();
// //     let splitStr =  lowerCaseStr.split(' ');
// //     let result = splitStr.map((ele)=>{
// //        return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase());
// //     })
// //     console.log(result.join(' '));


// // }

// // formatMessage(str);

// function xyz(str1){
//    let convertStr = str1.toLowerCase();
//    let splitStr = convertStr.split(" ");
//    let result = splitStr.map((ele)=>{
//        return ele.replace(ele.charAt(0) , ele.charAt(0).toUpperCase());
//    })
//    console.log(result.join(' '));
//     // splitStr.charAt(0);
// //    console.log(result);

// }

// xyz("thiS iS An emaIl aDDress");

// // let arr = [12, 13, 1, 10, 34, 1];
// // let n = arr.length;
// // function findSecondSmallest(arr, arr_size) {
// //     let i, j, first, second;
// //     first = arr[0];
// //     let dup = [];
// //     for (i = 0; i < n; i++) {
// //         if (arr[i] < first) {
// //             second = first
// //             first = arr[i];
// //         }
// //         else if(arr[i] < second && arr[i] != first) {
// //            second = arr[i]
// //         }
// //     }
// //     console.log("first", first, second);

// //     console.log("The smallest element is " + first + " and second " +
// //         "Smallest element is " + second + '\n');
// // }


// // findSecondSmallest(arr, n);
// // arr = [4, 8, 9, 3, 1,2]
// // let sn = (arr) => {
// //     let len = arr.length, i, first = arr[0], second;
// //     for (i = 0; i <= len; i++) {
// //         if (arr[i] < first) {
// //             second = first
// //             console.log(second);
// //             first = arr[i]
// //         }
// //         else if (arr[i] < second) {
// //             second = arr[i]
// //         }
// //     }
// //     console.log("first no:", first, "second no:", second);
// // }

// // sn(arr)


// // find the 1st and second smallerst number

// let number = [2, 1, 4, 2, 35, 6, 3,3,3];
// let len, i,two,third;
// let one = number[0];
// len = number.length;
// let results = (number) => {
//     for (i = 0; i <= len; i++) {
//         if (number[i] < one) {
//             third = two
//             two = one
//             one = number[i]
//         }
//         else if (number[i] < two ){
//             third = two
//             two = number[i]
//         }
//         else if(number[i] < third){
//            third = number[i]
//            console.log("jjj",third);
//         }
//     }
//     console.log("smallest number", one,two,third);
// }

// // results(number);



let str = 'thIS iS  a gOOD bOY' //output - This Is A Good Boy

let result = (str) => {
    let a = str.toLowerCase();
    console.log(a.charAt(0).toUpperCase() + a.slice(1));
    let lowerCaseStr = str.toLowerCase().split(' ');
    //   let firstLetter = lowerCaseStr.charAt(0).toUpperCase();
    let res = lowerCaseStr.map(ele => {
        return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase());
    })
    console.log(res.join(' '));
    //   let replace =  replace(lowerCaseStr , firstLetter )
    //   console.log(replace);
}

result(str);


let arr = [2,2,2,4,1,6,4]; // duplicat
let results = (arr)=>{
    let counts = {};
    for(let i=0;i<arr.length;i++){
      if(counts[arr[i]]){
        counts[arr[i]] = counts[arr[i]] + 1;
      }
      else {
        counts[arr[i]] =  1
      }
    }
   console.log(counts);
}

results(arr);
