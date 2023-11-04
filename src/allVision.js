// sort arrary
function show() {
    let arr = [2, 3, 0, 1];
    let len = arr.length;
    let newarr = [];
    console.log(len);
    for (let i = len - 1; i > 0; i--) {
        newarr.push(arr[i]);
    }

    console.log(newarr);
}

show();

let str = "thIS Is a GOOd girL"; // out put This Is A Good Girl. 
let result = (str) => {
    let lowerStr = str.toLowerCase();
    let splitStr = lowerStr.split(' ');
    let result = splitStr.map((ele)=>{
        console.log(ele);
        return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase())
    })
    console.log(result.join(' '));

}

result(str);