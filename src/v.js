// function wordsReverser(string){
//     return string.split("").reverse().join("").split(" ").reverse().join(" ")  
//     }

//     console.log(    wordsReverser("hi I am Prashant"));

//     wordsReverser("hi I am Prashant")
let str = "Hello Good Boy"
let reverseStr = (str) => {
    // console.log(str.split('').reverse().join('').split(" ").reverse().join(" "));
    str.split(" ");
    for (let name of str) {
        const revArray = [];
        const length = name.length - 1;
        
        // Looping from the end
        for(let i = length; i >= 0; i--) {
            revArray.push(name[i]);
        }
    }
    str.join(" ")

    console.log(str)
}

reverseStr(str);


// let string = "Prashant";
// let reverse = (string) => {
//     let len = string.length -1;
//     console.log("j",len);
//     let newString = ""
//     for (let i = len; i >= 0; i--) {
//         newString += string[i]
//     }
//     console.log(newString);

// }

// reverse(string);

// program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const result = reverseString("prashant");
// console.log(result);

