let user = [{
    name: "prashant",
    title: "katiyar",
    designation: "engineer"
},
{
    name: "anjali",
    title: "katiyar",
    designation: "engineer"
}
]
let result_1 =
   user.forEach(elm=>({
       fullName:elm.name
   }))
 user.map((ele)=>{
 return fullName = ele.name +' '+ ele.title 
});

console.log(result_1);