// interview Question
//Q-1 find the greatest & smallest no in the array.
//Q-2 Sort Array Accesnding & decending order.
//Q-3 reverse arrary 
//Q-4 arr = [20,12,11,10,25,29,90] find the above 12 number.



// ***********Q-1 find the greatest & smallest no in the array.********
let greatestNumber = () => {
    let arr = [1, 2, 8, 3, 10, 6, 20, 21];
    const len = arr.length;
    let gn = arr[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[0]) {
            gn = arr[i]
        }
    }
    console.log("greates Number is ", gn);
}
greatestNumber();


// *************//Q-2 Sort Array Accesnding & decending order.*****************
let sorted = () => {
    let arr = ["a", "c", "d", "f", "b"]
    let no = [1, 2, 8, 3, 10, 6, 20, 21];
    // if answer is negative then a will come before b.
    // if answer is postive then b before a.
    let result = no.sort((a, b) => {
        return a - b;
    });
    console.log(result, arr.sort());
}
sorted();

let sort = () => {
    let number = [3, 2, 8, 3, 10, 6, 20, 0];
    const len = number.length;
    // let newarr = [];
    for (let i = 0; i <= len; i++) {
        for (let j = i + 1; j <= len; j++) {
            if (number[i] > number[j]) {
                newarr = number[i];
                number[i] = number[j];
                number[j] = newarr
            }
        }
    }
    console.log("new sort arr",number);

}

sort();


// ******//Q-3 reverse arrary ***** Q-4 arr = [20,12,11,10,25,29,90] find the above 12 number.
let reverseArr = () => {
    let arr = [1, 2, 8, 3, 10, 6, 20, 21];
    let newArr = [];
    let aboveNUmber = []
    const len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] > 8) {
            aboveNUmber.push(arr[i])
        }
        newArr.push(arr[i])
    }
    return console.log("reverse arr is", newArr, "\n", "above 12 number is", aboveNUmber);
}
reverseArr();





// find the occurance in the arrary 
let array = [2, 1, 2, 1, 2, 14, 4, 4]
let findValue = (array) => {
    let len = array.length;
    let newArr = [];
    for (let i = 0; i <= len; i++) {
        if (array[i] == 2 || array[i] == 4) {
            newArr.push(array[i]);
        }
    }
    return console.log("result is", newArr);
}

findValue(array)

