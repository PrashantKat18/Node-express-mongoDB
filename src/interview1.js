var a = { x: 10 }
var b = a;
a.x = 20;

console.log(a.x);
console.log(b.x);


var b= 2;
function value() {
    b = 5;
    // console.log(b);
}

console.log(b);



let, const, var
-----------------

let a = ['X', 'Y', 'Z', 'Q'];
let b = a; 
b[1] = 'P';
log(a); ['X', 'Y', 'Z', 'Q'];
log(b); ['X', 'p', 'Z', 'Q'];

------------------

Hoisting
a =5;
log(a);
const a;

-------------------
  
function hello() {
 console.log(this); // hello(){}
}

let hello2 = () => { 
 console.log(this); // error
}

hello();
hello2();
 
-----------------------
  
let str = 'hello everyone';

let splitStr = str.split(' ');
// ['h','e','l','l']

let count = {};
for (let i=0;i<=splitStr.length;i++) {
  if(count[splitStr[i]]){
     count[splitStr[i]] = count[splitStr[i]] + 1
  }
  else {
    count[splitStr[i]] = 1;
  }
}

{ h:1, e:4, l:2, ... }

-------------------

     A
    /  \
   E    F
   |
   D 
--------------------






































































































